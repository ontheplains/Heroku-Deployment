(function() {

  angular
    .module('meanApp')
    .factory('user', user);

  user.$inject = ['$http'];
  function user ($http) {

    function create(user) {
      return $http.post('/api/users', user)
        .then(function(res) {
          return res.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    }

    function read() {
      return $http.get('/api/users')
        .then(function(res) {
          return res.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    }

    return {
      create: create,
      read: read
    }

  }

})();
