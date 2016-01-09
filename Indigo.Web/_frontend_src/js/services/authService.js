indigo().module.factory('authService', ['$http', '$q', 'localStorageService', function ($http, $q, localStorageService)
{
    return {
        authentication: {
            isAuth: false,
            userName: "",
        },
        login: function (loginModel)
        {
            var _this = this;
            var data = "grant_type=password&username=" + loginModel.userName + "&password=" + loginModel.password;
            var deferred = $q.defer();
            $http.post('/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response)
            {
                localStorageService.set('authorizationData', { token: response.access_token, userName: loginModel.userName, refreshToken: response.refresh_token });
                _this.authentication.isAuth = true;
                _this.authentication.userName = loginModel.userName;

                deferred.resolve(response);
            }).error(function (err, status)
            {
                
                _this.logOut();
                deferred.reject(err);
            });
            
            return deferred.promise;
        },
        logOut: function ()
        {
            var _this = this;
            localStorageService.remove('authorizationData');
            _this.authentication.isAuth = false;
            _this.authentication.userName = "";

        },
        fillAuthData: function () {
            var _this = this;
            var authData = localStorageService.get('authorizationData');
            if (authData) {
                _this.authentication.isAuth = true;
                _this.authentication.userName = authData.userName;
            }
        }
    }
}]);