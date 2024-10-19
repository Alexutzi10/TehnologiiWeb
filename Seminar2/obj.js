const Student = {
    name: "Alex",
    email: "alex.surugiu@bosromania.ro",
    age: 20,
    meet: function() {
        console.log(this.name);
    },
    // meet2: () => {
    //     console.log(this.name);
    // }
}

console.log(Student.email);
console.log(Student['email']);
Student.meet();

async function test1(name) {
    console.log(name);
}

const arrTest1 = async (name) => {
    console.log(name);
}

//AndyRechinul a fost aici!

const arrTest2 = name => console.log(name);

test1('Alex');
arrTest1('Alex');