/// <reference path="app.js" />
/// <reference path="MutexButtonModel.js" />
/// <reference path="RadioButtonModel.js" />

//------------------------------------------------
// Application controller - this is the controller
// for the root state.
//------------------------------------------------
App.ApplicationController = Ember.Controller.extend({
    
    data: undefined,

    init: function () {
        // Initialise this instance with its model.
        this.set('data', App.RadioButtonModel.create());
    },

    // Events
    changeName: function () {
    	/// <summary>
    	/// Event handler for the changeName event.
    	/// </summary>
        console.log('changeName event has been fired.');
    },
    
    addButton: function () {
    	/// <summary>
        /// Instruct the model to add a button.
        /// Notice all we have to do is to change
        /// the state of the model and the binding
        /// takes care of the rest.
    	/// </summary>
        this.get('data').addButton();
    },

    removeButton: function () {
    	/// <summary>
        /// Instruct the model to remove a button.
        /// Notice how all we have to do is to change
        /// the state of the model and the binding 
        /// takes care of the rest.
    	/// </summary>
        this.get('data').removeButton();
    },
});


