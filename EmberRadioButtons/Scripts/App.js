var App = Ember.Application.create();


App.MutexButtonModel = Ember.Object.extend({
    
    _flags: [false, false, false, false],
    
    init: function () {
        this.set('_flags', [true, false, false, false]);
    },
    
    pushButton: function (number) {
        var len = this.get('_flags').length;
        var flags = [];
        for (var i = 0; i < len; i++) { flags[i] = false; }
        flags[number-1] = true;
        this.set('_flags', flags);
    },
    
    releaseButton: function (number) {
        this.get('_flags')[number-1] = false;
    },

    getButtonState: function(number) {
        return this.get('_flags')[number-1];
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


App.ApplicationController = Ember.Controller.extend({
    changeName: function () {
        var name = this.get('content.name');
    },
    data: App.MutexButtonModel.create()
});





App.ToggleButton = Ember.View.extend(Ember.TargetActionSupport, {
    pressed: false,
    tagName: 'button',               // This view is a button.
    classNames: ['up'],              // Default class for the button.
    classNameBindings: ['_pressed'], // Bind the class name to 'pressed'
    //attributeBindings: ['href', 'target', 'rel', 'tabindex', 'action', 'pressed'],
    attributeBindings: ['href', 'rel', 'tabindex', 'action', 'pressed'],

    _pressed: function () {
        var pressed = this.get('pressed');
        if (pressed) { return 'dn'; } else { return 'up'; }
    } .property('pressed'),

    click: function (event) {
        var pressed = this.get('pressed');
        this.set('pressed', !pressed);
        this.triggerAction.apply(this);
    }
});


App.ApplicationView = Ember.View.extend({
  templateName: 'application'
});


App.Router = Ember.Router.extend({
    root: Ember.Route.extend({
        index: Ember.Route.extend({
            route: '/'
        }),

        // Event handlers.
        changeName: function (router) {
            router.get('applicationController').changeName(); // Router delegates to the controller.
        }
    })
});

App.initialize();