export class ListNode {
    next: ListNode | null;
    constructor(public value: unknown) {
        this.next = null;
    }
}

export class SinglyLinkedList {
    head: ListNode | null;
    tail: ListNode | null;
    length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value: unknown) {
        const node = new ListNode(value);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            (this.tail as ListNode).next = node;
            this.tail = node;
        }

        this.length++;

        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }

    unshift(value: unknown) {
        const node = new ListNode(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }

        node.next = this.head;
        this.head = node;
        this.length++;

        return this;
    }

    get(index: number) {
        if (this.length <= index || index < 0) {
            return null;
        }

        let counter = 0;
        let node = this.head;
        while (counter !== index) {
            node = node?.next as ListNode;
            counter++;
        }
        return node;
    }

    set(index: number, value: unknown) {
        const node = this.get(index);

        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }

    insert(index: number, value: unknown) {
        if (this.length < index || index < 0) {
            return false;
        }

        if (this.length === index) {
            this.push(value);
            return true;
        }
        const newNode = new ListNode(value);
        const prev = this.get(index) as ListNode;
        const next = prev.next;
        prev.next = newNode;
        newNode.next = next;
        this.length++;

        return true;
    }

    delete(index: number) {
        if (this.length <= index || index < 0) {
            return undefined;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }

        const prev = this.get(index - 1) as ListNode;
        const removed = prev.next as ListNode;
        prev.next = removed.next;
        this.length--;

        return removed;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;

        for (let i = 0; i < this.length; i++) {
            next = (node as ListNode).next;
            (node as ListNode).next = prev;
            prev = node;
            node = next;
        }

        return this;
    }

    print() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }

    *[Symbol.iterator]() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        for (let i = 0; i < this.length; i++) {
            yield node?.value;
            if (node.next) node = node?.next;
        }
    }
}

const list = new SinglyLinkedList();

list.push(1);
list.push(2);

list.reverse();
