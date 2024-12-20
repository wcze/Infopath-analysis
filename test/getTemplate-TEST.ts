const getTemplate = require('../getTemplate');

describe('getTemplate', () => {
    test('should return the correct template for a given input', () => {
        const input = 'exampleInput';
        const expectedOutput = 'expectedTemplate';
        const result = getTemplate(input);
        expect(result).toBe(expectedOutput);
    });

    test('should return null for an invalid input', () => {
        const input = 'invalidInput';
        const result = getTemplate(input);
        expect(result).toBeNull();
    });

});