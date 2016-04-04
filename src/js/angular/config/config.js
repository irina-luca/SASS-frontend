/**
 * @ngInject
 */
function config ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/welcome');
    
    $stateProvider
        .state('welcome', {
            url: '/welcome',
            templateUrl: 'views/login.html',
            controller: 'AuthCtrl as auth'
        });
}