/**
 * @ngInject
 */
function config ($stateProvider, $urlRouterProvider) {

    var url = '';
	var apiPaths = {
    	login: url + '/login',
    	createAcc: url + '/account/create'
	};

    $urlRouterProvider.otherwise('/welcome');
    
    $stateProvider
        .state('welcome', {
            url: '/welcome',
            templateUrl: 'views/login.html',
            controller: 'AuthCtrl as auth'
        });
}