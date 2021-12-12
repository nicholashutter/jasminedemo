var domath = require("../../src/domath");


describe("add",function()
{
    it("should add two numbers",function()
    {
        expect(domath.add(2,2)).toBe(4);
    });
}); 

describe("mulitply",function()
{
    it("should multiply two numbers",function()
    {
        expect(domath.multiply(2,2)).toBe(4);
    });
});

describe("divide",function()
{
    it("should divide two numbers",function()
    {
        expect(domath.divide(2,2)).toBe(1);
    });
});


