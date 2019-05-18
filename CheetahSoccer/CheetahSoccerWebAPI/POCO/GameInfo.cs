using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CheetahSoccerWebAPI.POCO
{
    public class GameInfo
    {
        public Game Game { get; set; }
        public List<Player> Players { get; set; }
        public int Goals { get; set; }
        public int Assists { get; set; }
        public int Fouls { get; set; }
    }
}