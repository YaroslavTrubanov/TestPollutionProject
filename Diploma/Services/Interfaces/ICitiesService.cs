using System;
using System.Collections.Generic;
using Diploma.Models;

namespace Diploma.Services.Interfaces
{
    public interface ICitiesService
    {
        City GetCityById(Guid id);

        City GetCityByName(string cityName);

        List<City> GetCitiesByNames(List<string> cityNames);
    }
}