import { PdfMakeWrapper } from '../src/index';
import pdfFonts from 'pdfmake/build/vfs_fonts';

describe('Pdfmake wrapper', () => {
    let pdf: PdfMakeWrapper;

    beforeEach(() => {
        pdf = new PdfMakeWrapper();
    });

    it('should be instanced', () => {
        expect(pdf).toBeDefined();
    });

    it('should be an string using the getBase64 method', done => {
        pdf.create().getBase64( v => {
            expect(typeof v).toString();
            done();
        });
    });

    it('should be true using the getBlob method', done => {
        pdf.create().getBlob( v => {
            expect(v instanceof Blob).toBeTruthy();
            done();
        });
    });

    it('should be a Base64 using the getDataUrl method', done => {
        pdf.create().getDataUrl( v => {
            expect(v).toMatch(/data:application\/pdf;base64,/);
            done();
        });
    });

    it('should be true using the getBuffer method', done => {
        pdf.create().getBuffer( v => {
            expect(typeof v).toBe('object');
            done();
        });
    });

    it('Should set default fonts', () => {
        PdfMakeWrapper.setFonts(pdfFonts, {
            roboto: {
                normal: 'Roboto-Regular.ttf',
                bold: 'Roboto-Medium.ttf',
                italics: 'Roboto-Italic.ttf',
                bolditalics: 'Roboto-MediumItalic.ttf'
            }
        });

        PdfMakeWrapper.useFont('roboto');

        pdf = new PdfMakeWrapper();

        expect(pdf.getDefinition()).toEqual({
            content: [],
            defaultStyle: {
                font: 'roboto'
            }
        });
    });

});