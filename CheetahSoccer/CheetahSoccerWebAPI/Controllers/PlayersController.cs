﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CheetahSoccerWebAPI.Controllers
{
    public class PlayersController : ApiController
    {
        // GET: api/Players
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Players/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Players
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Players/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Players/5
        public void Delete(int id)
        {
        }
    }
}
