﻿using Microsoft.AspNet.Identity;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Data.SqlClient;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using TaskManager.Models;
using TaskManager.ViewModels;

namespace TaskManager.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        //EF DB Context
        //private ApplicationDbContext _context;

        //public HomeController()
        //{
        //    _context = new ApplicationDbContext();
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    _context.Dispose();
        //}

        public ActionResult Index()
        {
            return View();
        }


        public ActionResult GetTaskListing(string date)
        {
            string message = "";
            List<Task> taskList = new List<Task>();
            try
            {
                DateTime selectedDate = Convert.ToDateTime(date);
                var userID = User.Identity.GetUserId();
                //use SQL DB entity to get data from database via entityframework/linq query, example below
                //taskList = _context.Tasks.OrderByDescending(t => t.CreatedOn).ToList();

                taskList.Add(new Task
                {
                    IDTask = Guid.NewGuid().ToString(),
                    Name = "Dusting",
                    Description = "Dusting furnitures",
                    CreatedOn = new DateTime(2021, 07, 05),
                    DueOn = new DateTime(2021, 07, 15),
                    CompletedOn = null
                });
                taskList.Add(new Task
                {
                    IDTask = Guid.NewGuid().ToString(),
                    Name = "Dog Walking",
                    Description = "Take dogs to the park.",
                    CreatedOn = new DateTime(2021, 07, 05),
                    DueOn = new DateTime(2021, 07, 10),
                    CompletedOn = new DateTime(2021, 07, 13)
                });
                taskList.Add(new Task
                {
                    IDTask = Guid.NewGuid().ToString(),
                    Name = "Vaccum Cleaning",
                    Description = "Vaccum clean the area",
                    CreatedOn = new DateTime(2021, 07, 05),
                    DueOn = new DateTime(2021, 07, 10),
                    CompletedOn = null
                });
                taskList.Add(new Task
                {
                    IDTask = Guid.NewGuid().ToString(),
                    Name = "Pressure Wash",
                    Description = "Wash the vehicle",
                    CreatedOn = new DateTime(2021, 07, 13),
                    DueOn = new DateTime(2021, 07, 14),
                    CompletedOn = null
                });
                taskList.Add(new Task
                {
                    IDTask = Guid.NewGuid().ToString(),
                    Name = "Dusting",
                    Description = "Dusting furnitures",
                    CreatedOn = new DateTime(2021, 07, 13),
                    DueOn = new DateTime(2021, 07, 15),
                    CompletedOn = null
                });
                taskList.Add(new Task
                {
                    IDTask = Guid.NewGuid().ToString(),
                    Name = "Baby Sitting",
                    Description = "Take care of toddler",
                    CreatedOn = new DateTime(2021, 07, 13),
                    DueOn = new DateTime(2021, 07, 16),
                    CompletedOn = null
                });
                taskList.Add(new Task
                {
                    IDTask = Guid.NewGuid().ToString(),
                    Name = "Lawn Mowing",
                    Description = "Trim the grass",
                    CreatedOn = new DateTime(2021, 07, 12),
                    DueOn = new DateTime(2021, 07, 15),
                    CompletedOn = null
                });
                taskList.Add(new Task
                {
                    IDTask = Guid.NewGuid().ToString(),
                    Name = "Car Detailing",
                    Description = "Cleaning interiors",
                    CreatedOn = new DateTime(2021, 07, 12),
                    DueOn = new DateTime(2021, 07, 16),
                    CompletedOn = null
                });
                taskList = taskList.Where(v => v.CreatedOn.Year == selectedDate.Year && v.CreatedOn.Month == selectedDate.Month && v.CreatedOn.Day == selectedDate.Day).OrderByDescending(v => v.CreatedOn).ToList();

            }
            catch (Exception ex)
            {
                message = "Error retrieving Tasks. Please try again later.";
            }
            var data = JsonConvert.SerializeObject(new { message, taskList }, Formatting.Indented);
            return Content(data, "application/json");
        }

        #region Manage Task Entities
        //Function to Add New Task
        [HttpPost]
        public ActionResult AddNewTask(TaskVM model)
        {
            string message = "";
            try
            {
                //Check Task Details to avoid redundancy
                //var TaskInDb = _context.Tasks.Where(t => t.Name == taskDetails.Name).FirstOrDefault();
                var TaskInDb = model.taskList.Where(t => t.Name == model.taskDetails.Name).FirstOrDefault();
                //Check if setting user to InActive
                if (TaskInDb == null)
                {
                    //Create New Task Entity
                    Task task = new Task
                    {
                        IDTask = Guid.NewGuid().ToString(),
                        Name = model.taskDetails.Name,
                        Description = model.taskDetails.Description,
                        CreatedOn = DateTime.Now,
                        DueOn = model.taskDetails.DueOn,
                        CompletedOn = model.taskDetails.CompletedOn
                    };

                    //Add and Save
                    //_context.Tasks.Add(task);
                    //_context.SaveChanges();
                    model.taskList.Add(task);
                    message = "Task created successfully!";
                }
            }
            catch (Exception ex)
            {
                message = "Error creating New Task. Please try again later or contact administrator.";
            }

            var data = JsonConvert.SerializeObject(new { message, model.taskList }, Formatting.Indented);
            return Content(data, "application/json");
        }

        //Function to Update Existing Task
        [HttpPost]
        public ActionResult UpdateTask(TaskVM model)
        {
            string message = "";
            try
            {
                //Check Task Details to avoid redundancy
                //var taskInDb = _context.Tasks.FirstOrDefault(t => t.IDTask == taskDetails.IDTask);
                var taskInDb = model.taskList.Where(t => t.IDTask == model.taskDetails.IDTask).FirstOrDefault();
                //Check if setting user to InActive
                if (taskInDb != null)
                {
                    //Update Existing Task Entity

                    taskInDb.Name = model.taskDetails.Name;
                    taskInDb.Description = model.taskDetails.Description;
                    taskInDb.DueOn = model.taskDetails.DueOn;
                    taskInDb.CompletedOn = model.taskDetails.CompletedOn;
                    //Save
                    //_context.SaveChanges();
                    message = "Task updated successfully!";
                }
                else
                {
                    message = "Could not find task to update";
                }
            }
            catch (Exception ex)
            {
                message = "Error updating Task. Please try again later or contact administrator.";
            }

            var data = JsonConvert.SerializeObject(new { message, model.taskList }, Formatting.Indented);
            return Content(data, "application/json");
        }

        //Function to Delete Existing Task
        [HttpPost]
        public ActionResult DeleteTask(TaskVM model)
        {
            string message = "";
            try
            {
                //Check Task Details to avoid redundancy
                //var taskInDb = _context.Tasks.FirstOrDefault(t => t.IDTask == taskDetails.IDTask);
                var taskInDb = model.taskList.Where(t => t.IDTask == model.taskDetails.IDTask).FirstOrDefault();
                //Check if setting user to InActive
                if (taskInDb != null)
                {
                    //Delete and Save
                    //_context.Tasks.Remove(taskInDb);
                    //_context.SaveChanges();
                    model.taskList.Remove(taskInDb);
                    message = "Task deleted successfully!";
                }
                else
                {
                    message = "Could not find task to delete";
                }
            }
            catch (Exception ex)
            {
                message = "Error deleting Task. Please try again later or contact administrator.";
            }

            var data = JsonConvert.SerializeObject(new { message, model.taskList }, Formatting.Indented);
            return Content(data, "application/json");
        }
        #endregion
    }
}