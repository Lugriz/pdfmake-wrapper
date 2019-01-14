import { Ul, Txt } from '../../../src/index';

describe('Unordered list definition class', () => {

    it('should be instanced', () => {
        expect( new Ul([]) ).toBeTruthy();
    });

    it('should be a simple unordered list with a text object', () => {
        expect( 
            new Ul([ 
                new Txt('Hi').opacity(0.5).end,
                'second item'
            ]).end 
        ).toEqual(
            {
                ul: [
                    { text: 'Hi', opacity: 0.5 },
                    'second item'
                ]
            }
        );
    });

    it('should be a simple unordered list with a text object and square and markerColor properties', () => {
        expect( 
            new Ul([ 
                new Txt('Hi').opacity(0.5).end,
                'second item'
            ]).type('square').markerColor('red').end 
        ).toEqual(
            {
                ul: [
                    { text: 'Hi', opacity: 0.5 },
                    'second item'
                ],
                type: 'square',
                markerColor: 'red'
            }
        );
    });

});