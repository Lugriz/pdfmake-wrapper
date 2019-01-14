import { Columns, Txt } from '../../src/index';

describe('Columns definition class', () => {

    it('should be instanced', () => {
        const column = new Columns([]);
        expect( column ).toBeTruthy();
    });

    it('should be an empty columns object', () => {
        const column = new Columns([]);
        expect( column.end ).toEqual({ columns: [] });
    });

    it('should be a columns object with a alignment property', () => {
        const column = new Columns([]);
        expect( column.alignment('center').end ).toEqual({ columns: [], alignment: 'center' });
    });

    it('should be a columns object with a text object', () => {
        const column = new Columns([
            new Txt('Hello').bold().italics().end,
            'world!'
        ]);

        expect( column.end ).toEqual({ columns: [ { text: 'Hello', bold: true, italics: true }, 'world!' ] });
    });

});