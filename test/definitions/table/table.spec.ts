import { Table, Txt, Stack } from '../../../src/index';

describe('Table definition class', () => {
    it('should be instanced', () => {
        expect(new Table([])).toBeTruthy();
    });

    it('should be a Table with some objects and config', () => {
        expect(
            new Table([
                [
                    new Txt('first row, first column').opacity(0.5).end,
                    'first row, second column'
                ],
                [
                    new Stack([
                        new Txt('stack 1, second row, first column').opacity(0.5).end,
                        'stack 2, second row, first column'
                    ]).end,
                    'second row, second column'
                ]
            ]).layout('noBorders').widths('*').end
        ).toEqual({
            layout: 'noBorders',
            table: {
                widths: '*',
                body: [
                    [ { text: 'first row, first column', opacity: 0.5 }, 'first row, second column' ],
                    [ { stack: [ { text: 'stack 1, second row, first column', opacity: 0.5 }, 'stack 2, second row, first column' ] }, 'second row, second column' ]
                ]
            }
        });
    });

    it('should be a Table with some objects and array like widths', () => {
        expect(
            new Table([
                [
                    new Txt('first row, first column').opacity(0.5).end,
                    'first row, second column'
                ],
                [
                    new Stack([
                        new Txt('stack 1, second row, first column').opacity(0.5).end,
                        'stack 2, second row, first column'
                    ]).end,
                    'second row, second column'
                ]
            ]).widths([10, 20]).end
        ).toEqual({
            table: {
                widths: [10, 20],
                body: [
                    [ { text: 'first row, first column', opacity: 0.5 }, 'first row, second column' ],
                    [ { stack: [ { text: 'stack 1, second row, first column', opacity: 0.5 }, 'stack 2, second row, first column' ] }, 'second row, second column' ]
                ]
            }
        });
    });

    it('should be a Table with custom layouts', () => {
        const customLayout = {
            fillColor: () => '',
            defaultBorder: true,
            hLineColor: () => ''
        };

        expect(
            new Table([
                [
                    new Txt('first row, first column').opacity(0.5).end,
                    'first row, second column'
                ],
                [
                    new Stack([
                        new Txt('stack 1, second row, first column').opacity(0.5).end,
                        'stack 2, second row, first column'
                    ]).end,
                    'second row, second column'
                ]
            ]).layout(customLayout).end
        ).toEqual({
            layout: customLayout,
            table: {
                body: [
                    [ { text: 'first row, first column', opacity: 0.5 }, 'first row, second column' ],
                    [ { stack: [ { text: 'stack 1, second row, first column', opacity: 0.5 }, 'stack 2, second row, first column' ] }, 'second row, second column' ]
                ]
            }
        });
    });

    describe('#heights', () => {
        it('should be a Table with heights as an array', () => {
            expect(
                new Table([
                    ['1', '2']
                ]).heights([10, 20]).end
            ).toEqual({
                table: {
                    heights: [10, 20],
                    body: [
                        ['1', '2']
                    ]
                }
            });
        });

        it('should be a Table with heights as a single number', () => {
            expect(
                new Table([
                    ['1', '2']
                ]).heights(20).end
            ).toEqual({
                table: {
                    heights: 20,
                    body: [
                        ['1', '2']
                    ]
                }
            });
        });

        it('should be a Table with heights as a function', () => {
            const heightsFn = () => 10;
            
            expect(
                new Table([
                    ['1', '2']
                ]).heights(heightsFn).end
            ).toEqual({
                table: {
                    heights: heightsFn,
                    body: [
                        ['1', '2']
                    ]
                }
            });
        });
    });
});