import { TextReference } from '../../src/index';

describe('Text reference definition class', () => {

    it('should be instanced', () => {
        expect( new TextReference('key') ).toBeTruthy();
    });

    it('should be a simple text reference object', () => {
        expect( new TextReference('key').end ).toEqual({ textReference: 'key' });
    });

    it('should be a text reference object with a color property', () => {
        expect( new TextReference('key').color('red').end ).toEqual({ textReference: 'key', color: 'red' });
    });

});