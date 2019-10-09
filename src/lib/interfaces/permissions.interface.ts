/**
 * Defines the permission options 
 */
export interface IPermissions {
    readonly printing: 'highResolution' | 'lowResolution';
    readonly modifying: boolean;
    readonly copying: boolean;
    readonly annotating: boolean;
    readonly fillingForms: boolean;
    readonly contentAccessibility: boolean;
    readonly documentAssembly: boolean;
}