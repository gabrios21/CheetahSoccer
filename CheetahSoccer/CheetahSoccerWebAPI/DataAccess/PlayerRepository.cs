﻿using System;
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
            return this.conn.Query<Player>("SELECT * FROM Player WHERE Id = @id;", new {id}).SingleOrDefault();
        }

        public Player FindByEmail(string email)
        {
            return this.conn.Query<Player>("SELECT * FROM Player WHERE Email = @email;", new { email }).SingleOrDefault();
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
                    "Email = @Email, " +
                    "FieldPosition = @FieldPosition, " +
                    "StrongFoot = @StrongFoot, " +
                    "Picture = @Picture " +
                    "WHERE Id = @Id;";

            if (this.conn.Execute(sqlStatement,player) > 0)
            {
                success = true;
            };
            return success;
        }

        public bool Delete(int id)
        {
            bool success = false;
            if (this.conn.Execute("DELETE FROM Player WHERE Id = @id;", new { id }) > 0) {
                success = true;
            }
            return success;
        }
    }
}