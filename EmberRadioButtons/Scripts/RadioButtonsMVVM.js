
App.Person = DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    fullName: function () {
        return this.get('firstName') +
           " " + this.get('lastName');
    } .property('firstName', 'lastName')
});
App.peopleController = Em.ArrayController.create({
    content: App.Person.findAll()
});