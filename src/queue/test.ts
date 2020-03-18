import { QueueNode, Queue } from './index';

test('Queue is a class', (): void => {
    expect(typeof Queue.prototype.constructor).toBe('function');
});

test('QueueNode is a class', (): void => {
    expect(typeof QueueNode.prototype.constructor).toBe('function');
});

test('ListNode sets next, prev and value properties correctly', (): void => {
    const node = new QueueNode(1);

    expect(node.next).toBeNull();
    expect(node.value).toBe(1);
});

describe('Enqueue', (): void => {
    test('adds new node to the empty Queue', (): void => {
        const queue = new Queue();
        queue.enqueue(1);

        expect(queue.first?.value).toBe(1);
        expect(queue.last?.value).toBe(1);
        expect(queue.last?.next).toBeNull();
        expect(queue.first?.next).toBeNull();
    });

    test('adds new node to the Queue', (): void => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.enqueue(3)).toBeTruthy();
        expect(queue.first?.value).toBe(1);
        expect(queue.last?.value).toBe(3);
    });
});
describe('Dequeue', (): void => {
    test('returns null if the Queue is empty', (): void => {
        const queue = new Queue();

        expect(queue.dequeue()).toBeNull();
        expect(queue.last).toBeNull();
        expect(queue.first).toBeNull();
    });

    test('removes first node when the Queue has one member', (): void => {
        const queue = new Queue();
        queue.enqueue(1);

        expect(queue.dequeue()).toBe(1);
        expect(queue.last).toBeNull();
        expect(queue.first).toBeNull();
    });

    test('removes a node from the Queue', (): void => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
    });
});
