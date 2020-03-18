export class QueueNode {
    next: null | QueueNode;
    constructor(public value: unknown) {
        this.next = null;
    }
}

export class Queue {
    length = 0;
    first: null | QueueNode;
    last: null | QueueNode;

    constructor() {
        this.length = 0;
        this.first = null;
        this.last = null;
    }

    enqueue(value: unknown) {
        const newNode = new QueueNode(value);
        if (this.last === null) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return true;
    }

    dequeue() {
        if (!this.first) return null;
        const temp = this.first;
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.length--;
        return temp.value;
    }

    get size() {
        return this.length;
    }
}
