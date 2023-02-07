function cypher(string){                        //Creates a function to execute the encoding
    let arr = string.split("")                  
    let arr2 = []                //Empty array for output to be added later
    for (i of arr){
        let num = i.charCodeAt()             //for of loop to change the numbers to their ascii codes
        if ((num >= 65 && num <= 75) || (num >= 97 && num <= 107)) {        //As the letters are cyclical the letters A to K add 15 to the ascii number
            num+=15
            arr2.push(String.fromCharCode(num))                     //Revert ascii code back to a letter and add to arr2
        }
        else if ((num >= 76 && num <= 90) || (num>= 108 && num <= 122)) {       //letters L to Z subtract 11 to create the cycle
            num-=11
            arr2.push(String.fromCharCode(num))                     //Revert ascii code back to a letter and add to arr2
        }
        else {
            arr2.push(String.fromCharCode(num))                         //Any characters not effected (special characters) also added to arr2
        }
    }
    return arr2.join("")        //Join array to a string
}


let input = prompt("Please enter a sentence you would like encoded")
let codedString = cypher(input)             //use function on user input
console.log(`Original message: ${input}

Encoded message: ${codedString}`)           //Output encoded string