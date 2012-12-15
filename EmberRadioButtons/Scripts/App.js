var App = Ember.Application.create();


App.MutexButtonModel = Ember.Object.extend(
    (function () {
        var buttonField = [true, false, true, false];
        return {
            button1: buttonField[0],
            button2: buttonField[1],
            button3: buttonField[2],
            button4: buttonField[3]
        };
    }())
);


App.ApplicationController = Ember.Controller.extend({
    //content: App.Model.create(),
    changeName: function () {
        var name = this.get('content.name');
        this.set('content.name', name + '1');
    },
    data: new App.MutexButtonModel()
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