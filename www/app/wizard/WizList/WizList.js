angular.module('app.wizard.wizardList', [])
    .controller('WizListCtrl', WizListCtrl);

function WizListCtrl ($location, wizardAPI) {
    var lctrl = this;

    lctrl.wizListPromise = wizardAPI.getWizards();
    lctrl.goToWizard = goToWizard;

    function goToWizard (wizardName) {
        $location.url('wizdetail/' + wizardName);
    }
}

WizListCtrl.prototype.canActivate = function () {
    //state that this data must be present to activate this route
    return this.wizListPromise;
};

WizListCtrl.prototype.activate = function () {
    var lctrl = this;
    this.wizListPromise.then(function (wizardList) {
        lctrl.wizardList = wizardList;
    });
};