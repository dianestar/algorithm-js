// cf. https://jun-choi-4928.medium.com/javascript%EB%A1%9C-heap-priority-queue-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-8bc13bf095d9

class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    getLeftChild = (parent) => parent * 2 + 1;
    getRightChild = (parent) => parent * 2 + 2;
    getParent = (child) => Math.floor((child - 1) / 2);

    enqueue = (key, value) => {
        const node = { key, value };
        this.heap.push(node);
        this.heapifyUp();
    }

    dequeue = () => {
        const len = this.heap.length;
        const root = this.heap[0];

        if (len <= 0) return undefined;
        if (len === 1) this.heap = [];
        else {
            this.heap[0] = this.heap.pop();
            this.heapifyDown();
        }
        
        return root;
    }

    heapifyUp = () => {
        let idx = this.heap.length - 1;
        const lastEnqueued = this.heap[idx];

        while (idx > 0) {
            const parent = this.getParent(idx);

            if (this.heap[parent].key > lastEnqueued.key) {
                this.heap[idx] = this.heap[parent];
                idx = parent;
            }
            else break;

            this.heap[idx] = lastEnqueued;
        }
    }

    heapifyDown = () => {
        let idx = 0;
        const len = this.heap.length;
        const root = this.heap[idx];

        while (this.getLeftChild(idx) < len) {
            const leftChild = this.getLeftChild(idx);
            const rightChild = this.getRightChild(idx);

            const smallerChild = rightChild < len && this.heap[rightChild].key < this.heap[leftChild].key
            ? rightChild : leftChild;

            if (this.heap[smallerChild].key <= root.key) {
                this.heap[idx] = this.heap[smallerChild];
                idx = smallerChild;
            }
            else break;
        }

        this.heap[idx] = root;
    }
}