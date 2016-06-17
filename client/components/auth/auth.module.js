'use strict';

angular.module('hwHerokuApp.auth', ['hwHerokuApp.constants', 'hwHerokuApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
