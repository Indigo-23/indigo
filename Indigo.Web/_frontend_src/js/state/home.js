indigo().state["home"] = {
    parent: 'layout',
    url: '/',
    views: {
        'content@layout': {
            templateUrl: 'template/home/index.html',
            controller: ['$scope', function ($scope)
            {
                
            }]
        }
    }
};