// following the typescript quick-start tutorial:
// https://www.typescriptlang.org/docs/tutorial.html

class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person){
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

var user = new Student("Jennifer", "Z.", "Jabble");
document.body.innerHTML = greeter(user);
