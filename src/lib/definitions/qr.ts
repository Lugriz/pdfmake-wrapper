import { StyleDefinition } from './style-definition';
import { IQR } from '../interfaces';

/**
 * Class that create a QR code
 */

export class QR extends StyleDefinition<QR, IQR> {

    /**
     * @param _code receives a code
     */

    constructor(
        private _code: string
    ) {
        super();
        this.content.qr = this._code;
    }

    /**
     * Set a size to the QR
     * @param fit the size
     */

    public fit(fit: number): QR {
        this.content.fit = fit;
        return this;
    }

    /**
     * Set a version to the QR
     * @param version the version
     */

    public version(version: number): QR {
        this.content.version = version;
        return this;
    }

    /**
     * Set a foreground to the QR
     * @param foreground the color
     */

    public foreground(foreground: string): QR {
        this.content.foreground = foreground;
        return this;
    }

    /**
     * Set a ecc level to the QR
     * @param eccLevel the level
     */

    public eccLevel(eccLevel: 'L' | 'M' | 'Q' | 'H'): QR {
        this.content.eccLevel = eccLevel;
        return this;
    }

    /**
     * Set a mode to the QR
     * @param mode the size
     */

    public mode(mode: 'numeric' | 'alphanumeric' | 'octet'): QR {
        this.content.mode = mode;
        return this;
    }

    /**
     * Set a mask to the QR
     * @param mask the size
     */

    public mask(mask: number): QR {
        this.content.mask = mask;
        return this;
    }

}