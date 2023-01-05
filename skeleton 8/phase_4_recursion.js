function range(start, end) {
    if(start === end) return [end]

    let memR = range(start, end-1)
    memR.push(end)
    return memR
}

console.log(range(1,7))

function sumRec(arr){
    if(arr.length === 1) return arr[0]
    return arr[arr.length-1] + sumRec(arr.slice(0, arr.length-1))
}

console.log(sumRec([1,2,3,4]))

function exponent(base, exp) {
    if(exp === 0) return 1
    return base * exponent(base, exp-1)
}

console.log(exponent(2,3))

function fibonacci(n) {
    if (n < 3) return [1,1]
    preFibs = fibonacci(n-1)
    preFibs.push(preFibs[preFibs.length-2] + preFibs[preFibs.length-1])
    return preFibs
}

console.log(fibonacci(10))

function deepDup(arr) {
    
}