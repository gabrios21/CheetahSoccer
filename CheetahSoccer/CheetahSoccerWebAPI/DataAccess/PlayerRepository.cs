using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using CheetahSoccerWebAPI.POCO;
using Dapper;

namespace CheetahSoccerWebAPI.DataAccess
{
    public class PlayerRepository : IPlayerRepository
    {
        private IDbConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["cheetahSoccerDB"].ConnectionString);

        public Player Find(int id)
        {
            return this.conn.Query<Player>("SELECT * FROM Player WHERE Id = @Id;", new {id}).SingleOrDefault();
        }

        public List<Player> GetAll()
        {
            return this.conn.Query<Player>("SELECT * FROM Player;").ToList();
        }

        public bool Insert(Player player)
        {
            bool success = false;
            var sqlStatement =
                "INSERT INTO Player (Email, FirstName, LastName, FieldPosition, StrongFoot, Picture) VALUES(@Email, @FirstName, @LastName, @FieldPosition, @StrongFoot, @Picture);";
            if (this.conn.Execute(sqlStatement,player) > 0) {
                success = true;
            };
            return success;
        }

        public bool Update(Player player)
        {
            bool success = false;
            var sqlStatement =
                "UPDATE Player " +
                "SET FirstName = @FirstName, " +
                    "LastName = @LastName, " +
                    "FieldPosition = @FieldPosition, " +
                    "StrongFoot = @StrongFoot, " +
                    "Picture = @Picture " +
                    "WHERE Email = @Email;";

            if (this.conn.Execute(sqlStatement,player) > 0)
            {
                success = true;
            };
            return success;
        }

        public bool Delete(string email)
        {
            bool success = false;
            if (this.conn.Execute("DELETE FROM Player WHERE EMAIL = @Email;", new { email }) > 0) {
                success = true;
            }
            return success;
        }
    }
}