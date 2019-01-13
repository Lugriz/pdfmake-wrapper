import { StyleDefinition } from '../style-definition';

/**
 * Class to create a list definition
 */

export abstract class List<T extends List<T, I>, I> extends StyleDefinition<T, I> {

    /**
     * It applies a type marker
     * @param type The type of marker
     */

    public type(type: string): T {
        this.content.type = type;
        return this as any;
    }

    /**
     * It sets a color to the marker
     * @param color The color
     */

    public markerColor(color: string): T {
        this.content.markerColor = color;
        return this as any;
    }
    
}