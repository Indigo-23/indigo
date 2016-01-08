indigo().state["signin"] = {
    parent: 'layout',
    url: '/signin',
    views: {
        'content@layout': {
            templateUrl: 'signin/index.html',
            controller: ['$scope', function ($scope)
            {

            }]
        }
    }
};