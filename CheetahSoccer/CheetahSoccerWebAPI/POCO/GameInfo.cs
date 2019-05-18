using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CheetahSoccerWebAPI.POCO
{
    public class GameInfo
    {
        public Game game { get; set; }
        public List<Player> players { get; set; }
        public int goals { get; set; }
        public int assists { get; set; }
        public int fouls { get; set; }
    }
}