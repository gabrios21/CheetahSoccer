using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CheetahSoccerWebAPI.POCO
{
    public class Game
    {
        public int id { get; set; }
        public Court court { get; set; }
        public DateTime gameDate { get; set; }
    }
}