/// <reference path="app.js" />

//------------------------------------------------
// Mutually exclusive button model for the a 
// set of radio buttons.
//------------------------------------------------
App.NewButtonModel = Ember.Object.extend({
   
    _previousButton: undefined,

    buttons: undefined,

    init: function () {
        this.set('buttons', [
                Ember.Object.create({ pressed: false }),
                Ember.Object.create({ pressed: false }),
                Ember.Object.create({ pressed: false })
        ]);
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
            index,
            found,
            foundIndex;

        if (this.get('buttons')) {
            buttons = this.get('buttons');
            
            if (this.get('_previousButton') != undefined) {
                previousButtonNumber = this.get('_previousButton');
                buttons.objectAt(previousButtonNumber).set('pressed', false);
            }
            
            index = 0;
            found = false;
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