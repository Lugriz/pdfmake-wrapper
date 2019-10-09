import { Rect } from '../../../src';

describe('Rect definition class', () => {

    it('should be instanced', () => {
        const rect = new Rect(10, 10);
        expect( rect.end ).toBeTruthy();
    });

    it('should be a simple rect', () => {
        const rect = new Rect(10, 10).end;
        expect( rect ).toEqual({ 
            type: 'rect',
            h: 10,
            w: 10,
            x: 10,
            y: 10
        });
    });

    it('should be a rect vector width border radius', () => {
        const rect = new Rect(10, 10).round(5).end;
        expect( rect ).toEqual({ 
            type: 'rect',
            h: 10,
            w: 10,
            x: 10,
            y: 10,
            r: 5
        });
    });

    it('should be a rect vector with full properties', () => {
        const rect = new Rect(10, 10)
            .color('red')
            .dash(5)
            .fillOpacity(0.1)
            .lineColor('blue')
            .lineWidth(3)
            .linearGradient(['green', 'yellow'])
            .round(2)
            .lineCap('round')
            .end;
        expect( rect ).toEqual({ 
            type: 'rect',
            h: 10,
            w: 10,
            x: 10,
            y: 10,
            color: 'red',
            dash: { length: 5 },
            fillOpacity: 0.1,
            lineColor: 'blue',
            lineWidth: 3,
            linearGradient: ['green', 'yellow'],
            lineCap: 'round',
            r: 2
        });
    });

});