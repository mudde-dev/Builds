using System;
using System.Linq;
using System.Net;
using System.Threading;
using System.Net.Http;
using System.Net.Http.Json; 
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text.Json;

using Assignment_A1_02.Models;
using Assignment_A1_02.Services;

namespace Assignment_A1_02
{
    class Program
    {
        static async Task Main(string[] args)
        {
            OpenWeatherService service = new OpenWeatherService();

            //Register the event
            //Your Code
            service.WeatherForecastAvailable += Service_WeatherForecastAvailable;

            Task<Forecast>[] tasks = { null, null };
            Exception exception = null;
            try
            {
                double latitude = 59.5086798659495;
                double longitude = 18.2654625932976;

                //Create the two tasks and wait for comletion
               var taskGeo = Task.Run(() =>  service.GetForecastAsync(latitude, longitude));
               var taskCity = Task.Run(() =>  service.GetForecastAsync("Cairo"));


                tasks[0] = taskGeo;
                tasks[1] = taskCity;

                Task.WaitAll(taskGeo, taskCity);
            }
            catch (Exception ex)
            {
                exception = ex;
                //How to handle an exception
                //Your Code
                Console.WriteLine($"Error: One or more errors occured: {ex.Message}");
            }

            foreach (var task in tasks)
            {
                //How to deal with successful and fault tasks
                //Your Code

                if(task != null)
                {
                    if (task.IsFaulted)
                    {
                        Console.WriteLine($"City Weather message error: {task.Exception?.Message}");
                    }

                    else if (task.IsCompletedSuccessfully)
                    {
                        var result = task.Result;
                        PrintForecast(result);
                    }

                    else Console.WriteLine("Task is completed but there were some problems");
                }
            }
        }


        //Event handler declaration
        //Your Code
        private static void Service_WeatherForecastAvailable(object sender, string e)
        {
            Console.WriteLine($"The weather forecast has been updated! {e}");
        }


        static public void PrintForecast(Forecast forecast)
        {
            if(forecast != null && forecast.Items != null)
            {
                Console.WriteLine($"\nWeather forecast for {forecast.City}");

                var weather = forecast.Items.GroupBy(d => d.DateTime.Day);
                foreach (var day in weather)
                {
                    var formattedDate = day.First().FormattedDate;
                    Console.WriteLine(formattedDate);
                    foreach (var item in day)
                    {
                        Console.WriteLine($"-   {item.DateTime.TimeOfDay}, " +
                        $"Temperature: {item.Temperature}°C, " +
                        $"Wind Speed: {item.WindSpeed} m/s, " +
                        $"Description: {item.Description}");

                    }
                }
            }
        }
    }
}