app.controller('myController', function($scope, myFactory, $http) {
  $scope.edit = false;
  getMovies = function(url) {
    myFactory.getAll(url)
    .then(function(response) {
      $scope.movies = response.data;
  });
};
getMovies('api/v1/tatums');

//functions
  $scope.postMovie = function() {
    var payload = {
      movie: $scope.movie,
      year: $scope.year,
      chickflick: $scope.chickflick
    };
    myFactory.post('/api/v1/tatums', payload)
    .then(function(response){
      $scope.movies.push(response.data);
      console.log(response.data);
    });
  };

  $scope.editMovie = function(id) {
    var payload = $scope.movieEdit;
    myFactory.put('/api/v1/tatum/' + id , payload)
      .then(function(response) {
        $scope.movieEdit.movie = '';
        $scope.movieEdit.year = '';
        $scope.movieEdit.chickflick = '';
        $scope.edit = false;
        getMovies('api/v1/tatums');
    });
  };

  $scope.deleteMovie = function(id) {
        myFactory.delete('/api/v1/tatum/' + id)
        .then(function(response) {
          var index = $scope.movies.indexOf(id);
          $scope.movies.splice(index + 1, 1);
        });
      };

  $scope.getMovie = function(id) {
    myFactory.getSingle('/api/v1/tatum/' + id)
    .then(function(response) {
      $scope.movieEdit = response.data;
      console.log(response.data);
      });
    $scope.edit = true;
  };

});
