const getTheTitles = function(myArray) {
    x = [];
    for (i = 0; i< myArray.length; i++){
        x.push(myArray[i]["title"]);
    }
;
    return x;
};

// Do not edit below this line
module.exports = getTheTitles;
