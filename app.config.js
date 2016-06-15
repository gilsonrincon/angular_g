angular.
	module('ejercicio').
	component('pageDetail', {
		template: 'Bienvenido a la página {{$ctrl.id}}',
		controller: ['$routeParams', 
			function PageDetailController($routeParams){
				this.id = $routeParams.id;
				console.log($routeParams);
			}]}).
	config(['$locationProvider', '$routeProvider',
		function config($locationProvider, $routeProvider){
			$locationProvider.hashPrefix('!');
			console.log('antes');

			$routeProvider.
				when('/page',{
					template: 'Home'
				}).
				when('/page/:id',{
					template: '<page-detail></page-detail>'
				}).
				otherwise('/page');

			console.log('despues');
		}]);