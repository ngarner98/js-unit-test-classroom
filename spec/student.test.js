const registerStudent = require('../student');

describe("registerStudent", () => {

    test("should return -1 from invalid arguments", () => {
        expect(registerStudent()).toBe(-1);
    });

    test("should return an object with valid arguments", () => {
        let testStudent = registerStudent("Gerard", 3.14);
        expect(testStudent).toBeInstanceOf(Object);
    });

    test("should return object matching expectations", () => {
        let testStudent = registerStudent("Gerard", 3.14);
        let expected = {name: "Gerard", gpa: 3.14};
        expect(testStudent).toEqual(expected);
    });
    
});