angular.element(document).ready(function (event) {
    console.log("angular is ready test");

    var modules = [];
    modules.push('ui.router'); 

    angular
        .module('mySASSFrontend', modules)
        .value('events', {

        })

        .controller('AuthCtrl', AuthCtrl)
   

        .config(config)        
        .run(run);
        
     
    angular.bootstrap(angular.element('#ng-app'), ['mySASSFrontend']);
});