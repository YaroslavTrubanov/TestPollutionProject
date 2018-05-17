using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diploma.Models
{
    public class Address : BaseEntity
    {
        public City City { get; set; }
        public string Street { get; set; }
        public Area Area { get; set; }
    }
}
