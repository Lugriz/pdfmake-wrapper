import { SVG } from '../../src/index';

describe('SVG definition class', () => {

    it('should be instanced', () => {
        expect( new SVG('<svg>') ).toBeTruthy();
    });

    it('should be a simple svg object', () => {
        expect( new SVG('<svg>').end ).toEqual({ svg: '<svg>' });
    });

    it('should be a svg object with an alignment property', () => {
        expect( new SVG('<svg>').fit([10, 10]).end ).toEqual({ svg: '<svg>', fit: [10, 10] });
    });

    it('should be a svg object with alignment', () => {
        expect( new SVG('<svg>').alignment('center').end ).toEqual({ svg: '<svg>', alignment: 'center' });
    });

});