﻿//Angular
app.controller('HomeCtrl', function ($scope, $http, $timeout, $mdDialog, $mdToast) {
    $scope.homeInitializer = function () {
        $scope.selectedDate = new Date();
        $scope.getTaskListing();
        $scope.isEdit = false;
    };

    //Material Design
    $scope.customFullscreen = false;

    //Close Form
    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    //Clear the form
    $scope.clearTaskForm = function () {
        $scope.IDTask = null;
        $scope.name = "";
        $scope.description = "";
        $scope.createdOn = null;
        $scope.dueOn = null;
        $scope.completedOn = null;
        $scope.isEdit = false;
    };

    //Grids
    $scope.gridOptions = {
        bindingOptions: {
            dataSource: 'taskListing',
        },
        noDataText: 'No task found. Please select another date.',
        columnHidingEnabled: true,
        columnAutoWidth: true,
        editing: {
            mode: "row",
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: false,
            texts: {
                confirmDeleteMessage: ''
            },
        },
        pager: {
            showInfo: true,
            showNavigationButtons: true,
            visible: true
        },
        paging: {
            pageSize: 10
        },
        onCellClick: function (e) {
            if (e.column.caption == 'Task Name') {
                e.cancel = true;

                $scope.IDTask = e.data.IDTask;
                $scope.name = e.data.Name;
                $scope.description = e.data.Description;
                $scope.createdOn = e.data.CreatedOn;
                $scope.dueOn = e.data.DueOn;
                $scope.completedOn = e.data.CompletedOn;

                $mdDialog.show({
                    contentElement: '#renameTaskDialog',
                    parent: angular.element(document.body),
                    targetEvent: e,
                    clickOutsideToClose: true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                });
            }
        },
        onEditingStart: function (e) {
            //Disable Row Editting so we direct users to form below grid
            e.cancel = true;
            //Show Dialog Form - Edit Resident
            $scope.isEdit = true;
            $scope.IDTask = e.data.IDTask;
            $scope.name = e.data.Name;
            $scope.description = e.data.Description;
            $scope.createdOn = new Date(e.data.CreatedOn);
            $scope.dueOn = (e.data.DueOn == null ? null : new Date(e.data.DueOn));
            $scope.completedOn = (e.data.CompletedOn == null ? null : new Date(e.data.CompletedOn));
            $mdDialog.show({
                contentElement: '#addEditTaskDialog',
                parent: angular.element(document.querySelector('#popupContainer')),
                //targetEvent: e,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            });


        },
        onRowRemoving: function (e) {
            e.cancel = true;
            var confirm = $mdDialog.confirm()
                .title('Delete Task')
                .textContent('Are you sure you want to delete Task - ' + e.data.Name + ' ?')
                .ariaLabel('Delete Task')
                .ok('Yes, delete!')
                .cancel('Cancel');

            $mdDialog.show(confirm).then(function () {
                $scope.IDTask = e.data.IDTask;
                $scope.name = e.data.Name;
                $scope.description = e.data.Description;
                $scope.createdOn = new Date(e.data.CreatedOn);
                $scope.dueOn = (e.data.DueOn == null ? null : new Date(e.data.DueOn));
                $scope.completedOn = (e.data.CompletedOn == null ? null : new Date(e.data.CompletedOn));
                $scope.deleteExistingTask();
            }, function () {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Delete cancelled')
                        .position("top right")
                        .hideDelay(3000)
                );
            });
        },
        onRowPrepared: function (e) {
            var today = new Date();
            if (e.rowType == "data" && e.data && ((e.data.CompletedOn == "" || e.data.CompletedOn == null) && new Date(e.data.DueOn) < today)) {
                e.rowElement.css("background-color", "lightpink")
            }
            if (e.rowType == "data" && e.data && !(e.data.CompletedOn == "" || e.data.CompletedOn == null)) {
                e.rowElement.css("background-color", "lightgreen")
            }
        },
        columns: [{
            caption: "Task #",
            dataField: "IDTask",
            visible: false,
        }, {
            caption: "Task Name",
            dataField: "Name",
            allowFiltering: true,
            visible: true,
        }, {
            caption: "Description",
            dataField: "Description",
            allowFiltering: true,
        }, {
            caption: "Created On",
            dataField: "CreatedOn",
            allowFiltering: true,
            cellTemplate: function (container, options) {
                if (options.data.CreatedOn != null || options.data.CreatedOn != undefined) {
                    $("<div>")
                        .text(new Date(options.data.CreatedOn).toLocaleDateString())
                        .appendTo(container);
                }
            }
        }, {
            caption: "Due On",
            dataField: "DueOn",
            allowFiltering: true,
            cellTemplate: function (container, options) {
                if (options.data.DueOn != null || options.data.DueOn != undefined) {
                    $("<div>")
                        .text(new Date(options.data.DueOn).toLocaleDateString())
                        .appendTo(container);
                }
            }
        }, {
            caption: "Completed On",
            dataField: "CompletedOn",
            cellTemplate: function (container, options) {
                if (options.data.CompletedOn != null || options.data.CompletedOn != undefined) {
                    $("<div>")
                        .text(new Date(options.data.CompletedOn).toLocaleDateString())
                        .appendTo(container);
                }
            }
        }
        ],
        sorting: {
            mode: "single"
        },
        hoverStateEnabled: true,
    };

    //Get Task List
    $scope.getTaskListing = function () {
        $http({
            method: "POST",
            url: '../Home/GetTaskListing/',
            data: JSON.stringify({
                date: $scope.selectedDate.toLocaleDateString()
            }),
            contentType: 'application/json; charset=utf-8'
        }).then(function (data) {
            $scope.taskListing = data.data.taskList;
            $("#gridContainer").dxDataGrid("instance").refresh();
            //Wait for all elements to render
        }, function () {
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Error getting list.')
                    .position("top right")
                    .hideDelay(3000)
            );
        });
    };

    //Add Task Form
    $scope.addTaskForm = function () {
        $scope.clearTaskForm();
        //Show Dialog Form
        $mdDialog.show({
            contentElement: '#addEditTaskDialog',
            parent: angular.element(document.querySelector('#popupContainer')),
            //targetEvent: e,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        });
    };

    //Add New Task
    $scope.addNewTask = function () {
        var requestVerificationToken = $('input[name=__RequestVerificationToken]').val();
        var exists = $scope.taskListing.filter(t => t.Name == $scope.name)[0];
        if (exists == null || exists == undefined) {
            //User Objects
            $scope.taskDetails = {
                IDTask: "",
                Name: $scope.name,
                Description: $scope.description,
            };
            if ($scope.dueOn != null && $scope.dueOn != "") {
                $scope.taskDetails.dueOn = $scope.dueOn.toLocaleDateString();
            }
            if ($scope.completedOn != null && $scope.completedOn != "") {
                $scope.taskDetails.completedOn = $scope.completedOn.toLocaleDateString();
            }
            $.ajax({
                type: "POST",
                url: '/Home/AddNewTask/',
                contentType: 'application/json',
                dataType: "json",
                data: JSON.stringify({
                    taskList: $scope.taskListing,
                    taskDetails: $scope.taskDetails,
                }),
                headers: {
                    "__RequestVerificationToken": requestVerificationToken
                },
                success: function (data) {
                    //Clear Form
                    $scope.clearTaskForm();
                    //Hide Dialog
                    $scope.cancel();
                    //Refresh
                    $scope.taskListing = data.taskList;
                    $("#gridContainer").dxDataGrid("instance").refresh();
                    //Notification to user
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent(data.message)
                            .position("top right")
                            .hideDelay(3000)
                    );
                },
                failure: function (errMsg) {
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('Error adding the task')
                            .position("top right")
                            .hideDelay(3000)
                    );
                }
            });
        }
        else {
            //Clear Form
            $scope.clearTaskForm();
            //Hide Dialog
            $scope.cancel();
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Error creating task. Task name already exists.')
                    .position("top right")
                    .hideDelay(3000)
            );
        }
    }

    //Update Existing Task
    $scope.updateTask = function () {
        var requestVerificationToken = $('input[name=__RequestVerificationToken]').val();
        var exists = $scope.taskListing.filter(t => t.IDTask == $scope.IDTask)[0];
        if (exists != null) {
            $scope.taskDetails = {
                IDTask: $scope.IDTask,
                Name: $scope.name,
                Description: $scope.description,
                DueOn: $scope.dueOn,
                CompletedOn: $scope.completedOn,
            };
            $.ajax({
                type: "POST",
                url: '/Home/UpdateTask/',
                contentType: 'application/json',
                dataType: "json",
                data: JSON.stringify({
                    taskList: $scope.taskListing,
                    taskDetails: $scope.taskDetails,
                }),
                headers: {
                    "__RequestVerificationToken": requestVerificationToken
                },
                success: function (data) {
                    //Clear Form
                    $scope.clearTaskForm();
                    //Hide Dialog
                    $scope.cancel();
                    //Refresh
                    $scope.taskListing = data.taskList;
                    $("#gridContainer").dxDataGrid("instance").refresh();
                    //Notification to user
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent(data.message)
                            .position("top right")
                            .hideDelay(3000)
                    );
                },
                failure: function (errMsg) {
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('Error adding the task')
                            .position("top right")
                            .hideDelay(3000)
                    );
                }
            });
        }
        else {
            //Clear Form
            $scope.clearTaskForm();
            //Hide Dialog
            $scope.cancel();
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Error updating task. Task could not be found.')
                    .position("top right")
                    .hideDelay(3000)
            );
        }
    }

    //Delete Existing Task
    $scope.deleteExistingTask = function () {
        var requestVerificationToken = $('input[name=__RequestVerificationToken]').val();
        var exists = $scope.taskListing.filter(t => t.IDTask == $scope.IDTask)[0];
        if (exists != null) {
            $scope.taskDetails = {
                IDTask: $scope.IDTask,
                Name: $scope.name,
                Description: $scope.description,
                DueOn: $scope.dueOn,
                CompletedOn: $scope.completedOn,
            };
            $.ajax({
                type: "POST",
                url: '/Home/DeleteTask/',
                contentType: 'application/json',
                dataType: "json",
                data: JSON.stringify({
                    taskList: $scope.taskListing,
                    taskDetails: $scope.taskDetails,
                }),
                headers: {
                    "__RequestVerificationToken": requestVerificationToken
                },
                success: function (data) {
                    //Hide Dialog
                    $scope.cancel();
                    //Refresh
                    $scope.taskListing = data.taskList;
                    $("#gridContainer").dxDataGrid("instance").refresh();
                    //Notification to user
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent(data.message)
                            .position("top right")
                            .hideDelay(3000)
                    );
                },
                failure: function () {
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('Error deleting the task')
                            .position("top right")
                            .hideDelay(3000)
                    );
                }
            });
        }
        else {
            //Clear Form
            $scope.clearTaskForm();
            //Hide Dialog
            $scope.cancel();
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Error updating task. Task could not be found.')
                    .position("top right")
                    .hideDelay(3000)
            );
        }
    }
});



