var templatesDir;

var englishSite;

englishSite = angular.module(
	'siteForPolina', [
		'ngRoute'
	])
;

englishSite.config(
	function ($routeProvider, $locationProvider) {
		templatesDir = 'public/site/templates';

		$routeProvider
			.when('/', {
				controller : 'MainController',
				templateUrl: templatesDir + '/main.html'
			})
			.when('/test', {
				controller: 'TestController',
				templateUrl: templatesDir + '/test.html'
			})
	}
);