using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Json; 
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text.Json;

using Assignment_A1_01.Models;
using Assignment_A1_01.Services;
using System.Threading.Channels;

namespace Assignment_A1_01
{
    class Program
    {
        static async Task Main(string[] args)
        {
            double latitude = 0.347596;
            double longitude = 32.582520;

            Forecast forecast = await new OpenWeatherService().GetForecastAsync(latitude, longitude);
            WeatherApiData dates = new WeatherApiData();
            ForecastItem forecastItem = new ForecastItem();

            //Your Code to present each forecast item in a grouped list
            Console.WriteLine($"Weather forecast for {forecast.City}");

            var weather = forecast.Items.GroupBy(d => d.DateTime.Day);
            foreach( var day in weather )
            {
                var formattedDate = day.First().FormattedDate;
                Console.WriteLine(formattedDate);
                foreach ( var item in day)
                {
                    Console.WriteLine($"-   {item.DateTime.TimeOfDay}, " +
                    $"Temperature: {item.Temperature}°C, " +
                    $"Wind Speed: {item.WindSpeed} m/s, " +
                    $"Description: {item.Description}");

                }
            }
            //foreach(var day in forecast)
            //{
            //    string weather_date = day.datetime;
            //    string weather_desc = day.description;
            //    string weather_tmax = day.tempmax;
            //    string weather_tmin = day.tempmin;
            //}
        }
    }
}
