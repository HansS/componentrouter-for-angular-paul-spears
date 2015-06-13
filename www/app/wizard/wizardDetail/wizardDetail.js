angular.module('app.wizard.wizardDetail', [])
    .controller('WizDetailCtrl', function(wizardDetails){
        var wdc = this;
        console.log(wizardDetails);
        wdc.message = 'from wiz detail controller';
    })