(function() {

  angular
    .module('meanApp')
    .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['user'];
    function homeCtrl(user) {
      init();

      var vm = this;

      vm.user = {
        name: '',
        email: '',
        place: ''
      };

      vm.createUser = function () {
        user.create(vm.user)
          .then(function(user) {
            readUser();
          });
      };

      function init() {
        readUser();
      }

      function readUser() {
        user.read()
          .then(function(users) {
            console.log('users: ', users);
            vm.users = users;
          });
      }

    }

})();
