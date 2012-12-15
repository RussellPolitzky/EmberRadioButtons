/// <reference path="../Libs/Ember/ember.js" />
/// <reference path="App.js" />

var App = Ember.Application.create(); 

App.Person = Ember.Object.extend({
    id: 0,
    name: ""
});

var person = App.Person.create();
person.name = "Duncan";
person.id = 0;

App.userController = Ember.Object.create({
    content: person,
    changeModel: function () {
        this.content.set('name', 'Joe');
    }
});

App.UserView = Ember.View.extend({
    nameBinding: 'App.userController.content.name'
});

function btnTest_OnClick() {
    App.userController.changeModel();
} 