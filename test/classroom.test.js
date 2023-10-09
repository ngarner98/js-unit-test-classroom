const classroom = require("../classroom.js");
const staff = require("../staff.js");
const registerStudent = require("../student.js");

beforeAll(() => {
    gerard = staff.registerTeacher("Gerard Darris", "Programming", true);
    
    patrick = staff.registerTA("Patrick Durian", true);
    dennis = staff.registerTA("Dennis Sheets", true);
    banana = staff.registerTA("Banana Cat", false);
    taArray = [patrick, dennis, banana];

    maggie = registerStudent("Maggie Techner");
    mango = registerStudent("Mango Zebra");
    colin = registerStudent("Colin");
    apple = registerStudent("Apple Dog");
    studentArray = [maggie, mango, colin, apple];

    lc101 = classroom.createClassroom("Part Time Web Dev", gerard, taArray, studentArray);
});

describe("createClassroom", () => {
/* TODO 
Test 1: test that the function returns an object
Test 2: test that invalid outputs returns -1
Test 3: test length of ta and student arrays
Test 4: test that lc101 object values match inputs
*/
});

describe("getClassInfo", () => {
    /* TODO
    BONUS TEST: test that string output of lc101 
    matches inputs
    */
});