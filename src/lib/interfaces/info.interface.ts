/**
 * Interface that defines the format of the info property of the DOC DEFINITION
 */

export interface IInfo {
    readonly title: string;
    readonly author?: string;
    readonly subject?: string;
    readonly keywords?: string;
    readonly creator?: string;
    readonly producer?: string;
    readonly creationDate?: string;
    readonly modDate?: string;
    readonly trapped?: string;
    readonly [ propName: string ]: string | undefined;
}