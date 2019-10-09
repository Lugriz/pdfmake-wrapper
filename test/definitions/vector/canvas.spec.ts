import { Canvas } from '../../../src';

describe('Canvas definition class', () => {

    it('should be instanced', () => {
        const canvas = new Canvas([]);
        expect(canvas.end).toBeTruthy();
    });

    it('should be a simple canvas', () => {
        const canvas = new Canvas([{ type: 'line' }]).end;
        expect(canvas).toEqual({
            canvas: [
                {
                    type: 'line'
                }
            ]
        });
    });

    it('should be a canvas with center alignment', () => {
        const canvas = new Canvas([])
            .alignment('center')
            .end;
        expect(canvas).toEqual({
            canvas: [],
            alignment: 'center'
        });
    });

});