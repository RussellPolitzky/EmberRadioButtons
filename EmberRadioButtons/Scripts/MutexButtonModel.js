/// <reference path="app.js" />

//------------------------------------------------
// Mutually exclusive button model for the a 
// set of radio buttons.
//------------------------------------------------
App.MutexButtonModel = Ember.Object.extend({
    
    _flags: undefined,

    init: function () {
    	/// <summary>
    	/// Initialises the model 
    	/// </summary>
        this.set('_flags', Ember.A([true, false, false, false]));
    },

    buttons: function () {
    	/// <summary>
    	/// Exposes the button flags as read only.
    	/// </summary>
    	/// <returns type=""></returns>
        return this.get('_flags');
    }.property('_flags'),
    
    buttonListener: function() {
        console.log('flags is about to change');
    }.property('*_flags.[]'),
        //.observes('*_flags.[]'),

    activateButton: function (number) {
    	/// <summary>
    	/// Called to signify that a button has been pushed.
    	/// </summary>
        /// <param name="number">number of the button number to push</param>
        var len = this.get('_flags').length;
        var flags = [];
        for (var i = 0; i < len; i++) { flags[i] = false; }
        flags[number - 1] = true;
        this.set('_flags', flags); // Build a new array and assign it to ensure binding triggers.
    },

    releaseButton: function (number) {
    	/// <summary>
    	/// Releases a button.
    	/// </summary>
        /// <param name="number">number of the button to release</param>
        //var len = this.get('_flags').length;
        //var flags = [];
        //for (var i = 0; i < len; i++) { flags[i] = false; }
        //this.set('_flags', flags); // Build a new array and assign it to ensure binding triggers.
    },

    getButtonState: function (number) {
    	/// <summary>
    	/// Gets the current state of the given button.
    	/// </summary>
    	/// <param name="number"></param>
    	/// <returns type="">Number of button who''s state should be checked.</returns>
        return this.get('_flags')[number - 1];
    },

    selectedButton: function () {
    	/// <summary>
    	/// Returns the number of the button that's been selected.
    	/// </summary>
    	/// <returns type=""></returns>
        var flags = this.get('_flags'),
            i = 0,
            found = 0;
        flags.forEach(function (flag) {
            i = i + 1;
            if (flag) { found = i; }
        });
        return found;
    }.property('_flags.[]'),

    button1: function (key, value) {
    	/// <summary>
    	/// Computed property representing the state of this button
    	/// </summary>
    	/// <param name="key"></param>
    	/// <param name="value"></param>
    	/// <returns type=""></returns>
        if (arguments.length === 1) { // getter
            return this.getButtonState(1);
        } else {
            if (value === true) {
                this.activateButton(1);
                return value;
            } else {
                this.releaseButton(1);
                return value;
            }
        }
    }.property('_flags'),


    button2: function (key, value) {
        /// <summary>
        /// Computed property representing the state of this button
        /// </summary>
        /// <param name="key"></param>
        /// <param name="value"></param>
        /// <returns type=""></returns>        
        if (arguments.length === 1) { // getter
            return this.getButtonState(2);
        } else {
            if (value === true) {
                this.activateButton(2);
                return value;
            } else {
                this.releaseButton(2);
                return value;
            }
        }
    }.property('_flags'),


    button3: function (key, value) {
        /// <summary>
        /// Computed property representing the state of this button
        /// </summary>
        /// <param name="key"></param>
        /// <param name="value"></param>
        /// <returns type=""></returns>        
        if (arguments.length === 1) { // getter
            return this.getButtonState(3);
        } else {
            if (value === true) {
                this.activateButton(3);
                return value;
            } else {
                this.releaseButton(3);
                return value;
            }
        }
    }.property('_flags'),


    button4: function (key, value) {
        /// <summary>
        /// Computed property representing the state of this button
        /// </summary>
        /// <param name="key"></param>
        /// <param name="value"></param>
        /// <returns type=""></returns>        
        if (arguments.length === 1) { // getter
            return this.getButtonState(4);
        } else {
            if (value === true) {
                this.activateButton(4);
                return value;
            } else {
                this.releaseButton(4);
                return value;
            }
        }
    }.property('_flags'),

});