// Config
var API_base_url = 'http://localhost:5000/api/v1';

// AngularJS module definition
var myApp = angular.module("myApp", ["ngRoute", "ngResource", "myApp.services"]);

// AngularJS services: Binds REST API to AngularJS app
var services = angular.module("myApp.services", ["ngResource"])
services
.factory('ArticleCount', function($resource) {
  console.log(API_base_url+'/articles/count');
  return $resource(API_base_url+'/articles/count', {}, {
    get: { method: 'GET' }
  });
});

// Routing/Templating rules
myApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })
  .when('/articles/count', {
    templateUrl: 'pages/article_count.html',
    controller: 'articleCountController'
  })
});

myApp.controller(
  'mainController',
  function() {

  }
);

myApp.controller(
  'articleCountController',
  function ($scope, ArticleCount) {
    $scope.articleCount = ArticleCount.get();
  }
);
