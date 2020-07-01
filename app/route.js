var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider

    .when("/Home", {
      templateUrl: "templates/Home.html",
    })

    .when("/blog", {
      templateUrl: "templates/blog.html",
    })

    .otherwise({ redirectTo: "/Home" });
});
