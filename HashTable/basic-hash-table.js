class HashTable {
    constructor() {
        this.size = 1000
        this.buckets = Array(1000).fill(null)
    }

    hash(key) {
        let hash = 0
        for(const val of key) {
            hash+=val.charCodeAt(0)
        }
        return hash % this.size
    }

    set(key,value) {
        const keyHash = this.hash(key)
        this.buckets[keyHash] = value 
    }

    get(key) {
        const keyHash = this.hash(key)
        return this.buckets[keyHash]
    }

    showInfo() {
        for(const key in this.buckets) {
            if(this.buckets[key] !==null) {
                return key + ' ==> ' + this.buckets[key]
            }
        }
    }
}


const word = 'ribashongilogasheshiakili'

//SOLUTION 1 : Using JavaScript Built in Object
const repeatedChar = (str) => {
    const table = new HashTable()
    const table = { }

    for(const st of str) {
        if(table[str]) {
            return str
        }
        table[str] = 1
    }
}

//SOLUTION 2 : Using custom HashTable
const repeatedChar = (str) => {
    const table = new HashTable()

    for(const st of str) {
        if(table.get(st)) {
            return st
        }
        table.set(st, 1)
    }
}