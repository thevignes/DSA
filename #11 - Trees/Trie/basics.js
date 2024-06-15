class Node {
  constructor() {
    this.children = {};
    this.isWordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToInsert = word[i];
      if (!(charToInsert in curr.children)) {
        curr.children[charToInsert] = new Node();
      }
      curr = curr.children[charToInsert];
    }
    curr.isWordEnd = true;
  }

  contains(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToFind = word[i];
      if (!(charToFind in curr.children)) {
        return false;
      }
      curr = curr.children[charToFind];
    }
    return curr.isWordEnd;
  }

  startsWithPrefix(prefix) {
    let curr = this.root;
    for (let i = 0; i < prefix.length; i++) {
      let charToFind = prefix[i];
      if (!(charToFind in curr.children)) {
        return false;
      }
      curr = curr.children[charToFind];
    }
    return true;
  };

  autocomplete(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToFind = word[i];
      if (!(charToFind in curr.children)) {
        return [];
      }
      curr = curr.children[charToFind];
    }
    const words = [];
    this.collectwords(curr, word, words);
    return words;
  }
  collectwords(root, prefix, words) {
    if (root.isWordEnd) {
       words.push(prefix);
    }
    for (let char in root.children) {
      this.collectwords(root.children[char], prefix + char, words);
    }
  }
}
const trie = new Trie();

trie.insert("apple");


console.log(trie.autocomplete("ap"));
