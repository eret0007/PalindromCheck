function palindrom (pal ) {
     let newString = pal.split("")
     let stringLength = newString.length
     let half = Math.round(stringLength / 2)
    for (let i = 0;  i < half ; i++ ) {
        if (newString[ i ] !== newString[stringLength - 1 - i]  ) {
            alert("ITS NOT A PALINDROME")
            break }  
         else {
            alert("Its a PALINDROME!!")
            break}
    }
     
}


let string = prompt("type a word you wanna get checked if is a palindrome")

palindrom(string)



