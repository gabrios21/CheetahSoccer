using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CheetahSoccerWebAPI.POCO
{
    public class Player
    {
        public string email { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string fieldPosition { get; set; }
        public string strongFoot { get; set; }
        public string picture { get; set; }

    }
}