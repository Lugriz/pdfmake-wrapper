import { QR } from '../../src/index';

describe('QR definition class', () => {

    it('should be instanced', () => {
        expect( new QR('my code') ).toBeTruthy();
    });

    it('should be a simple qr object', () => {
        expect( new QR('my code').end ).toEqual({ qr: 'my code' });
    });

    it('should be a qr object with an alignment property', () => {
        expect( new QR('my code').alignment('center').end ).toEqual({ qr: 'my code', alignment: 'center' });
    });

    it('should be a qr object with an mode and version properties', () => {
        expect( new QR('my code').version(1).mode('numeric').end ).toEqual({ qr: 'my code', version: 1, mode: 'numeric' });
    });

});