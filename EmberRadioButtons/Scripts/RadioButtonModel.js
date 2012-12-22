/// <reference path="app.js" />

//------------------------------------------------
// Mutually exclusive button model for the  
// set of radio buttons.
//------------------------------------------------
App.RadioButtonModel = Ember.Object.extend({   
    _previousButton: undefined,
    _numberOfButtons: undefined,
    buttons: undefined,

    init: function() {
        /// <summary>
        ///  Initialize with three buttons ...
        /// </summary>
        this.set('buttons', [
            Ember.Object.create({ pressed: false }),
            Ember.Object.create({ pressed: false }),
            Ember.Object.create({ pressed: false })
        ]);
        this._setNumberOfButtons();
    },

    _setNumberOfButtons: function () {
    	/// <summary>
    	/// Records the number of buttons in the set.
    	/// </summary>
        this.set('_numberOfButtons', this.get('buttons').length);
    },
  
    _setState: function() {
        /// <summary>
        ///  Logic ensures that only one button is pressed
        ///  at any one time.
        /// </summary>
        var me = this,
            previousButtonNumber = me.get('_previousButton'),
            buttons = me.get('buttons'),
            index = 0,
            found = false,
            newNumberOfButtons = buttons.length,
            oldNumberOfButtons = me.get('_numberOfButtons'),
            buttonsDefined = function() {
                return buttons;
            },
            recordPressedButton = function() {
                index = buttons.indexOf(buttons.findProperty('pressed', true));
                found = index > -1;
                if (found) {
                    me.set('_previousButton', index);
                } else {
                    me.set('_previousButton', undefined);
                }
            },
            unsetPreviousButton = function() {
                if (newNumberOfButtons < (previousButtonNumber - 1)) {
                    me.set('_previousButton', undefined);
                    return;
                }
                if (me.get('_previousButton') != undefined) {
                    buttons.objectAt(previousButtonNumber).set('pressed', false);
                }
            },
            numberOfButtonsHasChanged = function() {
                return newNumberOfButtons != oldNumberOfButtons;
            };

        if (buttonsDefined()) {
            if (numberOfButtonsHasChanged()) {
                this._setNumberOfButtons();

            } else {
                unsetPreviousButton(buttons);
            }
            recordPressedButton(buttons);
        }
    }.propertyobserves('buttons.@each.pressed'),

    addButton: function () {
    	/// <summary>
    	/// Adds a button to the set.
        /// </summary>
        var buttons = this.get('buttons');
        buttons.pushObject(Ember.Object.create({ pressed: false }));
    },

    removeButton: function () {
    	/// <summary>
    	/// Removes a button from the set.
    	/// </summary>
        var buttons = this.get('buttons');
        buttons.removeAt(buttons.length - 1);
    }
})