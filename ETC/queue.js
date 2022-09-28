/* 배열을 활용한 큐 구현 
class Queue {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        this.items.shift();
    }

    front() {
        return this.items[0];
    }

    back() {
        return this.items[this.items.length-1];
    }

    size() {
        return this.items.length;
    }

    empty() {
        return this.items.length === 0;
    }

    print() {
        console.log(this.items);
    }
}
*/

/* 배열을 활용하지 않은 큐 구현 #1
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.len = 0;
    }

    push(data) {
        const newNode = new Node(data);

        if (this.empty()) this.head = newNode;
        else this.tail.next = newNode;

        this.tail = newNode;

        this.len++;
    }

    pop() {
        if (!this.empty()) {
            this.head = this.head.next;
            this.len--;    
        }
    }

    front() {
        return this.head.data;
    }

    back() {
        return this.tail.data;
    }

    size() {
        return this.len;
    }

    empty() {
        return this.len === 0;
    }

    print() {
        let curNode = this.head;
        while (curNode) {
            process.stdout.write(curNode.data + " ");
            curNode = curNode.next;
        }
        console.log();
    }
}
*/

/* 배열을 활용하지 않은 큐 구현 #2 */
class Queue {
    constructor() {
        this.items = [];
        this.head = -1;
        this.tail = -1;
        this.len = 0;
    }

    push(item) {
        this.tail++;
        this.items[this.tail] = item;

        this.len++;
    }

    pop() {
        if (!this.empty()) {
            this.head++;
            this.items[this.head] = null;
            if (this.empty()) {
                this.head = -1;
                this.tail = -1;
            }
            this.len--;
        }
    }

    front() {
        return this.items[this.head+1];

    }   
    
    back() {
        return this.items[this.tail];
    }

    size() {
        return this.len;
    }

    empty() {
        return this.len === 0;
    }

    print() {
        for (let i=0; i<this.items.length; i++) {
            if (this.items[i] !== null) process.stdout.write(this.items[i] + " ");
        }
        console.log();
    }
}

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.print();
queue.pop();
queue.print();
console.log(queue.front());
console.log(queue.back());
console.log(queue.size());
console.log(queue.empty());
queue.pop();
queue.pop();
queue.pop();
console.log(queue.empty());