/// <reference path="app.js" />

//------------------------------------------------
// Router with a single route.
// This is a single page application and in this
// case there is only one state,  but this is the 
// general form of an Ember application.  From 
// a patterns point of view, the router is a 
// hierarchical state machine and isn't quite a 
// full state-chart in that it lacks support
// for orthogonal states.
//------------------------------------------------
App.Router = Ember.Router.extend({
    root: Ember.Route.extend({
        index: Ember.Route.extend({
            route: '/'
        }),

        // Event handlers.
        changeName: function (router) {
            // Delegates gto the controller.
            router.get('applicationController').changeName(); // Router delegates to the controller.
        },

        addButton: function (router) {
        	/// <summary>
        	/// Delegates to controller
        	/// </summary>
        	/// <param name="router"></param>
            router.get('applicationController').addButton();
        },

        removeButton: function (router) {
        	/// <summary>
        	/// Delegates to controller/
        	/// </summary>
        	/// <param name="router"></param>
            router.get('applicationController').removeButton();
        }
    })
});

// Start the application
App.initialize();