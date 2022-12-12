const findTheOldest = function(myArray) {
     x = [];
     let c =[];
     let a;
     let d = myArray;
     console.log(myArray.length)
     console.log(typeof myArray[2].yearOfDeath)
     for (i = 0; i< myArray.length ; i++){
        if (typeof myArray[i].yearOfDeath === 'undefined'){
            a = new Date().getFullYear() 
        }
        else {
            a = myArray[i].yearOfDeath;
        }

        let b = myArray[i]["yearOfBirth"];
        let c = a-b; 
        x.push(c); 
     }
     let max = Math.max(...x);
     let index = x.indexOf(max);
     let result =  d[index];
return result;    

};

// Do not edit below this line
module.exports = findTheOldest;
