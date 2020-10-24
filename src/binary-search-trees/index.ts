/* eslint-disable no-constant-condition */
export class BSTNode {
    left: null | BSTNode;
    right: null | BSTNode;
    constructor(public value: number) {
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    root: null | BSTNode;
    constructor() {
        this.root = null;
    }

    insert(value: number) {
        const node = new BSTNode(value);
        if (this.root === null) {
            this.root = node;
            return this;
        }
        let current = this.root;

        while (true) {
            if (value === current.value) return undefined;
            if (current.value > value) {
                if (current.left === null) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    }

    contains(value: number) {
        if (this.root === null) return undefined;
        if (this.root.value === value) return true;

        let current: BSTNode | null = this.root;

        while (current !== null) {
            if (current.value === value) return true;
            if (current.value > value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    BFS() {
        const queue = [];
        const visited: number[] = [];
        let node = this.root;
        queue.push(node);

        while (queue.length > 0) {
            node = queue.shift() as BSTNode;
            visited.push(node.value);
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        return visited;
    }

    DFSPreOrder() {
        if (!this.root) return [];
        const visited: number[] = [];

        function helper(node: BSTNode) {
            visited.push(node.value);
            if (node.left !== null) {
                helper(node.left);
            }
            if (node.right !== null) {
                helper(node.right);
            }
        }

        helper(this.root);

        return visited;
    }
    DFSPostOrder() {
        if (!this.root) return [];
        const visited: number[] = [];

        function helper(node: BSTNode) {
            if (node.left !== null) {
                helper(node.left);
            }
            if (node.right !== null) {
                helper(node.right);
            }
            visited.push(node.value);
        }

        helper(this.root);

        return visited;
    }
    DFSInOrder() {
        if (!this.root) return [];
        const visited: number[] = [];

        function helper(node: BSTNode) {
            if (node.left !== null) {
                helper(node.left);
            }
            visited.push(node.value);
            if (node.right !== null) {
                helper(node.right);
            }
        }

        helper(this.root);

        return visited;
    }
}
