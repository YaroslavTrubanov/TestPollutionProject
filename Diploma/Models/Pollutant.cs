using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploma.Models
{
    public class Pollutant : BaseEntity
    {
        public double Value { get; set; }
        public PollutantCategory Category { get; set; }
    }
}
