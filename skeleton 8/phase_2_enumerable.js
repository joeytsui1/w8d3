const NUMS = [1, 2, 3, 4, 5];

Array.prototype.myEach = function(cb){
    for(let i = 0; i < this.length; i++){
        cb(this[i])
    }
}

NUMS.myEach((num) => {
    console.log(`square of ${num} is ${num * num}`);
});


Array.prototype.myMap = function(cb) {
    let retArr = []

    this.myEach(function(ele){
        retArr.push(cb(ele))
    })

    return retArr
}

// console.log([1, 2, 3, 4, 5].myMap(function (num) {
//     return num * 2
// }))

Array.prototype.myReduce = function(cb, iVal) {
    if (iVal === undefined) {
        iVal = this.shift()
    }

    this.myEach(function(ele) {
        iVal = cb(iVal, ele)
    })
    return iVal
}

// console.log([1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// })); 