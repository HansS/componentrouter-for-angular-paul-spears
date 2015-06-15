angular.module('app.wizard.wizardDetail', [])
    .controller('WizDetailCtrl', function(){
        var wdc = this;
        wdc.wizardDetails = wizardDetails;
        wdc.message = 'from wiz detail controller';
    })