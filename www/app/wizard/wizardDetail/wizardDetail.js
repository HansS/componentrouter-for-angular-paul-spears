angular.module('app.wizard.wizardDetail', [])
    .controller('WizDetailCtrl', function(){
        var wdc = this;

        wdc.wizardDetailsPromise = wizardAPI.getWizardDetails()
        wdc.message = 'from wiz detail controller';
    })