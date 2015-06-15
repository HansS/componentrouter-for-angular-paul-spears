angular.module('app.home', [])
    .controller('HomeCtrl', function(){
        var hctrl = this;

        hctrl.begin = begin;

        function begin(){
            console.log('clicked registerd');
            //$location.url('/wizlist')
        }
    });