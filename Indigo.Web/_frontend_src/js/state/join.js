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
            controller: ['$scope', '$location', 'authService', function ($scope, $location, authService)
            {
                $scope.error = {};
                $scope.signinModel = {
                    userName: "demo",
                    password: "demo",
                    state: {
                        IsValid: true,
                        Errors: {},
                        addError: function (name, title, error)
                        {
                            this.IsValid = false;
                            this.Errors[name] = { title: title, error: error };
                        },
                        clear: function ()
                        {
                            $scope.signinModel.state.IsValid = true;
                            $scope.signinModel.state.Errors = {};
                        }
                    },
                };

                $scope.signin = function ()
                {
                    $scope.signinModel.state.clear();
                    if ($scope.signinModel.userName === "") {
                        $scope.signinModel.state.addError("userName", "Логин", "Данное попе обязательно для заполнения");
                    }
                    if ($scope.signinModel.password === "") {
                        $scope.signinModel.state.addError("password", "Пароль", "Данное попе обязательно для заполнения");
                    }
                    if ($scope.signinModel.state.IsValid) {
                        authService.login($scope.signinModel).then(function (response)
                        {
                            $location.path('/');
                        }, function (err)
                        {
                            $scope.signinModel.state.addError("form", "Неправильный логин или пароль", "Возможно у вас выбрана другая раскладка клавиатуры или нажата клавиша \"Caps Lock\"");
                        });
                    }
                }
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