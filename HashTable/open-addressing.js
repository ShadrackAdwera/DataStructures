class HashTable {
  constructor() {
    this.size = 1000;
    this.buckets = Array(1000).fill(null);
  }

  hash(key) {
    let hash = 0;
    for (const val of key) {
      hash += val.charCodeAt(0);
    }
    return hash % this.size;
  }

  set(key, value) {
    let keyHash = this.hash(key);
    if (this.buckets[keyHash] === null) {
      this.buckets[keyHash] = { key: key, value: value };
    } else {
      while (this.buckets[keyHash] !== null) {
        keyHash++;
      }
      this.buckets[keyHash] = { key: key, value: value };
    }
  }

  get(key) {
    const keyHash = this.hash(key);
    for(let i = keyHash; i<this.buckets.length; i++) {
        if(!this.buckets[i]) {
            continue
        }
        if(this.buckets[i].key ===key) {
            return this.buckets[i].value
        }
    }
    return undefined
  }

  showInfo() {
    for (const key in this.buckets) {
      if (this.buckets[key] !== null) {
        return key + ' ==> ' + this.buckets[key];
      }
    }
  }
}
