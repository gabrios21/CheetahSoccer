﻿using CheetahSoccerWebAPI.POCO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CheetahSoccerWebAPI.DataAccess
{
    public interface IPlayerRepository
    {
        Player Find (string email);
        List<Player> GetAll();
        bool Insert(Player player);
        bool Update(Player player);
        bool Delete(string email);
    }
}