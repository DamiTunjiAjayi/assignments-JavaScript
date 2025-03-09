let student = {name:'John',
    age: 25,
    grade: 'A' 
}

function greeting (name) {
    return`Hello, ${student.name}!`;
}

console.log(greeting(student))