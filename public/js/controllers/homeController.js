angular.module("app").controller('homeController', ['$scope', '$translate', function ($scope, $translate) {

    $scope.home = 'Home';

    $scope.changeLanguage = function (key) {
      $translate.use(key);
    };

}]);
