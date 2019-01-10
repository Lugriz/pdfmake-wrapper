/**
 * Interface that defines the format of the info property of the DOC DEFINITION
 */

export interface IInfo {
    title: string;
    author?: string;
    subject?: string;
    keywords?: string;
    creator?: string;
    producer?: string;
    creationDate?: string;
    modDate?: string;
    trapped?: string;
    [ propName: string ]: string | undefined;
}