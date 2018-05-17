using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploma.Models
{
    public class City : BaseEntity
    {
        public City()
        {
            Stations = new List<Station>();
        }

        public List<Station> Stations { get; set; }
    }
}
