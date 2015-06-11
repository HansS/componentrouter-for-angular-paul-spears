(function(){
    angular.module('mainAppModule', ['ngRoute', 'app.home'])
        .config(function($routeProvider){
            $routeProvider.when('/home', {
                templateUrl: '/app/home/home.html',
                controller: 'homeCtrl',
                controllerAs: 'hc'
            })
        });
}());

