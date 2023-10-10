const registerStudent = require("./student.js");
const staff = require("./staff.js");

/* TODO
createClassroom will return a classroom object.
Has 4 parameters:
A subject name
A teacher object
An array of TA objects
An array of student objects
See sample classroom object in samples.js
*/

function createClassroom(subject, teacher, tas, students) {
    if(!subject || !teacher || !tas || !students) {  //falsey
        return -1;
    }  


    return {
        tas: tas,
        students: students

    };
}

/* TODO
getClassInfo will return a template literal
containing the following:
the class' subject, the instructor's name,
and the number of TAs and students.
See sample string in samples.js
*/

function getClassInfo(classroom) {}

module.exports = {
    createClassroom: createClassroom,
    getClassInfo: getClassInfo
};