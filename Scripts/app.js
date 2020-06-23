/**
 *
 * Responsive website using AngularJS
 * http://www.script-tutorials.com/responsive-website-using-angularjs/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Script Tutorials
 * http://www.script-tutorials.com/
 */

'use strict';

// angular.js main app initialization
var app = angular.module("myApp", []).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/', { templateUrl: 'pages/index.html', activetab: 'projects', controller: HomeCtrl }).
            when('/project/:projectId', {
                templateUrl: function (params) { return 'pages/' + params.projectId + '.html'; },
                controller: ProjectCtrl,
                activetab: 'projects'
            }).
            when('/privacy', {
                templateUrl: 'pages/privacy.html',
                controller: PrivacyCtrl,
                activetab: 'privacy'
            }).
            when('/about', {
                templateUrl: 'pages/about.html',
                controller: AboutCtrl,
                activetab: 'about'
            });


}]);

