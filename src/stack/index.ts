export class StackNode {
    next: null | StackNode;
    constructor(public value: unknown) {
        this.next = null;
    }
}

export class Stack {
    length = 0;
    first: null | StackNode;
    last: null | StackNode;

    constructor() {
        this.length = 0;
        this.first = null;
        this.last = null;
    }

    push(value: unknown) {
        const newNode = new StackNode(value);
        if (this.first === null) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.length++;
        return true;
    }

    pop() {
        if (!this.first) return null;
        const temp = this.first;
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.length--;
        temp.next = null;
        return temp;
    }

    get size() {
        return this.length;
    }
}
