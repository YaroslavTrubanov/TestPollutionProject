using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploma.Models
{
    public class Station : BaseEntity
    {
        public GeoPoint GeoPoint { get; set; }
        public Address Address { get; set; }
    }
}
