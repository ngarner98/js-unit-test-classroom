function registerStudent(name, gpa) {
    if (!name || !gpa || isNaN(gpa)) {
        return -1;
    } else {
        return {
            name: name,
            gpa: gpa
        };
    }
}

function registerStudentButTernary(name, gpa) {
    return !name || !gpa || isNaN(gpa) ? -1
        : { name: name, gpa: gpa };
}

module.exports = registerStudent;