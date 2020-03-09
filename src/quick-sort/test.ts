import { quick } from './index';

test('sorts an array', (): void => {
    const array = [3, 1, 16, 10, 4];
    const sortedArray = [1, 3, 4, 10, 16];

    expect(quick(array)).toEqual(sortedArray);
});
