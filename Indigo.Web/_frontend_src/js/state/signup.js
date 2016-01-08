indigo().state["signup"] = {
    parent: 'layout',
    url: '/signup',
    views: {
        'content@layout': {
            templateUrl: 'signup/index.html',
            controller: ['$scope', '$uibModal', function ($scope, $uibModal)
            {
                $scope.ShowLegal = function ()
                {
                    var modalInstance = $uibModal.open({
                        animation: true,
                        keyboard: true,
                        templateUrl: 'legal/modal.html',
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