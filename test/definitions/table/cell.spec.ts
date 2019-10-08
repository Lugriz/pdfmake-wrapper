import { Cell, Txt } from '../../../src/index';

describe('Cell definition class', () => {

    it('should be instanced', () => {
        expect( new Cell({}) ).toBeTruthy();
    });

    it('should be a simple Cell with a text object and counter property', () => {
        expect( 
            new Cell( new Txt('Hi').opacity(0.5).end ).colSpan(10).fillColor('red').border([true]).end
        ).toEqual(
            { text: 'Hi', opacity: 0.5, colSpan: 10, fillColor: 'red', border: [true] }
        );
    });

    it('should be a simple Cell with a text object and border property with 2 elements', () => {
        expect( 
            new Cell( 
                new Txt('Hi').opacity(0.5).end 
            ).colSpan(10).fillColor('red').border([true, false]).end
        ).toEqual(
            { text: 'Hi', opacity: 0.5, colSpan: 10, fillColor: 'red', border: [true, false] }
        );
    });

});