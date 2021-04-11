const repeatString = function(word, number) {

    let finalString = "";

    if(number < 0){
        
        return 'ERROR'
    } else {

        for(let i=0; i < number; i++) {
            finalString += word;
        }

        return finalString;
    }
}

module.exports = repeatString
