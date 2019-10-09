import { Ellipse } from '../../../src';

describe('Ellipse definition class', () => {

    it('should be instanced', () => {
        const ellipse = new Ellipse(10, 10);
        expect( ellipse.end ).toBeTruthy();
    });

    it('should be a simple ellipse', () => {
        const ellipse = new Ellipse(10, 10).end;
        expect( ellipse ).toEqual({ 
            type: 'ellipse',
            r1: 10,
            r2: 10,
            x: 10,
            y: 10
        });
    });

    it('should be a simple ellipse vector', () => {
        const ellipse = new Ellipse(10, 10).end;
        expect( ellipse ).toEqual({ 
            type: 'ellipse',
            r1: 10,
            r2: 10,
            x: 10,
            y: 10
        });
    });

    it('should be an ellipse vector with full properties', () => {
        const ellipse = new Ellipse(10, 10)
            .color('red')
            .dash(5)
            .fillOpacity(0.1)
            .lineColor('blue')
            .lineWidth(3)
            .linearGradient(['green', 'yellow'])
            .lineCap('round')
            .end;
        expect( ellipse ).toEqual({ 
            type: 'ellipse',
            r1: 10,
            r2: 10,
            x: 10,
            y: 10,
            color: 'red',
            dash: { length: 5 },
            fillOpacity: 0.1,
            lineColor: 'blue',
            lineWidth: 3,
            linearGradient: ['green', 'yellow'],
            lineCap: 'round'
        });
    });

});