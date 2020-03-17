export class ListNode {
    next: ListNode | null;
    prev: ListNode | null;
    constructor(public value: unknown) {
        this.next = null;
        this.prev = null;
    }
}

export class DoublyLinkedList {
    head: null | ListNode;
    tail: null | ListNode;
    length = 0;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(val: unknown): DoublyLinkedList {
        const newNode = new ListNode(val);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.tail === null) {
            return undefined;
        } else {
            const currTail = this.tail;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = currTail.prev;
                (this.tail as ListNode).next = null;
            }
            currTail.prev = null;
            this.length--;
            return currTail;
        }
    }

    shift() {
        if (this.head === null) {
            return undefined;
        } else {
            const currHead = this.head;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                (this.head as ListNode).prev = null;
            }
            currHead.next = null;
            this.length--;
            return currHead;
        }
    }

    unshift(value: unknown) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index: number) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let node, count;
        if (index <= this.length / 2) {
            node = this.head;
            count = 0;
            while (index !== count) {
                node = (node as ListNode).next;
                count++;
            }
        } else {
            node = this.tail;
            count = this.length - 1;
            while (index !== count) {
                node = (node as ListNode).prev;
                count--;
            }
        }

        return node;
    }

    set(index: number, value: unknown) {
        const node = this.get(index);

        if (node !== null) {
            node.value = value;
            return true;
        } else {
            return false;
        }
    }

    insert(index: number, value: unknown) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);

        const newNode = new ListNode(value) as ListNode;
        const beforeNode = this.get(index - 1);
        const afterNode = (beforeNode as ListNode).next;
        (beforeNode as ListNode).next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        (afterNode as ListNode).prev = newNode;
        this.length++;
        return true;
    }

    remove(index: number) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const node = this.get(index) as ListNode;
        const beforeNode = node.prev;
        const afterNode = node.next;
        (beforeNode as ListNode).next = afterNode as ListNode;
        (afterNode as ListNode).prev = beforeNode;
        this.length--;

        node.prev = null;
        node.next = null;

        return node;
    }
}
