import { DocumentDefinition } from '../src/index';

describe('DocumentDefinition', () => {
    let doc: DocumentDefinition;

    beforeEach(() => {
        doc = new DocumentDefinition();
    })

    it('should be instanced', () => {
        expect(doc).toBeDefined();
    });

    it('should create a definition', () => {
        const pageBreakBeforeFn = () => true;
        const docDefiniton = {
            content: [
                { text: 'hi' },
                { text: 'hi2' }
            ],
            background: 'background',
            header: 'header',
            compress: false,
            defaultStyle: {
                alignment: 'center',
                color: '#fefefe',
                bold: true,
                fontSize: 15,
                margin: [10,10,10,10]
            },
            footer: 'footer',
            images: {
                picture: 'data:image/jpeg;base64,'
            },
            info: {
                title: 'pdf'
            },
            pageMargins: [10, 10, 10, 10],
            pageOrientation: 'landscape',
            pageSize: '10px',
            ownerPassword: '123',
            permissions: {
                printing: 'highResolution',
                copying: false
            },
            styles: {
                style1: {
                    background: '#eeeeee'
                }
            },
            userPassword: '123',
            watermark: 'watermark',
            pageBreakBefore: pageBreakBeforeFn
        };

        doc.add({ text: 'hi' });
        doc.add({ text: 'hi2' });
        doc.background('background');
        doc.header('header');
        doc.compress(false);
        doc.defaultStyle({
            alignment: 'center',
            color: '#fefefe',
            bold: true,
            fontSize: 15,
            margin: [10,10,10,10]
        });
        doc.footer('footer');
        doc.images({
            picture: 'data:image/jpeg;base64,'
        });
        doc.info({
            title: 'pdf'
        });
        doc.pageMargins([10, 10, 10, 10]);
        doc.pageOrientation('landscape');
        doc.pageSize('10px');
        doc.permissions('123', {
            printing: 'highResolution',
            copying: false
        });
        doc.styles({
            style1: {
                background: '#eeeeee'
            }
        });
        doc.userPassword('123');
        doc.watermark('watermark');
        doc.pageBreakBefore(pageBreakBeforeFn);

        expect(doc.getDefinition()).toEqual(docDefiniton);
    });

    it('Should replace ADD content', () => {
        doc.add('Previous');
        doc.rawContent('New');
        expect(doc.getDefinition()).toEqual({
            content: 'New'
        });
    });

    it('Should hold previous default styles', () => {
        doc.defaultStyle({
            color: '#eeeeee'
        });

        doc.defaultStyle({
            alignment: 'center'
        });

        expect(doc.getDefinition()).toEqual({
            content: [],
            defaultStyle: {
                color: '#eeeeee',
                alignment: 'center'
            }
        });
    });
});