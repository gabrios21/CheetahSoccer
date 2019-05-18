using CheetahSoccerWebAPI.BusinessLayer;
using CheetahSoccerWebAPI.DataAccess;
using CheetahSoccerWebAPI.POCO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CheetahSoccerWebAPI.Controllers
{
    public class PlayersController : ApiController
    {
        PlayerManager manager = new PlayerManager();
  
        // GET: api/Players
        public IEnumerable<string> Get()
        {
            manager.GetAllPlayers();
            return new string[] { "value1", "value2" };
        }

        // GET: api/Players/5
        public string Get(Player player)
        {
            manager.GetPlayer(player);
            return "value";
        }

        // POST: api/Players
        public void Post([FromBody]Player player)
        {
            manager.CreatePlayer(player);
        }

        // PUT: api/Players/5
        public void Put([FromBody]Player player)
        {
            manager.UpdatePlayer(player);
        }

        public void Delete(Player player)
        {
            manager.DeletePlayer(player);
        }
    }
}
