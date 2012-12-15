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
        this.set('_flags', [false, false, false, false]);
    },

    pushButton: function (number) {
    	/// <summary>
    	/// 
    	/// </summary>
    	/// <param name="number">the button number to push</param>
        var len = this.get('_flags').length;
        var flags = [];
        for (var i = 0; i < len; i++) { flags[i] = false; }
        flags[number - 1] = true;
        this.set('_flags', flags);
    },

    releaseButton: function (number) {
        this.get('_flags')[number - 1] = false;
    },

    getButtonState: function (number) {
        return this.get('_flags')[number - 1];
    },

    selectedButton: function () {
        var flags = this.get('_flags'),
            i = 0,
            found = 0;
        flags.forEach(function (flag) {
            i = i + 1;
            if (flag) {
                found = i;
            }
        });
        return found;
    }.property('_flags'),

    button1: function (key, value) {
        if (arguments.length === 1) { // getter
            return this.getButtonState(1);
        } else {
            if (value === true) {
                this.pushButton(1);
                return value;
            } else {
                this.releaseButton(1);
                return value;
            }
        }
    }.property('_flags'),


    button2: function (key, value) {
        if (arguments.length === 1) { // getter
            return this.getButtonState(2);
        } else {
            if (value === true) {
                this.pushButton(2);
                return value;
            } else {
                this.releaseButton(2);
                return value;
            }
        }
    }.property('_flags'),


    button3: function (key, value) {
        if (arguments.length === 1) { // getter
            return this.getButtonState(3);
        } else {
            if (value === true) {
                this.pushButton(3);
                return value;
            } else {
                this.releaseButton(3);
                return value;
            }
        }
    }.property('_flags'),


    button4: function (key, value) {
        if (arguments.length === 1) { // getter
            return this.getButtonState(4);
        } else {
            if (value === true) {
                this.pushButton(4);
                return value;
            } else {
                this.releaseButton(4);
                return value;
            }
        }
    }.property('_flags'),
});