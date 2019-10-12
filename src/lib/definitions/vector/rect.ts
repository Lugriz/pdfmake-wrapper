import { Vector } from './vector';
import { IRect } from '../../interfaces';

/**
 * Creates a rect vector
 */
export class Rect extends Vector<Rect, IRect> {

    /**
     * if either of the params receive one number (`new Rect(10,10)`):
     *  * `point` is applied to `x` and `y`
     *  * `size` is applied to `w` (width) and `h` (height)
     * 
     * if either of the params receive a tuple (`new Rect([10, 5],[20, 30])`)
     *  * `point[0]` is applied to `x` and `point[1]` is applied to `y`
     *  * `size[0]` is applied to `w` (width) and `size[1]` is applied to `h` (height)
     * 
     * @param point the point where the rect will be drawn
     * @param size the size of the rect
     */
    constructor(
        point: number | [number, number],
        size: number | [number, number]
    ) {
        super('rect');
        this.setPoint(point);
        this.setSize(size);
    }

    /**
     * Sets the point to the rect vector
     * @param point the point of the rect vector
     */
    private setPoint(point: number | [number, number]): void {
        if (Array.isArray(point)) {
            this.content.x = point[0];
            this.content.y = point[1];
        } else {
            this.content.x = point;
            this.content.y = point;
        }
    }

    /**
     * Sets the size of the rect vector
     * @param size the sixe of the rect vector
     */
    private setSize(size: number | [number, number]): void {
        if (Array.isArray(size)) {
            this.content.w = size[0];
            this.content.h = size[1];
        } else {
            this.content.w = size;
            this.content.h = size;
        }
    }

    /**
     * round the borders
     * @param num radius number
     */
    public round(num: number): Rect {
        this.content.r = num;
        return this;
    }

}