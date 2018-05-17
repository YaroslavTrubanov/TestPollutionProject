using System;
using System.Collections.Generic;
using Diploma.Models;

namespace Diploma.Services.Interfaces
{
    public interface IStationsService
    {
        Station GetStationById(Guid id);

        Station GetStationByName(string cityName);

        List<Station> GetStationsByNames(List<string> cityNames);
    }
}