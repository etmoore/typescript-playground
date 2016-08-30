// following the typescript quick-start tutorial:
// https://www.typescriptlang.org/docs/tutorial.html
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user = new Student("Jennifer", "Z.", "Jabble");
document.body.innerHTML = greeter(user);
