import { IStyleDefinition } from '..';

/**
 * Interface that defines a text reference
 */
export interface IToc extends IStyleDefinition {  
    readonly title: any;
    readonly numberStyle?: IStyleDefinition;
    readonly textStyle?: IStyleDefinition;
    readonly textMargin?: number | [number, number] | [number, number, number, number];
}