treeherder.factory(
    'PhFramework', [
        '$http', 'thServiceDomain',
        function ($http, thServiceDomain) {
            return {
                getFrameworkList: function () {
                    return $http.get(thServiceDomain +
                                     '/api/performance/framework/').then(function (response) {
                                         return response.data;
                                     });
                }
            };
        }]);
