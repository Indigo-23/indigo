indigo().state["layout"] = {
    views: {
        '@': {
            templateUrl: 'layout.html',
            controller: ['$scope', '$state', '$location','authService', function ($scope, $state, $location, authService)
            {
                $scope.isNavMenuCollapsed = true;
                $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams)
                {
                    $scope.isNavMenuCollapsed = true;
                    $scope.authentication = authService.authentication;

                    $scope.logOut = function ()
                    {
                        authService.logOut();
                        $location.path('/join/signin');
                    }
                });
            }]
        }
    }
}