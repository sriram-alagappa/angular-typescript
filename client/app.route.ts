/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="../typings/angularjs/angular-route.d.ts"/>

module AngularTypeScript {
    "use strict";
    
    function routes($routeProvider:ng.route.IRouteProvider) {
        
        $routeProvider.when("/",{
            templateUrl: "/client/routes/home/home.html",
            controller:"HomeController",
            controllerAs:"vm"
            
        }).otherwise({
            redirectTo:"/"
        })
    }
    
    routes.$inject = ["$routeProvider"];
    
    angular.module("HelloApp").config(routes);
}