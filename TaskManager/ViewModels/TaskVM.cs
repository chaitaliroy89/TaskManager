﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TaskManager.Models;

namespace TaskManager.ViewModels
{
    public class TaskVM
    {
        public List<Task> taskList { get; set; }
        public Task taskDetails { get; set; }
    }
}