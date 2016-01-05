indigo().state["home"] = {
    parent: 'layout',
    url: '/',
    views: {
        'content@layout': {
            templateUrl: 'home/index.html',
            controller: ['$scope', function ($scope)
            {
                
            }]
        }
    }
};