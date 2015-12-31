/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../typings/angularjs/angular-route.d.ts"/>

module AngularTypeScript {

    class HomeController    {
        static $inject=  [];
        
        name:String;
        constructor(){
            this.name = "Sriram";
        }
       
    }
    
        angular.
            module("HelloApp").controller("HomeController",HomeController);
}