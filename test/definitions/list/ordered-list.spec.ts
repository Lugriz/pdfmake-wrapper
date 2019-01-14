import { Ol, Txt } from '../../../src/index';

describe('Ordered list definition class', () => {

    it('should be instanced', () => {
        expect( new Ol([]) ).toBeTruthy();
    });

    it('should be a simple ordered list with a text object', () => {
        expect( 
            new Ol([ 
                new Txt('Hi').opacity(0.5).end,
                'second item'
            ]).end 
        ).toEqual(
            {
                ol: [
                    { text: 'Hi', opacity: 0.5 },
                    'second item'
                ]
            }
        );
    });

    it('should be a simple ordered list with a text object and lower-alpha and markerColor properties', () => {
        expect( 
            new Ol([ 
                new Txt('Hi').opacity(0.5).end,
                'second item'
            ]).type('lower-alpha').reversed().separator('-').markerColor('red').end 
        ).toEqual(
            {
                ol: [
                    { text: 'Hi', opacity: 0.5 },
                    'second item'
                ],
                type: 'lower-alpha',
                markerColor: 'red',
                reversed: true,
                separator: '-'
            }
        );
    });

});