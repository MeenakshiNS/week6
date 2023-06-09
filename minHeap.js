//study note(min heap)
class Heap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  remove() {
    if (this.heap.length === 0) {
      throw new Error('Heap is empty');
    }

    const root = this.heap[0];
    const lastValue = this.heap.pop();
    
    if (this.heap.length > 0) {
      this.heap[0] = lastValue;
      this.heapifyDown();
    }

    return root;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);

      if (this.heap[currentIndex] >= this.heap[parentIndex]) {
        break;
      }

      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  heapifyDown() {
    let currentIndex = 0;

    while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);
      let smallerChildIndex = leftChildIndex;

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
      ) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[currentIndex] <= this.heap[smallerChildIndex]) {
        break;
      }

      this.swap(currentIndex, smallerChildIndex);
      currentIndex = smallerChildIndex;
    }
  }
}

const minHeap = new Heap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(17);
minHeap.insert(8);
minHeap.insert(13);

console.log(minHeap.heap);

const root = minHeap.remove();
console.log(root);

console.log(minHeap.heap);
