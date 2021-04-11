const removeFromArray = function() {

    let args = [...arguments];
    let input = args.shift(); 

    for (let i=0; i < args.length; i++ ) {

        let rmxLocation = input.indexOf(args[i]);
        console.log(rmxLocation);

        if(rmxLocation < 0) {
            continue;
        } 
        
        input.splice(rmxLocation, 1);
        console.log(input);
       
       
    }
    
    return input;
    console.log(input);
}

module.exports = removeFromArray
