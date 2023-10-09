const registerStudent = require('../student');

describe("registerStudent", () => {

    test("should return -1 from invalid arguments", () => {
        expect(registerStudent()).toBe(-1);
    });

    test("should return an object with valid arguments", () => {
        expect(registerStudent("Gerard", 3.14)).toBeInstanceOf(Object);
    });

    test("should return object matching expectations", () => {
        let expected = {name: "Gerard", gpa: 3.14};
        expect(registerStudent("Gerard", 3.14)).toEqual(expected);
    });
    
});