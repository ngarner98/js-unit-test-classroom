function registerStudent(name) {
    if (!name) {
        return -1;
    } else {
        return {
            name: name
        };
    }
}

function registerStudentButTernary(name) {
    return !name ? -1 
        : { name: name };
}

module.exports = registerStudent;