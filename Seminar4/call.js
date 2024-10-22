const person = {
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
    
    meet(age, punctuation) {
        console.log('I am ${age} years old${punctuation}');
    }
}

const person2 = {
    name: 'Alex'
}

const bound = person.greet.bind(person2)
const bound2 = person.meet.bind(null)

person.greet.call(person2)
person.meet.call(person2, 20, '.')
person.meet.apply(person2, [20, '.'])
bound()
bound2(20, '.')