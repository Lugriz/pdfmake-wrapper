import { Line } from '../../../src';

describe('Line definition class', () => {

    it('should be instanced', () => {
        const line = new Line(10, 10);
        expect( line.end ).toBeTruthy();
    });

    it('should be a simple line', () => {
        const line = new Line(10, 10).end;
        expect( line ).toEqual({ 
            type: 'line',
            x1: 10,
            y1: 10,
            x2: 10,
            y2: 10
        });
    });

    it('should be a line vector with full properties', () => {
        const line = new Line(10, 10)
            .color('red')
            .dash(5)
            .fillOpacity(0.1)
            .lineColor('blue')
            .lineWidth(3)
            .linearGradient(['green', 'yellow'])
            .lineCap('round')
            .end;
        expect( line ).toEqual({ 
            type: 'line',
            x1: 10,
            y1: 10,
            x2: 10,
            y2: 10,
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