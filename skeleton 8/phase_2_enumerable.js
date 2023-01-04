Array.prototype.myEach = function(cb){
    for(let i = 0; i < this.length; i++){
        cb(this[i])
    }
}

let bob = [1,2,3,4,5].myEach(function(num){
    console.log(num * num)
})  

Array.prototype.myMap = function(cb) {
    let retArr = []

    this.myEach(function(ele){
        retArr.push(cb(ele))
    })

    return retArr
}

console.log([1, 2, 3, 4, 5].myMap(function (num) {
    return num * 2
}))

Array.prototype.myReduce = function(cb, iVal) {
    if (iVal === undefined) {
        iVal = this.shift()
    }

    this.myEach(function(ele) {
        iVal = cb(iVal, ele)
    })
    return iVal
}

console.log([1, 2, 3].myReduce(function (acc, el) {
    return acc + el;
})); 