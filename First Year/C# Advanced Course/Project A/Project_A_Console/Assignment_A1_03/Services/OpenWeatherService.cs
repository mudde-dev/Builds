using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Json; 
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using System.Text.Json;

using Assignment_A1_03.Models;

namespace Assignment_A1_03.Services
{
    public class OpenWeatherService
    {
        HttpClient httpClient = new HttpClient();
        
        //Cache declaration
        ConcurrentDictionary<(double, double, string), Forecast> cachedGeoForecasts = new ConcurrentDictionary<(double, double, string), Forecast>();
        ConcurrentDictionary<(string, string), Forecast> cachedCityForecasts = new ConcurrentDictionary<(string, string), Forecast>();

        // Your API Key
        readonly string apiKey = "77e005dffff0e2266169cfb77bbd45d6";

        //Event declaration
        public event EventHandler<string> WeatherForecastAvailable;
      
        protected virtual void OnWeatherForecastAvailable (string message)
        {
            WeatherForecastAvailable?.Invoke(this, message);
        }
            
        public async Task<Forecast> GetForecastAsync(string City)
        {
            //part of cache code here to check if forecast in Cache
            //generate an event that shows forecast was from cache
            //Your code

            if (cachedCityForecasts.ContainsKey((City, apiKey)))
            {
                var cachedWeatherForecast = cachedCityForecasts[(City, apiKey)];
                OnWeatherForecastAvailable($"Cached weather data for {City}");
                return cachedWeatherForecast;
            }


            //https://openweathermap.org/current
            var language = System.Globalization.CultureInfo.CurrentUICulture.TwoLetterISOLanguageName;
            var uri = $"https://api.openweathermap.org/data/2.5/forecast?q={City}&units=metric&lang={language}&appid={apiKey}";

            Forecast forecast = await ReadWebApiAsync(uri);

            //part of event and cache code here
            //generate an event with different message if cached data
            //Your code

            cachedCityForecasts[(City, apiKey)] = forecast;
            OnWeatherForecastAvailable($"The weather forecast is availabe for {City} is available");

            return forecast;

        }
        public async Task<Forecast> GetForecastAsync(double latitude, double longitude)
        {
            //part of cache code here to check if forecast in Cache
            //generate an event that shows forecast was from cache
            //Your code
            if (cachedGeoForecasts.ContainsKey((latitude, longitude, apiKey)))
            {
                OnWeatherForecastAvailable($"Cached weather data for ({latitude}), ({longitude})");
                var cachedForecast = cachedGeoForecasts[(latitude, longitude, apiKey)];
                return cachedForecast;
            }
            //https://openweathermap.org/current
            var language = System.Globalization.CultureInfo.CurrentUICulture.TwoLetterISOLanguageName;
            var uri = $"https://api.openweathermap.org/data/2.5/forecast?lat={latitude}&lon={longitude}&units=metric&lang={language}&appid={apiKey}";

            Forecast forecast = await ReadWebApiAsync(uri);

            //part of event and cache code here
            //generate an event with different message if cached data
            //Your code

            cachedGeoForecasts[(latitude, longitude, apiKey)] = forecast;
            OnWeatherForecastAvailable($"The weatherforecast for geolocation: {latitude} {longitude} in {language} has been updated");
            return forecast;
        }
        private async Task<Forecast> ReadWebApiAsync(string uri)
        {
            //Read the response from the WebApi
            HttpResponseMessage response = await httpClient.GetAsync(uri);
            response.EnsureSuccessStatusCode();
            WeatherApiData wd = await response.Content.ReadFromJsonAsync<WeatherApiData>();


            //Convert WeatherApiData to Forecast using Linq.
            //Your code
            var forecast = new Forecast
            {
                City = wd.city.name,
                Items = wd.list.Select(item => new ForecastItem
                {
                    DateTime = UnixTimeStampToDateTime(item.dt),
                    Temperature = item.main.temp,
                    WindSpeed = item.wind.speed,
                    Description = item.weather.FirstOrDefault()?.description,
                }).ToList()
            };
            return forecast;
           
        }
        private DateTime UnixTimeStampToDateTime(double unixTimeStamp)
        {
            DateTime dateTime = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            dateTime = dateTime.AddSeconds(unixTimeStamp).ToLocalTime();
            return dateTime;
        }
    }
}
