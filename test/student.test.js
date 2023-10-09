const registerStudent = require('../student.js');

describe("registerStudent", () => {

    test("should return an object with valid arguments", () => {
        let testStudent = registerStudent("Gerard");
        expect(testStudent).toBeInstanceOf(Object);
    });

    test("should return -1 with invalid arguments", () => {
        expect(registerStudent()).toBe(-1);
    });

    test("should return an object matching expectations", () => {
        let testStudent = registerStudent("Gerard");
        let expected = {name: "Gerard"};
        expect(testStudent).toEqual(expected);
    });
    
});