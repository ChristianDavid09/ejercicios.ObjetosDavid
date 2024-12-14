
Array.prototype.mediaAritmetica=function() {
    return this.reduce(function(total, num) {
        return total + num;
    }, 0);
}



let a = [1,2,3,4,5];

console.log(a.mediaAritmetica());
