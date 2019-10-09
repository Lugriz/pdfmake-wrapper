import { StyleDefinition } from '../style-definition';
import { IVector, ICanvas } from '../../interfaces';

/**
 * Creates a canvas to set vectors
 */
export class Canvas extends StyleDefinition<Canvas, ICanvas> {

    /**
     * @param vectors {Array<IVector>} Array of vectors
     */
    constructor(
        vectors: IVector[]
    ) {
        super();
        this.content.canvas = vectors;
    }
}