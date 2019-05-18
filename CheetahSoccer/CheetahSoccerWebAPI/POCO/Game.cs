using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CheetahSoccerWebAPI.POCO
{
    public class Game
    {
        public int Id { get; set; }
        public Court Court { get; set; }
        public DateTime GameDate { get; set; }
    }
}