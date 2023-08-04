console.log('connecté')
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/15_Day_Classes/15_day_classes.md

class Person {
  constructor(firstName, lastName){
    console.log(this)
    this.firstName = firstName
    this.lastName = lastName
  }
  getFullName(){
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

const person = new Person()
console.log(person)

const person1 = new Person("Téotime", "Pacreau")
console.log(person1)

console.log(person1.getFullName())

class Student extends Person {
  saySomething() {
    const said = this.firstName + ' is a student'
    return said
  }
}

const student1 = new Student('Prune', 'Pacreau')
console.log(student1.saySomething())

class Professor extends Person {
  constructor(firstName, lastName, gender){
    super(firstName, lastName)
    this.gender = gender
  }
}

const student2 = new Professor('Poire', 'Pacreau', 'Female')
console.log(student2)

// I.1 Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs){
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs  
  }
  feedMe(){
    const feed = "i'm " + this.name + " and i'm hungry"
    return feed
  }
}
// I.2 Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
  constructor(...rest){
    super(...rest)
  this.tail = 'short tail'
  }
}
const waf = new Dog('Rex', 12, 'Brown', 4)
console.log(waf)

class Cat extends Animal {
  constructor(...rest){
    super(...rest)
  this.tail = 'long tail'
  }
}
const miaou = new Cat('Felix', 3, 'Black', 4)
console.log(miaou)

// II.1 Override the method you create in Animal class
console.log(miaou.feedMe())

Animal.prototype.feedMe = function(){
  const feed =  "I'm " + this.name + " and i'm well fed now"
  return feed
}
console.log(miaou.feedMe())
