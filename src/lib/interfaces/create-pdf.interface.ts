/**
 * interfaces of the type for operations when a PDF is created
 */
export interface ICreatePDF {
    download(filename?: string, cb?: (v?: any) => void, options?: any ): void;
    open(options?: any, win?: Window ): void;
    print(options?: any, win?: Window ): void;
    getDataUrl(cb?: (v?: any) => void, options?: any ): void;
    getBase64(cb?: (v?: any) => void, options?: any ): void;
    getBuffer(cb?: (v?: any) => void, options?: any ): void;
    getBlob(cb?: (v?: any) => void, options?: any ): void;
}