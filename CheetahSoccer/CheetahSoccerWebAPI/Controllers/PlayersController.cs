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
        public IHttpActionResult Get()
        {
            List<Player> playerLst = manager.GetAllPlayers();
            if (playerLst.Count() > 0)
            {
                return Ok(playerLst);
            }
            else
            {
                return NotFound();
            }
        }

        // GET: api/Players/5
        public IHttpActionResult Get(int id)
        {
            Player player = manager.GetPlayer(id);
            if (player != null)
            {
                return Ok(player);
            }
            else
            {
                return NotFound();
            }
            
        }

        // POST: api/Players
        public IHttpActionResult Post([FromBody]Player player)
        {
            var response = manager.CreatePlayer(player);

            if (response.statusCode == 200) {
                return Ok(response.message);
            }
            return BadRequest(response.message);
        }

        // PUT: api/Players/5
        public IHttpActionResult Put([FromBody]Player player)
        {
            var response = manager.UpdatePlayer(player);

            if (response.statusCode == 200)
            {
                return Ok(response.message);
            }
            return BadRequest(response.message);
        }

        public IHttpActionResult Delete(Player player)
        {
            var response = manager.DeletePlayer(player);
            if (response.statusCode == 200)
            {
                return Ok(response.message);
            }
            return BadRequest(response.message);
        }
    }
}
