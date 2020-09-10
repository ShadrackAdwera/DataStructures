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
        let keyHash = this.hash(key)
        if(this.buckets[keyHash]===null) {
            this.buckets[keyHash] = value
        } else {
            while(this.buckets[keyHash] !==null) {
                keyHash++
            }
        }
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
