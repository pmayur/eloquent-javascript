/* Minimum
The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function
min that takes two arguments and returns their minimum. */

function findMin( val1, val2){
    if(val1 < val2){
        return val1
    } else if (val2 < val1) {
        return val2
    } else return "Equal";
}

console.log(findMin(2, 2));