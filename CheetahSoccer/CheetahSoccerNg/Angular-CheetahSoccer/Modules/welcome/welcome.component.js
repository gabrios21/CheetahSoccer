'use strict';

// Register `welcome` component, along with its associated controller and template
angular.
    module('welcome').
    component('welcome', {
        template: 'Hello, {{$ctrl.user}}',
        controller: function GreetUserController() {
            this.user = "world";
        }
    });