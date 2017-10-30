(function () {
    'use strict'
    angular.module('app', [])
        .controller('appController', AppController);

    // AppController.$inject = [];

    function AppController() {
        'use strict'
        var vm = this;
        console.log('app controller loaded!');
        vm.submit = () => {
            console.log(vm.formdata.name);
        }
    }
})();