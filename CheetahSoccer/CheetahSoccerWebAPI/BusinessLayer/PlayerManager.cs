using CheetahSoccerWebAPI.DataAccess;
using CheetahSoccerWebAPI.POCO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CheetahSoccerWebAPI.BusinessLayer
{
    public class PlayerManager
    {
        IPlayerRepository dataAccess = new PlayerRepository();
        Response response = new Response();

        public Response CreatePlayer(Player player) {

            if (playerExists(player))
            {
                response.statusCode = 400;
                response.message = "Error while inserting player. You are already part of the Cheetah Soccer team";
            }
            else
            {
                bool isSuccessful = dataAccess.Insert(player);
                if (isSuccessful)
                {
                    response.statusCode = 200;
                    response.message = "Welcome aboard! You are now part of the Cheetah Soccer team";
                }
                else
                {
                    response.statusCode = 400;
                    response.message = "Error while inserting player";
                }
            }

            return response;
        }

        public Response UpdatePlayer(Player player)
        {
            if (playerExists(player))
            {
                bool isSuccessful = dataAccess.Update(player);
                if (isSuccessful)
                {
                    response.statusCode = 200;
                    response.message = "Your information was successfully updated.";
                }
                else
                {
                    response.statusCode = 400;
                    response.message = "Error while updating player";
                }
            }
            else
            {
                response.statusCode = 400;
                response.message = "You are not part of the Cheetah Soccer team. Please register first";
            }

            return response;
        }

        public List<Player> GetAllPlayers(){
            return dataAccess.GetAll();
        }

        public Player GetPlayer(string email) {
            return dataAccess.Find(email);
        }

        public Response DeletePlayer(Player player) {
            if (playerExists(player))
            {
                bool isSuccessful = dataAccess.Delete(player.Email);
                if (isSuccessful)
                {
                    response.statusCode = 200;
                    response.message = "Your information has been deleted. You are not longer part of the Cheetah Soccer team";
                }
                else
                {
                    response.statusCode = 400;
                    response.message = "Error while deleting player";
                }
            }
            else
            {
                response.statusCode = 400;
                response.message = "You are not part of the Cheetah Soccer team";
            }

            return response;
        }

        public bool playerExists(Player player) {

            if (dataAccess.Find(player.Email) != null)
            {
                return true;
            }
            return false;
        }
    }
}