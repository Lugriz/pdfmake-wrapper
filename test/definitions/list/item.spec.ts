import { Item, Txt } from '../../../src/index';

describe('Item definition class', () => {

    it('should be instanced', () => {
        expect( new Item({}) ).toBeTruthy();
    });

    it('should be a simple item with a text object and counter property', () => {
        expect( 
            new Item( new Txt('Hi').opacity(0.5).end ).counter(10).listType('lower-roman').end
        ).toEqual(
            { text: 'Hi', opacity: 0.5, counter: 10, listType: 'lower-roman' }
        );
    });

});