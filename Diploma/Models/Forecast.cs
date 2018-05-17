using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploma.Models
{
    public class Forecast : BaseEntity
    {
        public Forecast()
        {
            Pollutants = new List<Pollutant>();
        }

        public List<Pollutant> Pollutants { get; set; }
    }
}
