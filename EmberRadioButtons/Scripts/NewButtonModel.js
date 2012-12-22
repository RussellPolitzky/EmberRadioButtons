/// <reference path="app.js" />

//------------------------------------------------
// Mutually exclusive button model for the a 
// set of radio buttons.
//------------------------------------------------
App.NewButtonModel = Ember.Object.extend({

    _previousButton: undefined,

    buttons: [
        Ember.Object.create({ pressed: true }),
        Ember.Object.create({ pressed: false }),
        Ember.Object.create({ pressed: false })
    ],

    init: function() {
        /// <summary>
        /// 
        /// </summary>


        //var buttonArrayProxy = Ember.ArrayProxy.create({
        //    content: Ember.A([{ pressed: true }, { pressed: false }, { pressed: false }])
        //});

        this.set('_previousButton', 0);
      
        //this.set('buttons', buttonArrayProxy);
    },    

    setState: function(arg) {
        /// <summary>
        /// 
        /// </summary>
        if (this.get('buttons')) {
            var previousButtonNumber = this.get('_previousButton');
            var buttons = this.get('buttons');
            buttons.objectAt(previousButtonNumber).set('pressed', false);
            var index = 0;
            var found = false;
            
            while (!found && index < buttons.length) {
                found = buttons.objectAt(index).get('pressed');
                index = index + 1;
            }
            var foundIndex = index - 1;
            this.set('_previousButton', foundIndex);
        }
    }.propertyobserves('buttons.@each.pressed')
})