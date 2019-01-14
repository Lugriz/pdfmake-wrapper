import { Stack, Txt, Columns } from '../../src/index';

describe('Stack definition class', () => {

    it('should be instanced', () => {
        const stack = new Stack([]);
        expect( stack ).toBeTruthy();
    });

    it('should be an empty stacks object', () => {
        const stack = new Stack([]);
        expect( stack.end ).toEqual({ stack: [] });
    });

    it('should be a stack object with an alignment property', () => {
        const stack = new Stack([]);
        expect( stack.alignment('center').end ).toEqual({ stack: [], alignment: 'center' });
    });

    it('should be a stack object with a text object', () => {
        const stack = new Stack([
            new Txt('Hello').bold().italics().end,
            'world!'
        ]);

        expect( stack.end ).toEqual({ stack: [ { text: 'Hello', bold: true, italics: true }, 'world!' ] });
    });

    it('should be a stack object with a text object and column object', () => {
        const stack = new Stack([
            new Columns([
                new Txt('Hello').bold().italics().end,
                'world!'
            ]).end,
            'Second line'
        ]);

        expect( stack.end ).toEqual({ stack: [{ columns: [ { text: 'Hello', bold: true, italics: true }, 'world!' ] }, 'Second line' ] });
    });

});