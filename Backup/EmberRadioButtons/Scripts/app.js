var App = Ember.Application.create();


App.Model = Ember.Object.extend({
    name: 'John',
    state: 'dn'
});

App.ApplicationController = Ember.Controller.extend({
    content: App.Model.create(),
    changeName: function () {
        var name = this.get('content.name');
        this.set('content.name', name + '1');
    }
});


App.ToggleButton = Ember.View.extend(Ember.TargetActionSupport, {
    pressed: false,
    tagName: 'button',               // This view is a button.
    classNames: ['up'],              // Default class for the button.
    classNameBindings: ['_pressed'], // Bind the class name to 'pressed'

    // Allow these attributes to be bound in the view.
    attributeBindings: ['href', 'target', 'rel', 'tabindex', 'action', 'pressed'],

    _pressed: function () {
        var pressed = this.get('pressed');
        if (pressed) { return 'dn'; } else { return 'up'; }
    } .property('pressed'),

    click: function (event) {
        var pressed = this.get('pressed');
        this.set('pressed', !pressed);
        debugger;

        // Check if the button has an explicit target specified
        if (!this.get('target')) {
            // Assign the bindingContext target if no target was specified
            if (this.bindingContext) {
                if (this.bindingContext.target) {
                    this.set('target', this.bindingContext.target);
                }
                else {
                    this.set('target', this.bindingContext);
                }
            }
        }
        // Invoke the action on the target
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