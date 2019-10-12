import { Txt } from '../../src/index';

describe('Txt definition class', () => {

    it('should be instanced', () => {
        expect( new Txt('simple text') ).toBeTruthy();
    });

    it('should be a simple text object', () => {
        expect( new Txt('simple text').end ).toEqual({ text: 'simple text' });
    });

    it('should be a text object with an alignment property', () => {
        expect( new Txt('my text').alignment('center').end ).toEqual({ text: 'my text', alignment: 'center' });
    });

    it('should be a text object with an array of text', () => {
        expect( 
            new Txt([
                'Hello',
                new Txt('world!').fontSize(15).id('1').end
            ]).end 
        ).toEqual(
            { 
                text: [
                    'Hello',
                    { text: 'world!', fontSize: 15, id: '1' }
                ] 
            }
        );
    });

});