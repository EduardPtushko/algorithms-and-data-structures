import { StackNode, Stack } from './index';

test('Stack is a class', (): void => {
    expect(typeof Stack.prototype.constructor).toBe('function');
});

test('StackNode is a class', (): void => {
    expect(typeof StackNode.prototype.constructor).toBe('function');
});

test('ListNode sets next, prev and value properties correctly', (): void => {
    const node = new StackNode(1);

    expect(node.next).toBeNull();
    expect(node.value).toBe(1);
});

describe('Push', (): void => {
    test('adds new node to the empty Stack', (): void => {
        const stack = new Stack();
        stack.push(1);

        expect(stack.first?.value).toBe(1);
        expect(stack.last?.value).toBe(1);
        expect(stack.last?.next).toBeNull();
        expect(stack.first?.next).toBeNull();
    });

    test('adds new node to the Stack', (): void => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.first?.value).toBe(3);
        expect(stack.last?.value).toBe(1);
    });
});
describe('Pop', (): void => {
    test('returns null if the Stack is empty', (): void => {
        const stack = new Stack();

        expect(stack.pop()).toBeNull();
        expect(stack.last).toBeNull();
        expect(stack.first).toBeNull();
    });

    test('removes  first node when the Stack has one member', (): void => {
        const stack = new Stack();
        stack.push(1);

        expect(stack.pop()?.value).toBe(1);
        expect(stack.last).toBeNull();
        expect(stack.first).toBeNull();
    });

    test('removes a node from  the Stack', (): void => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.pop()?.value).toBe(3);
        expect(stack.pop()?.value).toBe(2);
    });
});
