const palindromes = function (x) {
    let compare ="";

    x = x.replace(/[^\w\']|_/g, "");
    x = x.toLowerCase();
    let length = x.length;
    length = length -1

    for (i = length; i >=0; i--){
   
    compare = compare + x[i];
}   
    if (compare === x){
        return true;
    }
    else {
        return false;
    }
   

};
// Do not edit below this line
module.exports = palindromes;

