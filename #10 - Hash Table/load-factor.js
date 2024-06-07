class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
    this.count = 0;
  }
  hash(key) {
    let hash = 0;
    if (typeof key === "string") {
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
    } else {
      hash += key;
    }

    return hash % this.size;
  }
  set(key, val) {
    const loadfactor = this.count / this.size;
    console.log(loadfactor,"ddd")
    if (loadfactor > 0.7) {
      this.resize();
    }
    let index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, val]];
    } else {
      let isSameKey = bucket.find((item) => item[0] === key);
      if (isSameKey) {
        isSameKey[1] = val;
      } else {
        bucket.push([key, val]);
      }
    }
    this.count++;
  }
  get(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) return "no value associated with this key";
    if (bucket.length === 1) {
      return bucket[0][1];
    } else {
      let isSameKey = bucket.find((item) => item[0] === key);
      return isSameKey[1];
    }
  }
  remove(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (bucket && bucket.length === 1) {
        this.count--;
        this.table[index] = undefined;
    }
    let isSameKey = bucket?.find((item) => item[0] === key);
    if (isSameKey) {
      bucket.splice(bucket?.indexOf(isSameKey), 1);
    }
    this.count--;
  }
  display() {
    for (let i = 0; i < this.size; i++) {
      console.log(i, this.table[i]);
    }
  }
  resize() {
    const oldTable = this.table;
    this.size = this.size * 2;
    this.table = new Array(this.size);
    this.count = 0; 

    for (let i = 0; i < oldTable.length; i++) {
      if (oldTable[i]) {
        for (let j = 0; j < oldTable[i].length; j++) {
          this.set(oldTable[i][j][0], oldTable[i][j][1]);
        }
      }
    }
  }
}

const table = new HashTable(10);
table.set(1, "sahal");
table.set(2, "messi");
table.set(3, "bruce");
table.set(4, "cristiano");
table.set(5, "tommy");
table.set(6, "shelby");
table.set(7, "cillian");
table.set(8, "romero");
table.set(1, "romero");



console.log(table.count);
table.display();
