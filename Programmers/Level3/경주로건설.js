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
    
    // 위쪽 오른쪽 아래쪽 왼쪽
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
            // cf. 경주로는 상, 하, 좌, 우로 인접한 두 빈 칸을 연결하여 건설할 수 있음
            const nextRow = row + dr[k];
            const nextCol = col + dc[k];
            
            // cf. 0은 칸이 비어 있음을 1은 해당 칸이 벽으로 채워져 있음을 나타냄
            // cf. 벽이 있는 칸에는 경주로를 건설할 수 없음
            if (isOutOfRange(nextRow, nextCol) || board[nextRow][nextCol] === 1) continue;

            // cf. 건설 비용을 계산해 보니 직선 도로 하나를 만들 때는 100원이 소요되며 코너를 하나 만들 때는 500원이 추가로 듬
            let nextPrice = price;
            nextPrice += 100;
            if (dir % 2 === 0 && k % 2 === 1 || dir % 2 === 1 && k % 2 === 0) nextPrice += 500;
            
            if (!visited[nextRow][nextCol][k] || visited[nextRow][nextCol][k] >= nextPrice) {
                visited[nextRow][nextCol][k] = nextPrice;
                pq.enqueue(nextPrice, [nextRow, nextCol, k, nextPrice]);
            }
        }
    }
    
    // 경주로를 건설하는데 필요한 최소 비용을 return 
    return answer;
}

console.log(solution([[0,0,0],[0,0,0],[0,0,0]]));
console.log(solution([[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,0],[0,0,0,1,0,0,0,1],[0,0,1,0,0,0,1,0],[0,1,0,0,0,1,0,0],[1,0,0,0,0,0,0,0]]));
console.log(solution([[0,0,1,0],[0,0,0,0],[0,1,0,1],[1,0,0,0]]));
console.log(solution([[0,0,0,0,0,0],[0,1,1,1,1,0],[0,0,1,0,0,0],[1,0,0,1,0,1],[0,1,0,0,0,1],[0,0,0,0,0,0]]));