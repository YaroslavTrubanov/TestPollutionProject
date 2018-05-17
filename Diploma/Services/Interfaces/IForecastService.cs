using Diploma.Models;

namespace Diploma.Services.Interfaces
{
    public interface IForecastService
    {
        Forecast GetHourlyForecastOfCity(City city);
        Forecast GetDailyForecastOfCity(City city);
    }
}