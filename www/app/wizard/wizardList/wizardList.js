angular.module('app.wizard.wizardList', [])
    .controller('ListCtrl', function ($location, wizardlist) {
        var lctrl = this;

        lctrl.wizards = wizardlist;
        lctrl.goToWizard = goToWizard;

        function goToWizard (wizardName) {
            $location.url('wizdetail/' + wizardName);
        }
    });