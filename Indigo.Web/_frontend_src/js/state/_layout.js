indigo().state["layout"] = {
    views: {
        '@': {
            templateUrl: 'layout.html',
            controller: ['$scope', '$state', '$location', function ($scope, $state, $location)
            {
                $scope.isNavMenuCollapsed = true;
                $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams)
                {
                    $scope.isNavMenuCollapsed = true;
                });
            }]
        }
    }
}