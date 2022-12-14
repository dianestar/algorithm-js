const solution = (board) => {
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
        
        empty = () => this.heap.length === 0;
        
        front = () => this.heap[0].value;
    }
    
    let answer = 2147483647;
    const len = board.length;
    
    // ?????? ????????? ????????? ??????
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];
    
    const isOutOfRange = (r, c) => {
        if (r < 0 || r >= len || c < 0 || c >= len) return true;
        return false;
    }
        
    const pq = new PriorityQueue();
    pq.enqueue(0, [0, 0, -1, 0]);
    const visited = new Array(len);
    for (let i=0; i<len; i++) {
        visited[i] = new Array(len);
        for (let j=0; j<len; j++) {
            visited[i][j] = new Array(len);
        }
    }
    
    while (!pq.empty()) {
        const [row, col, dir, price] = pq.front();
        pq.dequeue();
        
        if (row === len - 1 && col === len - 1) {
            answer = Math.min(answer, price);
        }
        
        for (let k=0; k<4; k++) {
            // cf. ???????????? ???, ???, ???, ?????? ????????? ??? ??? ?????? ???????????? ????????? ??? ??????
            const nextRow = row + dr[k];
            const nextCol = col + dc[k];
            
            // cf. 0??? ?????? ?????? ????????? 1??? ?????? ?????? ????????? ????????? ????????? ?????????
            // cf. ?????? ?????? ????????? ???????????? ????????? ??? ??????
            if (isOutOfRange(nextRow, nextCol) || board[nextRow][nextCol] === 1) continue;

            // cf. ?????? ????????? ????????? ?????? ?????? ?????? ????????? ?????? ?????? 100?????? ???????????? ????????? ?????? ?????? ?????? 500?????? ????????? ???
            let nextPrice = price;
            nextPrice += 100;
            if (dir % 2 === 0 && k % 2 === 1 || dir % 2 === 1 && k % 2 === 0) nextPrice += 500;
            
            if (!visited[nextRow][nextCol][k] || visited[nextRow][nextCol][k] >= nextPrice) {
                visited[nextRow][nextCol][k] = nextPrice;
                pq.enqueue(nextPrice, [nextRow, nextCol, k, nextPrice]);
            }
        }
    }
    
    // ???????????? ??????????????? ????????? ?????? ????????? return 
    return answer;
}

console.log(solution([[0,0,0],[0,0,0],[0,0,0]]));
console.log(solution([[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,0],[0,0,0,1,0,0,0,1],[0,0,1,0,0,0,1,0],[0,1,0,0,0,1,0,0],[1,0,0,0,0,0,0,0]]));
console.log(solution([[0,0,1,0],[0,0,0,0],[0,1,0,1],[1,0,0,0]]));
console.log(solution([[0,0,0,0,0,0],[0,1,1,1,1,0],[0,0,1,0,0,0],[1,0,0,1,0,1],[0,1,0,0,0,1],[0,0,0,0,0,0]]));