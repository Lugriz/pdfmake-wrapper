import { TocItem, Txt } from '../../../src/index';

describe('Toc item definition class', () => {

    it('should be instanced', () => {
        expect( new TocItem( new Txt('').end ) ).toBeTruthy();
    });

    it('should be a simple toc item with a text object', () => {
        expect( new TocItem( new Txt('Hi').end ).end ).toEqual({ text: 'Hi', tocItem: true });
    });

    it('should be a simple toc item with a text object and tocStyle property', () => {
        expect( new TocItem( new Txt('Hi').bold().end ).tocStyle({ decoration: 'underline' }).end ).toEqual({ text: 'Hi', bold: true, tocItem: true, tocStyle: { decoration: 'underline' } });
    });

});