using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CheetahSoccerWebAPI.POCO
{
    public class Player
    {
        public int id { get; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FieldPosition { get; set; }
        public string StrongFoot { get; set; }
        public string Picture { get; set; }
    }
}