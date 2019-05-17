﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CheetahSoccer.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Players()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Games()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult PlayerRegistration()
        {
            ViewBag.Message = "Enter Cheetah Soccer";

            return View();
        }
    }
}