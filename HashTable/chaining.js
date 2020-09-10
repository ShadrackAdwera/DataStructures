//The basic HashTable has a flaw ==> collision of Hash values, in a limited
//space new hash values overwrite existing hash values.
//SOLUTION: Chaining solves this flaw by storing multiple values
//under a single hash thus removing the possibility of losing values


class HashTable {
    constructor() {
        this.size = 16
        this.buckets = Array(16).fill(null).map(()=>[])
    }

    hash(key) {
        const hash = 0
        for(const str of key) {
            hash += str.charCodeAt(0)
        }
        return hash % this.size
    }

    set(key, value) {
        const keyHash = this.hash(key)
        const bucketArray = this.buckets[keyHash]
        const existingElement = bucketArray.find((element)=>element.key===key)

        if(existingElement) {
            existingElement.value = value
        } else {
            bucketArray.push({key: key, value: value})
        }
    }

    get(key) {
        const keyHash = this.hash(key)
        const bucketArray = this.buckets[keyHash]
        const foundElement = bucketArray.find(elem=>elem.key===key)
        return foundElement
    }
    showInfo() {
        for(const key in this.buckets) {
            if(this.buckets[key] !==null) {
                return key + ' fuxx with ==> ' + this.buckets[key]
            }
        }
    }
}