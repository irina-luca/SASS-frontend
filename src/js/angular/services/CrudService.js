/**
 * @ngInject
 */

function CrudService($q, $http) {
    
    var service = {
        createItem: createItem,
        updateItem: updateItem,
        deleteItem: deleteItem
    };
    return service;

    // implementation
     function createItem(objData, url) {
        var def = $q.defer();
        console.log(objData)
        $http({
            method: 'POST',
            url: url, 
            headers: { 'Content-Type' : 'application/json' },
            data: objData
        })
        .success(function(data) {
            def.resolve(data);
        })
        .error(function() {
            def.reject("Failed to create item");
        });
        return def.promise;
    }
    function updateItem(objData, url) {
        var def = $q.defer();
        $http({
            method: 'POST',
            url: url + '/' + objData.id,
            headers: { 'Content-Type' : 'application/json' },
            data: objData
        })
        .success(function(data) {
            def.resolve(data);
        })
        .error(function() {
            def.reject("Failed to update item");
        });
        return def.promise;
    }
    function deleteItem(objData, url) {
        var def = $q.defer();
        $http.delete(url + '/' + objData.id)
            .success(function(data) {
                def.resolve(data);
            })
            .error(function() {
                def.reject("Failed to delete item with id" + objData.id);
            });
            return def.promise;
    };

}