import { Vector } from './vector';
import { IPolyline, IPoint } from '../../interfaces';

/**
 * Creates a polyline vector
 */
export class Polyline extends Vector<Polyline, IPolyline> {

    /**
     * @param points {Array<IPoint>} An array of points (optional)
     */
    constructor(points: IPoint[] = []){
        super('polyline');
        this.content.points = points;
    }

    /**
     * Closes the path
     */
    public closePath(): Polyline {
        this.content.closePath = true;
        return this;
    }

    /**
     * Adds a new point to draw the polyline
     * @param x coord X
     * @param y coord Y
     */
    public addPoint(x: number, y: number): Polyline {
        this.content.points.push({ x, y });
        return this;
    }
}