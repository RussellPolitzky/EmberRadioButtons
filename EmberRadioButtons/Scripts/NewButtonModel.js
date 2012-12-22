/// <reference path="app.js" />

//------------------------------------------------
// Mutually exclusive button model for the a 
// set of radio buttons.
//------------------------------------------------
App.NewButtonModel = Ember.Object.extend({
   
    _previousButton: undefined,
    
    numberOfButtons: undefined,

    buttons: undefined,

    init: function () {
        this.set('buttons', [
                Ember.Object.create({ pressed: false }),
                Ember.Object.create({ pressed: false }),
                Ember.Object.create({ pressed: false })
        ]);
        this._setNumberOfButtons();
    },    

    _setNumberOfButtons: function() {
        this.set('numberOfButtons', this.get('buttons').length);
    },


    addButton: function() {
        this.get('buttons').pushObject(Ember.Object.create({ pressed: false }));
    },

    removeButton: function () {
        this.get('buttons').removeAt(0);
    },

    setState: function() {
        /// <summary>
        /// 
        /// </summary>

        var previousButtonNumber,
            buttons,
            index = 0,
            found = false,
            foundIndex,
            buttonsDefined = function() {
                return this.get('buttons');
            };

        // if buttons have been added, then don't do any of this.
        if (this.get('buttons').length != this.get('numberOfButtons')) {
            this._setNumberOfButtons();
            return;
        }


        if (this.get('buttons')) {
            buttons = this.get('buttons');
            
            if (this.get('_previousButton') != undefined) {
                previousButtonNumber = this.get('_previousButton');
                buttons.objectAt(previousButtonNumber).set('pressed', false);
            }
            
            //index = 0;
            //found = false;
            while (!found && index < buttons.length) {
                found = buttons.objectAt(index).get('pressed');
                index = index + 1;
            }
            foundIndex = index - 1;
            

            if (found) {
                this.set('_previousButton', foundIndex);
            } else {
                this.set('_previousButton', undefined);
            }
        }
    }.propertyobserves('buttons.@each.pressed')
})