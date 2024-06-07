class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, val) {
    let index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, index]];
    } else {
      const samkeKeyItem = bucket.find((item) => item[0] === key);
      if (samkeKeyItem) {
        samkeKeyItem[1] = val;
      } else {
        bucket.push([key, val]);
      }
    }
  }
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const samkeKeyItem = bucket.find((item) => item[0] === key);
      if (samkeKeyItem) {
        return samkeKeyItem[1];
      }
    }
    return undefined;
  }
  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined;
    const bucket = this.table[index];
    if (bucket) {
      const samkeKeyItem = bucket.find((item) => item[0] === key);
      if (samkeKeyItem) {
        bucket.splice(bucket.indexOf(samkeKeyItem), 1);
      }
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const ht = new HashTable(10);
ht.set("name", "Bruce");
ht.set("age", 25);
ht.set("mane", "sahal")

ht.display()
