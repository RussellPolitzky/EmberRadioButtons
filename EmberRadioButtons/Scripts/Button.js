/// <reference path="app.js" />

//------------------------------------------------
// A simple button.
//------------------------------------------------
App.Button = Ember.View.extend(Ember.TargetActionSupport, {
   
    tagName: 'button', // This view is a button.

    click: function (event) {
    	/// <summary>
        /// Provides action support for our standard button.
    	/// </summary>
    	/// <param name="event"></param>
        this.triggerAction.apply(this);
    }
});