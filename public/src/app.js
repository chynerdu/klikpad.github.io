angular.module('PhoneBook', ['ui.bootstrap','ngRoute', 'ngResource'])
        .config(function($routeProvider, $locationProvider){
            $routeProvider
            .when('/',{
                controller:'HomepageController',
                templateUrl:'views/klikpad.html'
            })
              .when('/register',{
                controller:'RegController',
                templateUrl:'register.html'
            })
            .when('/contact', {
                controller:'ContactController',
                templateUrl:'views/contacts.html'
            })
            
             .when('/new', {
                controller:'NewContact',
                templateUrl:'views/new.html'
            })

              .when('/contact/:id', {
                controller:'SingleContact',
                templateUrl:'views/single.html'
            })
              .otherwise({ redirectTo: '/'});
          
            $locationProvider.html5Mode(true);
        });