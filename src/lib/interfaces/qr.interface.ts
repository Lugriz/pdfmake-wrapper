import { IStyleDefinition } from '.';

/**
 * Interface that defines a QR
 */

export interface IQR extends IStyleDefinition {  
    readonly qr: string;
    readonly foreground?: string;
    readonly version?: number;
    readonly fit?: number;
    readonly eccLevel?: string;
    readonly mode?: string;
    readonly mask?: number;
}