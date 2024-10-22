class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

class Teacher extends Student {
    constructor (name, age, grade, subject) {
        super(name, age, grade);
        this.subject = subject;
    }

    teach() {
        console.log(`I am teaching ${this.subject}`);
    }
}

const student = new Student('Alex', 20, 12);
const teacher = new Teacher('Mihai', 30, 13, 'Web Technoloies');
console.log(student);
console.log(teacher);
student.greet();
student.teach();