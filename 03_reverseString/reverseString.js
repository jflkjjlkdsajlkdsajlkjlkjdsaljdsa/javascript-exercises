const reverseString = function(string) {
    let array = string.split("");
    array.reverse();
    array = array.join("");
    return array;
    
};

// Do not edit below this line
module.exports = reverseString;
