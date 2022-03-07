class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shiftItems(index) {
    //Completar
    for (let i = 0; i < this.length; i++) {
      if (i === index) {
        delete this.data[i];
      }
    }

    let tempArray = this.data;
    this.data = {};
    let count = 0;
    for (let i = 0; i < this.length; i++) {
      if (tempArray[i] !== undefined) {
        this.data[count] = tempArray[i];
        count++;
      }
    }
    this.length--;
  }

  deleteAtIndex(index) {
    //Completar
    let itemDeleted = this.data[index];
    this.shiftItems(index);
    return itemDeleted;
  }
}
