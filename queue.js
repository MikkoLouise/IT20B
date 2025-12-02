class Queue {
    constructor() {
        this.data = {};
        this.frontIndex = 0;
        this.rearIndex = -1;
    }

    enqueue(element) {
        this.rearIndex++;
        this.data[this.rearIndex] = element;
    }

    traverse() {
        let output = "";
        for (let i = this.frontIndex; i <= this.rearIndex; i++) {
            output += this.data[i] + " ";
        }
        return output;
    }

    is_empty() {
        return this.rearIndex < this.frontIndex;
    }

    front() {
        if (!this.is_empty()) {
            return this.data[this.frontIndex];
        }
        return null;
    }

    size() {
        return this.rearIndex - this.frontIndex + 1;
    }

    dequeue() {
        if (this.is_empty()) return null;

        const value = this.data[this.frontIndex];
        delete this.data[this.frontIndex];
        this.frontIndex++;
        return value;
    }
};

    //
    let queue1 = new Queue();
console.log(queue1.is_empty());
queue1.enqueue(4);
console.log("The current queue size is: " + queue1.size());
queue1.enqueue(2);
console.log("The current queue size is: " + queue1.size());
queue1.enqueue(3);
console.log("The current queue size is: " + queue1.size());
console.log(queue1.dequeue() + " has been dequeued, the new front is: " + queue1.front());