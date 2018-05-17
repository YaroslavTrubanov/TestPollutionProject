using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploma.Models
{
    public class Measurement
    {
        public Measurement()
        {
            PollutantsValues = new Dictionary<string, string>();    
        }

        public Guid Id { get; set; }
        public Dictionary<string, string> PollutantsValues { get; set; }
    }
}
