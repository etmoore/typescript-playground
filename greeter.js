function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user = { firstName: 'Chris', lastName: 'Samuelson' };
document.body.innerHTML = greeter(user);
