/// <reference path="app.js" />

//------------------------------------------------
// Application controller - this is the controller
// for the root state.
//------------------------------------------------
App.ApplicationController = Ember.Controller.extend({
    // Events
    changeName: function () {
    	/// <summary>
    	/// Event handler for the changeName event.
    	/// </summary>
        console.log('changeName event has been fired.');
    },
    data: App.MutexButtonModel.create()
});


