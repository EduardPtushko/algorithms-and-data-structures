import { ListNode, SinglyLinkedList as List } from './index';

test('ListNode is a class', (): void => {
    expect(typeof ListNode.prototype.constructor).toEqual('function');
});
test('SinglyLinkedList is a class', (): void => {
    expect(typeof List.prototype.constructor).toEqual('function');
});

describe('A ListNode', (): void => {
    test('node has two properties next and value', (): void => {
        const node = new ListNode('value');

        expect(node.next).toBeNull();
        expect(node.value).toEqual('value');
    });
});

describe('Push', (): void => {
    test('adds node to the end of the List', (): void => {
        const list = new List();
        list.push('one');
        list.push('two');
        list.push('three');

        expect(list).toHaveLength(3);
        expect(list.head?.value).toBe('one');
        expect(list.tail?.value).toBe('three');
    });
});

describe('Pop', (): void => {
    test('returns null when the List is empty', (): void => {
        const list = new List();
        expect(list.pop()).toBeUndefined();
    });

    test('removes node from the end of the List', (): void => {
        const list = new List();
        list.push('one');
        list.push('two');

        expect(list.pop()?.value).toEqual('two');
        expect(list).toHaveLength(1);
    });

    test('removes node from the end of the List and sets tail to null', (): void => {
        const list = new List();
        list.push('one');

        expect(list.pop()?.value).toEqual('one');
        expect(list).toHaveLength(0);
        expect(list.tail).toBeNull();
    });
});

describe('Shift', (): void => {
    test('returns null when the List is empty', (): void => {
        const list = new List();
        expect(list.shift()).toBeUndefined();
    });

    test('removes node from the beggining of the List', (): void => {
        const list = new List();
        list.push('one');
        list.push('two');

        expect(list.shift()?.value).toEqual('one');
        expect(list).toHaveLength(1);
    });

    test('removes node from the beggining of the List and sets tail to null', (): void => {
        const list = new List();
        list.push('one');

        expect(list.shift()?.value).toEqual('one');
        expect(list).toHaveLength(0);
        expect(list.tail).toBeNull();
    });
});

describe('Unshift', (): void => {
    test('adds node to the beggining of the List', (): void => {
        const list = new List();
        list.push('one');
        list.push('two');

        expect(list.unshift('three')).toHaveLength(3);
        expect(list.head?.value).toEqual('three');
        expect(list.tail?.value).toEqual('two');
    });
});

describe('Get', (): void => {
    test('returns null if index out of the range', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);

        expect(list.get(2)).toBeNull();
        expect(list.get(-1)).toBeNull();
    });

    test('returns correct value of a node', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);
        expect(list.get(1)?.value).toBe(2);
        expect(list.get(2)?.value).toBe(3);
    });
});

describe('Set', (): void => {
    test('returns false if node does not exist', (): void => {
        const list = new List();
        list.push(1);

        expect(list.set(2, 2)).toBeFalsy();
    });

    test('returns node with set value ', (): void => {
        const list = new List();
        list.push(1);
        list.push(3);

        expect(list.set(1, 2)).toBeTruthy();
    });
});

describe('Insert', (): void => {
    test('returns false when index incorrect', (): void => {
        const list = new List();
        list.push(1);

        expect(list.insert(-1, 2)).toBeFalsy();
        expect(list.insert(2, 2)).toBeFalsy();
    });

    test('returns true when length is 0', (): void => {
        const list = new List();

        expect(list.insert(0, 2)).toBeTruthy();
        expect(list).toHaveLength(1);
    });

    test('returns true when length is equal to index', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);
        expect(list.insert(3, 2)).toBeTruthy();
        expect(list).toHaveLength(4);
    });

    test('returns true', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);

        expect(list.insert(2, 2)).toBeTruthy();
        expect(list).toHaveLength(4);
    });
});

describe('Delete', (): void => {
    test('returns undefined when index incorrect', (): void => {
        const list = new List();
        list.push(1);

        expect(list.delete(-1)).toBeUndefined();
        expect(list.delete(2)).toBeUndefined();
    });

    test('returns node with correct value when length is 1', (): void => {
        const list = new List();
        list.push(1);
        expect(list.delete(0)?.value).toEqual(1);
        expect(list).toHaveLength(0);
    });

    test('returns node with correct value when length - 1 is equal to index', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);
        expect(list.delete(2)).toBeTruthy();
        expect(list).toHaveLength(2);
    });

    test('returns the node ', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);

        expect(list.delete(1)?.value).toEqual(2);
        expect(list).toHaveLength(2);
    });
});

describe('Reverse', (): void => {
    test('returns reversed List', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);
        list.reverse();
        expect(list.print()).toEqual([3, 2, 1]);
    });
});
describe('Print', (): void => {
    test('returns array of all values', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);

        expect(list.print()).toEqual([1, 2, 3]);
    });
});

describe('Iterable', (): void => {
    test('Can iterate over list', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);
        const arr = [];
        for (const item of list) {
            arr.push(item);
        }

        expect(arr).toEqual([1, 2, 3]);
        expect([...list]).toEqual([1, 2, 3]);
    });
});
