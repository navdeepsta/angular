(function () {
'use strict';

angular.module('songCollectionApp', [])
.controller('SongController', SongController);

function SongController ($scope) {
  
  $scope.songs = [
   {
   	 "name" : "Macarena",
   	 "year" : 1996,
   	 "singer" : "Los Del Rio"
   },
   {
   	 "name" : "Shape of You",
   	 "year" : 2017,
   	 "singer" : "Ed Sheeran"
   },
   {
   	 "name" : "Physical",
   	 "year" : 1981,
   	 "singer" : "Olivia Newton-John"
   },
   {
   	 "name" : "You Light Up My Life",
   	 "year" : 1977,
   	 "singer" : "Debby Boone"
   },
   {
   	 "name" : "Hey Jude",
   	 "year" : 1968,
   	 "singer" : "The Beatles"
   }
  ];
}

})();
