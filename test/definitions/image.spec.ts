import { Img } from '../../src/index';

describe('Img definition class', () => {

    it('should be instanced', () => {
        const img = new Img('');
        expect( img ).toBeTruthy();
    });

    it('should be an object width a alignment property', () => {
        const img = new Img('');
        expect( JSON.stringify(img.alignment('center').end) ).toBe('{\"alignment\":\"center\"}');
    });

    it('should be an object width a fit property', () => {
        const img = new Img('');
        expect( JSON.stringify(img.fit([10,10]).end) ).toBe('{\"fit\":[10,10]}');
    });

});