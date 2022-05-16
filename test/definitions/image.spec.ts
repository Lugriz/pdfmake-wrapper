import { Img } from '../../src/index';
import { isBase64 } from '../../src/lib/utils/is-base64';

describe('Img definition class', () => {

    it('should be instanced', () => {
        const img = new Img('');
        expect( img ).toBeTruthy();
    });

    it('should build the image', async () => {
        const img = await new Img('data:image/png;base64,').build();
        expect(img.image).toBeDefined();
        expect(typeof img.image).toBe('string');
        expect(isBase64(img.image)).toBeTruthy();
    });

    it('should be an object width a alignment property', () => {
        const img = new Img('');
        /*eslint no-useless-escape: "off" */
        expect( JSON.stringify(img.alignment('center').end) ).toBe('{\"alignment\":\"center\"}');
    });

    it('should be an object width a fit property', () => {
        const img = new Img('');
        /*eslint no-useless-escape: "off" */
        expect( JSON.stringify(img.fit([10,10]).end) ).toBe('{\"fit\":[10,10]}');
    });

});