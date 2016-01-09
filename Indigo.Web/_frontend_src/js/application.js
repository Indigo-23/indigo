function indigo()
{
    window.indigo_app = window.indigo_app || {
        module: angular.module('indigo.application', ['indigo.templates', 'ui.router','ui.bootstrap']),
        state: {},
    }
    return window.indigo_app;
};

angular.element(document).ready(function ()
{
    var $inj = angular.bootstrap(document.body, ['indigo.application']);
    var $rootScope = $inj.get("$rootScope");
});

indigo().module.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider)
{
    $locationProvider.html5Mode(true).hashPrefix('#');

    $urlRouterProvider.when('', '/');
    $urlRouterProvider.when('/join', '/join/signin');
    angular.forEach(indigo().state, function (state, key)
    {
        $stateProvider.state(key, state);
    });
}]);

indigo().module.run([function ()
{
   
}]);