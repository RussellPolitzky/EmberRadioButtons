/// <reference path="app.js" />

//------------------------------------------------
// Mutually exclusive button model for the a 
// set of radio buttons.
//------------------------------------------------
App.NewButtonModel = Ember.Object.extend({
    
    buttons: undefined,

    init: function() {
        var buttonArrayProxy = Ember.ArrayProxy.create({
            content: Ember.A([ { pressed: true }, { pressed: false }, { pressed: false } ])
        });
        this.set('buttons', buttonArrayProxy);
    }
});