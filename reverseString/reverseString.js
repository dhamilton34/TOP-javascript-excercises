const reverseString = function(word) {

    const revWord = Array.from(word).reverse();

    const reversed = revWord.join("");
    
    return reversed;
}

module.exports = reverseString
