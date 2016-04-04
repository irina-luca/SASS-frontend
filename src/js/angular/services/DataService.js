/**
 * @ngInject
 */

function DataService($q, $http) {
    
    var service = {
        loadStuff: loadStuff,
       
    };
    return service;

    // implementation
    function loadStuff() {
        var def = $q.defer();

        $http.get("stuff")
            .success(function(data) {
                def.resolve(data);
            })
            .error(function() {
                def.reject("Failed to load stuff");
            });
        return def.promise;
    }
}