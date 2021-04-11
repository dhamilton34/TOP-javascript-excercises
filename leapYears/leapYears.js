const leapYears = function(years) {

    let results;

   /* if(years%4 == 0) {

        results = true;
        
        if(years%100 == 0 && years%400 == 0)
        {
            results = true;
        } else {
            results = false;
        }
        
    } else {
        results = false;
    }*/

    if(years%4 === 0 && (years%100 !== 0 || years%400 == 0)) {
        results = true;
    } else {
        results = false;
    }

    return results;
}
   


module.exports = leapYears
