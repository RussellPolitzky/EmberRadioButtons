/// <reference path="app.js" />

//------------------------------------------------
// A toggle button control.  This button remains
// pressed after its pushed.
//------------------------------------------------
App.ToggleButton = Ember.View.extend(Ember.TargetActionSupport, {
    pressed: false,
    tagName: 'button',               // This view is a button.
    classNames: ['up'],              // Default class for the button.
    classNameBindings: ['_pressed'], // Bind the class name to 'pressed'
    attributeBindings: ['href', 'rel', 'tabindex', 'action', 'pressed'],

    _pressed: function () {
    	/// <summary>
        /// Used to control the class of the
        /// toggle button so that it looks as if 
        /// its pressed after its clicked.        
    	/// </summary>
    	/// <returns type=""></returns>
        var pressed = this.get('pressed');
        if (pressed) { return 'dn'; } else { return 'up'; }
    }.property('pressed'),

    click: function (event) {
    	/// <summary>
        /// Toggles the button and then calls 
        /// the associated action.
    	/// </summary>
    	/// <param name="event"></param>
        var pressed = this.get('pressed');
        this.set('pressed', !pressed);
        this.triggerAction.apply(this);
    }
});