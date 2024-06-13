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
      };
      set (key, val) {
        let index = this.hash(key);
        let bucket = this.table[index];
        while (this.table[index] && this.table[index][0] !== key ) {
            index = (index+1) % this.size;
        }
        this.table[index] = [key,val]
      }
};




const table = new HashTable(10);
table.set("name","sahal");
table.set("mane","messi");
console.log(table)