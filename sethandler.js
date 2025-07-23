let student = {
    name: 'John'
}

let setNewValue = {
  set: function(obj, prop, value) {

    obj[prop] = value;
    return;
  }
};

// setting new proxy
let person = new Proxy(student, setNewValue);

// setting new key/value
person.age = 25;
console.log(person); // Proxy {name: "John", age: 25}