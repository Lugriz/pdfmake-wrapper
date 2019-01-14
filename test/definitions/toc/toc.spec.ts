import { Toc, Columns } from '../../../src/index';

describe('Toc definition class', () => {

    it('should be instanced', () => {
        expect( new Toc('') ).toBeTruthy();
    });

    it('should be a simple toc object', () => {
        expect( new Toc('simple toc').end ).toEqual({ toc: { title: 'simple toc' } });
    });

    it('should be a toc object with margin property', () => {
        expect( new Toc('toc with margin').textStyle({ margin: 12 }).end ).toEqual({ toc: { title: 'toc with margin', textStyle: { margin: 12 } } });
    });

    it('should be a toc object with a column object', () => {
        expect( new Toc( new Columns([ 'Hi' ]).end ).end ).toEqual({ toc: { title: { columns: [ 'Hi' ] } } });
    });

});