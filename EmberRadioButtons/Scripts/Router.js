/// <reference path="app.js" />

//------------------------------------------------
// Router with a single route.
// (this is a single page application)
//------------------------------------------------
App.Router = Ember.Router.extend({
    root: Ember.Route.extend({
        index: Ember.Route.extend({
            route: '/'
        }),

        // Event handlers.
        changeName: function (router) {
            router.get('applicationController').changeName(); // Router delegates to the controller.
        },

        addButton: function (router) {
            router.get('applicationController').addButton();
        },
        


        removeButton: function (router) {
            router.get('applicationController').removeButton();
        }
        

    })
});

// Start the application
App.initialize();