const reverseString = function(word) {

    /*const revWord = Array.from(word).reverse();

    const reversed = revWord.join("");
    
    return reversed;*/

    return word.split('').reverse().join('');
}

module.exports = reverseString
