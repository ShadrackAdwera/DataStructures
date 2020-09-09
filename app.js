//Find the first occurrence of a character in a String

//SOLUTION 1 : Using loops

const word = 'ribashongilogasheshiakili'

const findRepeated = (str) => {
    for(let i =0; i<str.length; i++) {
        for(let j = i+1; j<=str.length; j++) {
            if(str[i]===str[j]) {
                return str[i]
            }
        }
    }
}

//Time Complexity : O(n^2)

//SOLUTION 2: Using Objects / Hashtable

const repeatedChar = (str) => {
    const strObj = {}
    for(const char of str) {
        if(strObj[char]) {
            return char
        }
        strObj[char] = 1
    }
}

//Time Complexity : O(n)

console.log(repeatedChar(word))