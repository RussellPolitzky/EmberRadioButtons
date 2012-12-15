/// <reference path="../Libs/Ember/ember.js" />
/// <reference path="Person.js" />

App.peopleController = Em.ArrayController.create({
    content: App.Person.creat()
});