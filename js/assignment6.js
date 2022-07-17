console.log("********************** Exercise 1 **********************")
String.prototype.filter = function (arr) {
    let result = this;
    for (let word of arr) {
        result = result.replace(word,'');
    }
    return result;
}

let sentence = "we should force child or minor work";
let bannedWords = ["child","minor"];

console.log("Original sentence : " + sentence);
console.log("Banned words : " + bannedWords)
console.log("Result sentence : " + sentence.filter(['child','minor']));

console.log("********************** Exercise 2 **********************")

Array.prototype.bubbleSort = function () {
    let array = this;
    for (var i = 0; i < array.length; i++) {

        for (var j = 0; j < (array.length-i-1); j++) {

            if (array[j] > array[j + 1]) {

                var temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }

    return array;
}

let array = [9,4,1,10,15,-5,-2];

console.log("Original array : " + array);
console.log("Sorted array : " + array.bubbleSort());

console.log("********************** Exercise 3 **********************")

console.log("Inheritance using constructor objects\n---------------------");
function Person(name) {
    this.name = name;
}

function Teacher(subject, name) {
    this.subject = subject;
    this.teach = function () {
        console.log(this.name + " is now teaching " + this.subject + ".\n");
    }
    this.__proto__ = new Person(name);
}

let teacher = new Teacher("Web application Programming", "Sundar Parajuli");
teacher.teach();

console.log("\n factory functions\n---------------------");
function createPerson(name) {
    return { name: name };
}
function createTeacher(subject, name) {
    return { subject: subject, teach: function () { console.log(this.name + " is now teaching " + this.subject + ".\n") }, __proto__: createPerson(name) };
}

let teacher2 = Object.create(createTeacher("Advance software development", "Rene De Jong"));
teacher2.teach();


console.log("********************** Exercise 4 **********************")

console.log("Inheritance using object prototypes\n---------------------");
let personObj = {
    name: "Timalsina", age: 36,
    salute: function () {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    },
    greeting: function () {
        console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old.");
    }
};

let studentObj = {
    major: "Compro",
    greeting: function () {
        console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
    },
    __proto__ : personObj
}

let professorObj = {
    department: "MBA",
    greeting: function () {
        console.log("Hey, my name is " + this.name + " and I am in the " + this.department);
    },
    __proto__ : personObj
}

studentObj.name = "Sunil";
studentObj.age = 29;
studentObj.greeting();
studentObj.salute();

professorObj.name = "Sundar";
professorObj.greeting();
professorObj.salute();


console.log("\n contructor prototypes\n---------------------");
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.salute = function () {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    };
    this.greeting = function () {
        console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old.");
    };

}

function Student(major, name, age) {
    this.major = major;
    this.greeting = function () {
        console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
    };
    this.__proto__ = new Person(name, age);
}

function Professor(department, name, age) {
    this.department = department;
    this.greeting = function () {
        console.log("Good day, my name is " + this.name + " and I am in the " + this.department);
    };
    this.__proto__ = new Person(name, age);
}


let student = new Student("Compro", "Sunil", 25);
student.greeting();
student.salute();

let professor = new Professor("MBA", "Sundar", 36);
professor.greeting();
professor.salute();