indigo().state["join"] = {
    parent: 'layout',
    url: '/join',
    views: {
        'content@layout': {
            templateUrl: 'join/index.html',
            controller: ['$scope', function ($scope)
            {

            }]
        }
    }
};

indigo().state["join.signin"] = {
    url: '/signin',
    views: {
        'content@join': {
            templateUrl: 'join/signin.html',
            controller: ['$scope', function ($scope)
            {

            }]
        }
    }
};

indigo().state["join.signup"] = {
    url: '/signup',
    views: {
        'content@join': {
            templateUrl: 'join/signup.html',
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