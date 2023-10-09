// Sample classroom object for visual reference:
let sampleClass = {
    name: "Part Time Web Dev",
    instructor: 
    {
        name: "Gerard",
        subject: "Programming",
        likesBananaCat: true
    },
    tas: 
    [
        { name: "Patrick", isLcGrad: true },
        { name: "Dennis", isLcGrad: true },
        { name: "Banana Cat", isLcGrad: false }
    ],
    students: 
    [
        { name: "Maggie" },
        { name: "Mango Zebra"},
        { name: "Colin"},
        { name: "Apple Dog"}
    ]
};

let sampleOutput = `Welcome to ${sampleClass.name}. Lecture is led by ${sampleClass.instructor.name}. We have ${sampleClass.tas.length} TAs and ${sampleClass.students.length} students.`