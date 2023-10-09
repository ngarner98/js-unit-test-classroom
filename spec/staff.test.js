const staff = require("../staff.js");

describe("registerTA", function() {

    test("should return -1 from invalid arguments", function() {
        expect(staff.registerTA()).toBe(-1);
    });

    test("should return an object with valid arguments", function() {
        let testTA = staff.registerTA("Kyle", true);
        expect(testTA).toBeInstanceOf(Object);
    });

    test("should return object matching expectations", function() {
        let testTA = staff.registerTA("Kyle", true);
        let expected = {name: "Kyle", isLcGrad: true};
        expect(testTA).toEqual(expected);
    });
});

describe("registerTeacher", () => {
    
    test("should return -1 from invalid arguments", function() {
        // TODO Complete test 1
    });

    test("should return an object with valid arguments", function() {
        // TODO Complete test 2
    });

    test("should return object matching expectations", function() {
        // TODO Complete test 3
    });

});