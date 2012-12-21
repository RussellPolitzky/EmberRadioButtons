/// <reference path="app.js" />
/// <reference path="MutexButtonModel.js" />
/// <reference path="NewButtonModel.js" />

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
    data: App.MutexButtonModel.create(),
    data2: App.NewButtonModel.create()
});


