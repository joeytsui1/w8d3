Array.prototype.bubbleSort = function() {
    let sorted = false;
    while (!sorted){
        sorted = true;
        for(let i = 0; i < this.length - 1; i++){
            if (this[i] >  this[i+1]){
                idunno = this[i];
                this[i] = this[i+1];
                this[i+1] = idunno;
                sorted = false;
            }
        }
    }
    return this
}

console.log([10,9,8,7,6,5,4,3,2,1].bubbleSort())

String.prototype.substrings = function() {
    let retArray = []
    for(let i = 0; i < this.length; i++){
        for(let j = i; j < this.length; j++){
            retArray.push(this.slice(i, j+1))
        }
    }
    return retArray
}

console.log("joey".substrings())