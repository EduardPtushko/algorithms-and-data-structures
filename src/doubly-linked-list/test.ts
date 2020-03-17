import { DoublyLinkedList as List, ListNode } from './index';

test('DoublyLinkedList is a class', (): void => {
    expect(typeof List.prototype.constructor).toBe('function');
});

test('ListNode is a class', (): void => {
    expect(typeof ListNode.prototype.constructor).toBe('function');
});

test('ListNode sets next, prev and value properties correctly', (): void => {
    const node = new ListNode(1);

    expect(node.next).toBeNull();
    expect(node.prev).toBeNull();
    expect(node.value).toBe(1);
});

describe('Push', (): void => {
    test('adds a node when length is 0', (): void => {
        const list = new List();
        list.push(1);

        expect(list.head?.value).toBe(1);
        expect(list.tail?.value).toBe(1);
        expect(list.head?.prev).toBeNull();
        expect(list.tail?.prev).toBeNull();
    });

    test('adds a node correctly to the end of list', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);

        expect(list.tail?.value).toBe(3);
        expect(list.tail?.prev?.value).toBe(2);
        expect(list.tail?.next).toBeNull();
    });
});

describe('Pop', (): void => {
    test('returns undefined when list is empty', (): void => {
        const list = new List();
        const res = list.pop();

        expect(res).toBeUndefined();
        expect(list.tail).toBeNull();
        expect(list.head).toBeNull();
        expect(list).toHaveLength(0);
    });

    test('removes the last node when length is 1', (): void => {
        const list = new List();
        list.push(1);
        const res = list.pop();

        expect(res?.value).toBe(1);
        expect(res?.prev).toBeNull();
        expect(res?.next).toBeNull();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
    });

    test('removes a node correctly from the end of the list', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);
        const res = list.pop();

        expect(res?.value).toBe(3);
        expect(res?.prev).toBeNull();
        expect(res?.next).toBeNull();
    });
});

describe('Shift', (): void => {
    test('returns undefined when list is empty', (): void => {
        const list = new List();
        const res = list.shift();

        expect(res).toBeUndefined();
        expect(list.tail).toBeNull();
        expect(list.head).toBeNull();
        expect(list).toHaveLength(0);
    });

    test('removes the first node when length is 1', (): void => {
        const list = new List();
        list.push(1);
        const res = list.shift();

        expect(res?.value).toBe(1);
        expect(res?.next).toBeNull();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
    });

    test('removes a node correctly from the begining of the list', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);
        const res = list.shift();

        expect(res?.value).toBe(1);
        expect(res?.prev).toBeNull();
        expect(res?.next).toBeNull();
    });
});

describe('Shift', (): void => {
    test('sets new node when list is empty', (): void => {
        const list = new List();
        list.unshift(1);

        expect(list.tail?.value).toBe(1);
        expect(list.head?.value).toBe(1);
        expect(list).toHaveLength(1);
    });

    test('removes a node correctly from the begining of the list', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);
        list.unshift(5);

        expect(list.head?.value).toBe(5);
        expect(list.head?.prev).toBeNull();
        expect(list).toHaveLength(4);
    });
});

describe('Get', (): void => {
    test('returns null if index is not found', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);

        expect(list.get(-1)).toBeNull();
        expect(list.get(2)).toBeNull();
    });

    test('returns the node of provided index', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);

        expect(list.get(0)?.value).toBe(1);
        expect(list.get(1)?.value).toBe(2);
        expect(list.get(3)?.value).toBe(4);
    });
});

describe('Get', (): void => {
    test('returns false if index is not found', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);

        expect(list.set(-1, 1)).toBeFalsy();
        expect(list.set(2, 2)).toBeFalsy();
    });

    test('returns the node of provided index', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);

        expect(list.set(0, 5)).toBeTruthy();
        expect(list.set(3, 7)).toBeTruthy();
    });
});

describe('Insert', (): void => {
    test('returns false if index is not found', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);

        expect(list.insert(-1, 1)).toBeFalsy();
        expect(list.insert(3, 2)).toBeFalsy();
        expect(list).toHaveLength(2);
    });

    test('returns true if the index is 0', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);

        expect(list.insert(0, 5)).toBeTruthy();
        expect(list).toHaveLength(4);
    });

    test('returns true if the index is 1', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);

        expect(list.insert(3, 5)).toBeTruthy();
        expect(list).toHaveLength(4);
    });

    test('inserts correctly', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);

        expect(list.insert(1, 5)).toBeTruthy();
        expect(list).toHaveLength(4);
    });
});

describe('Remove', (): void => {
    test('returns undefined if index is not found', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);

        expect(list.remove(-1)).toBeUndefined();
        expect(list.remove(2)).toBeUndefined();
        expect(list).toHaveLength(2);
    });

    test('removes a first node if the index is 0', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);

        expect(list.remove(0)?.value).toBe(1);
        expect(list.head?.value).toBe(2);
        expect(list).toHaveLength(2);
    });

    test('removes a last node if the index is length - 1', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);

        expect(list.remove(2)?.value).toBe(3);
        expect(list.tail?.value).toBe(2);
        expect(list).toHaveLength(2);
    });

    test('removes a node correctly', (): void => {
        const list = new List();
        list.push(1);
        list.push(2);
        list.push(3);

        expect(list.remove(1)?.value).toBe(2);
        expect(list).toHaveLength(2);
    });
});
