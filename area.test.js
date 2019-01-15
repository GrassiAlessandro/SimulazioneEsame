const area = require("./area")

test('calculate Area 2 * 2', () => {
    expect(area([2,2])).toBe(4);
});
test('calculate Area 0 * 2', () => {
    expect(area([0,2])).toBe(0);
});
test('calculate Area -3 * 2', () => {
    expect(area([-3,2])).toBe(-1);
});
test('calculate Area undefined * 2', () => {
    expect(area([undefined,2])).toBe(-1);
});
test('calculate Area "aaa"', () => {
    expect(area("aaa")).toBe(-1);
});
test('calculate Area ["aaa","bbb"]', () => {
    expect(area(["aaa","bbb"])).toBe(-1);
});
test('calculate Area [1,2,3]', () => {
    expect(area([1,2,3])).toBe(-1);
});
test('calculate Area [1]', () => {
    expect(area([1])).toBe(-1);
});
test('calculate Area NO PARAMS', () => {
    expect(area()).toBe(-1);
});