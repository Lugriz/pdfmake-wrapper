import { PdfMakeWrapper } from '../src/lib/pdfmake-wrapper';

describe('Pdfmake wrapper', () => {
    const pdf = new PdfMakeWrapper();

    it('should be instanced', () => {
        expect( pdf ).toBeDefined();
    });

    it('should be an string using the getBase64 method', done => {
        pdf.create().getBase64( v => {
            expect( typeof v ).toString();
            done();
        });
    });

    it('should be true using the getBlob method', done => {
        pdf.create().getBlob( v => {
            expect( v instanceof Blob ).toBeTruthy();
            done();
        });
    });

    it('should be a Base64 using the getDataUrl method', done => {
        pdf.create().getDataUrl( v => {
            expect( v ).toMatch(/data:application\/pdf;base64,/);
            done();
        });
    });

    it('should be true using the getBuffer method', done => {
        pdf.create().getBuffer( v => {
            expect( typeof v ).toBe('object');
            done();
        });
    });

});