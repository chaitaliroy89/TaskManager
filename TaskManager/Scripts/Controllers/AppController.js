﻿//AngularJS
var app = angular.module('myapp', ['ngMaterial', 'ngMessages', 'dx', 'ngAnimate']);

app.config(
    function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('grey',
                {
                    'default': '200'
                })
            .accentPalette('blue',
                {
                    'default': '900'
                });
    }
);

app.controller('AppCtrl', function ($scope, $http, $timeout, $mdSidenav, $mdDialog, $log) {
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        };
    }

    //Set Spinner Action
    $scope.setSpinner = function () {
        $scope.showSpinner = !$scope.showSpinner;
    }

    $scope.showAlert = function (ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        // Modal dialogs should fully cover application
        // to prevent interaction outside of dialog
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Do something here')
                .textContent('TaskManager')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
                .targetEvent(ev)
        );
    };

    $scope.openMenu = function ($mdMenu, ev) {
        originatorEv = ev;
        $mdMenu.open(ev);
    };
});

app.filter("datefilter", function () {
    var re = /\/Date\(([0-9]*)\)\//;
    return function (x) {
        var m = x.match(re);
        if (m) return new Date(parseInt(m[1]));
        else return null;
    };
});

app.directive('compareTo', function () {
    return {
        require: "ngModel",
        scope: {
            compareTolValue: "=compareTo"
        },
        link: function (scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function (modelValue) {

                return modelValue == scope.compareTolValue;
            };

            scope.$watch("compareTolValue", function () {
                ngModel.$validate();
            });
        }
    };
});