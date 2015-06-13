angular.module('app.wizard.wizardList', [])
    .controller('ListCtrl', function(wizardlist){
        var lctrl = this;
        lctrl.wizards = wizardlist;
    });