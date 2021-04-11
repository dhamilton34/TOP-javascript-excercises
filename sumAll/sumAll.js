const sumAll = function(x, y) {
    let startNum = 0;
    let endNum = 0;
    let finalNumber = 0;

    if(typeof(x) != 'number' || typeof(y) != 'number'){return "ERROR"};

    if(x < 0 || y < 0){return "ERROR"};
    
   /* if(x < y) {
        startNum = x;
        endNum = y;
    } else {
        startNum = y;
        endNum = x;
    }*/

    //ternary operator
    startNum = (x < y) ? x:y;
    endNum = (y > x) ? y:x;
    
    for (startNum; startNum <= endNum; startNum++ ) {
        
        finalNumber += startNum;
        //console.log(finalNumber);
    }

    return finalNumber;
}

module.exports = sumAll
