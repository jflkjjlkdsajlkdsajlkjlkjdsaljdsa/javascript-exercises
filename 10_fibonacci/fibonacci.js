const fibonacci = function(x) {
    x = parseInt(x);
    if (x > 0) {
        if (typeof x === "number") {
            let fibonacciArr = [1, 1];
            y = x - 2;
            let nextValue = 0;
            for (i = 0; i < y; i++) {
                z = i + 1;
                nextValue = fibonacciArr[i] + fibonacciArr[z];
                fibonacciArr.push(nextValue);
            }
            return fibonacciArr[x - 1];
        }
    } else if (x < 0) {
        return "OOPS"
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = fibonacci