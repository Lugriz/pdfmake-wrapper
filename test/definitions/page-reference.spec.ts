import { PageReference } from '../../src/index';

describe('Page reference definition class', () => {

    it('should be instanced', () => {
        expect( new PageReference('key') ).toBeTruthy();
    });

    it('should be a simple page reference object', () => {
        expect( new PageReference('key').end ).toEqual({ pageReference: 'key' });
    });

    it('should be a page reference object with a color property', () => {
        expect( new PageReference('key').color('red').end ).toEqual({ pageReference: 'key', color: 'red' });
    });

});