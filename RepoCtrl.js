

(function(){
  
  var app = angular.module('githubViewer');

  app.controller('RepoCtrl', ['$scope', 'github', '$routeParams', '$location',
    function($scope, github, $routeParams, $location) {

      var onRepoComplete = function(data) {
        $scope.repo = data;
      };

      var onError = function(reason) {
        $scope.error = reason;
      };

      $scope.username = $routeParams.username;
      $scope.reponame = $routeParams.reponame;
      
      github.getRepoDetails($scope.username, $scope.reponame)
        .then(onRepoComplete, onError);
    }
  ]);
  
}());