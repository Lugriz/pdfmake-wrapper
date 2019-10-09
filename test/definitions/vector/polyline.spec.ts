import { Polyline } from '../../../src';

describe('Polyline definition class', () => {

    it('should be instanced', () => {
        const line = new Polyline();
        expect( line.end ).toBeTruthy();
    });

    it('should be a simple polyline without points', () => {
        const polyline = new Polyline().end;
        expect( polyline ).toEqual({ 
            type: 'polyline',
            points: []
        });
    });

    it('should be a simple polyline with points in the constructor', () => {
        const polyline = new Polyline([
            { x: 1, y: 4 },
            { x: 1, y: 4 },
            { x: 1, y: 4 }
        ]).end;
        expect( polyline ).toEqual({ 
            type: 'polyline',
            points: [
                { x: 1, y: 4 },
                { x: 1, y: 4 },
                { x: 1, y: 4 },
            ]
        });
    });

    it('should be a line vector with full properties', () => {
        const polyline = new Polyline([ { x: 1, y: 2 } ])
            .color('red')
            .dash(5)
            .fillOpacity(0.1)
            .lineColor('blue')
            .lineWidth(3)
            .linearGradient(['green', 'yellow'])
            .lineCap('round')
            .addPoint(1, 1)
            .end;
        expect( polyline ).toEqual({ 
            type: 'polyline',
            color: 'red',
            dash: { length: 5 },
            fillOpacity: 0.1,
            lineColor: 'blue',
            lineWidth: 3,
            linearGradient: ['green', 'yellow'],
            lineCap: 'round',
            points: [
                { x: 1, y: 2 },
                { x: 1, y: 1 }
            ]
        });
    });

});