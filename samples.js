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
        { name: "Maggie Techner" },
        { name: "Mango Zebra"},
        { name: "Colin Brock"},
        { name: "Apple Dog"}
    ]
};

// Sample output string
let sampleOutput = `Welcome to ${sampleClass.name}. Lecture is led by ${sampleClass.instructor.name}. We have ${sampleClass.tas.length} ${sampleClass.tas.length < 2 ? "TA" : "TAs"} and ${sampleClass.students.length} ${sampleClass.students.length < 2 ? "student" : "students" }.`;

/*  
Welcome to Part Time Web Dev. Lecture is led by 
Gerard Darris. We have 3 TAs and 4 students.
*/