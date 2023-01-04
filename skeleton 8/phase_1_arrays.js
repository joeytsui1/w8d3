Array.prototype.uniq = function() {
    let retObj = {}

    for (let i = 0; i < this.length; i++){
        retObj[this[i]] = "bob"
    }

    let retArr = Object.keys(retObj)
    for (let i = 0; i < retArr.length; i++) {
        retArr[i] = parseInt(retArr[i])
    }
    return retArr
}

// console.log("test")
// console.log([1, 2, 2, 3, 3, 3].uniq())

Array.prototype.twoSum = function() {
    let obj = {}
    let retArr = []

    for (let i = 0; i < this.length; i++) {
        obj[-this[i]] = i
        
        if (obj[this[i]] !== undefined) {
            debugger
            retArr.push([obj[this[i]], i])
        } 
    }
   return retArr
}
console.log([1, 2, -2, 3, -3, 4].twoSum())
