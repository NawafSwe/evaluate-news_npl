import {handleSubmit} from "./formHandler";

describe('Test, the function handleSubmit() should exist', () => {
    test('must return true', async () => {
        expect(handleSubmit).toBeDefined();
    });
});
describe('Test, the function "handleSubmit()" should be a function', () => {
    test('It must be a function', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});