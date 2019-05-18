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

        public string CreatePlayer(Player player) {

            if (playerExists(player))
            {
                return "Error while inserting player. You are already part of the Cheetah Soccer team";
            }
            else
            {
                bool isSuccessful = dataAccess.Insert(player);
                if (isSuccessful)
                {
                    return "Welcome aboard! You are now part of the Cheetah Soccer team";
                }
                else
                {
                    return "Error while inserting player";
                }
            }
        }

        public string UpdatePlayer(Player player)
        {
            if (playerExists(player))
            {
                bool isSuccessful = dataAccess.Update(player);
                if (isSuccessful)
                {
                    return "Your information was successfully updated.";
                }
                else
                {
                    return "Error while updating player";
                }
            }
            else
            {
                return "You are not part of the Cheetah Soccer team. Please register first";
            }
        }

        public List<Player> GetAllPlayers(){
            return dataAccess.GetAll();
        }

        public Player GetPlayer(Player player) {
            return dataAccess.Find(player.Email);
        }

        public string DeletePlayer(Player player) {
            if (playerExists(player))
            {
                bool isSuccessful = dataAccess.Delete(player.Email);
                if (isSuccessful)
                {
                    return "Your information has been deleted. You are not longer part of the Cheetah Soccer team";
                }
                else
                {
                    return "Error while deleting player";
                }
            }
            else
            {
                return "You are not part of the Cheetah Soccer team.";
            }
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