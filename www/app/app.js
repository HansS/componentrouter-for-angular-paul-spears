(function(){
    angular.module('mainAppModule', ['ngRoute', 'app.home', 'app.wizard.wizardList', 'app.wizard.wizardDetail'])
        .config(function($routeProvider){
            $routeProvider.when('/home', {
                templateUrl: '/app/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'hc'
            }).when('/wizlist', {
                templateUrl: '/app/wizard/wizardList/wizardList.html',
                controller: 'ListCtrl',
                controllerAs: 'lc'
            }).when('/wizdetail/:wizName', {
                templateUrl: '/app/wizard/wizardDetail/wizardDetail.html',
                controller: 'WizDetailCtrl',
                controllerAs: 'dc'
            })
        });
}());

