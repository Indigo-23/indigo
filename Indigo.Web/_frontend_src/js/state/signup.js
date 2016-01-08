indigo().state["signup"] = {
    parent: 'layout',
    url: '/signup',
    views: {
        'content@layout': {
            templateUrl: 'signup/index.html',
            controller: ['$scope', '$modal', function ($scope, $modal)
            {
                $scope.ShowLegal = function ()
                {
                    var modalInstance = $modal.open({
                        animation: true,
                        keyboard: true,
                        templateUrl: 'legal/rules_use.html',
                        size: 'lg',
                        controller: ['$scope', function ($scope)
                        {
                            $scope.close = function ()
                            {
                                modalInstance.close();
                            }
                        }]
                    });
                }
            }]
        }
    }
};