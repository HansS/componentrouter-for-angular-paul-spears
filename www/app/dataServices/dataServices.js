angular.module('app.dataServices', [])
    .service('wizardAPI', function ($http, $q) {
        var that = this,
            baseDetailUrl = "http://harrypotter.wikia.com/api/v1/Articles/Details?titles=%%%title%%%&abstract=100&width=200&height=200";

        that.getWizards = getWizards;
        that.wizards;

        function getWizards(){
            var dataRequests = [];
            return $http.get('data/wizards.json').then(function (response) {
                return response.data;
            }).then(function(wizardList){
                //we have the list but it is poorly constructed, lets grab some more data from the api
                that.wizards = wizardList;
                _.forEach(that.wizards, function (wizard) {
                    var urlWizName = wizard.text.replace(/ /g, "_");
                    var wizardUrl = baseDetailUrl.replace(/%%%title%%%/g, urlWizName);
                    dataRequests.push($http.get(wizardUrl).then(function (response) {
                        //deal with funky shape of api response
                        var usefulData = _.find(response.data.items, function(idObject){
                            return true;
                        });
                        wizard.details = usefulData;
                    }));
                });
                return $q.all(dataRequests).then(function (){
                    return that.wizards;
                });
            });
        }
    })