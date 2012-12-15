/// <reference path="app.js" />

App.Router = Ember.Router.extend({
    root: Ember.Route.extend({
        index: Ember.Route.extend({
            route: '/'
        }),

        // Event handlers.
        changeName: function (router) {
            router.get('applicationController').changeName(); // Router delegates to the controller.
        }
    })
});

App.initialize();