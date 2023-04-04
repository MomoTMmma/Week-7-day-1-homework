//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_names, dog_string){
    for(let i = 0 ; i <dog_names.length; i++){
        if(dog_string.includes(dog_names[i])){
            console.log(`${dog_names[i]} is in the string!`);
        }else {
            console.log(`${dog_names[i]} is not in the string`);
        }
    }
};

findWords(dog_names, dog_string);



//Call method here with parameters




//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i<arr.length; i++){
        if (i % 2 === 0){
            arr.splice(i, 1, "even");
        }
    }
};
replaceEvens(Given_arr);
console.log(typeof Given_arr);
console.log(Given_arr);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]






// Codewars Question 1

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


function simpleMultiplication(number) {
    if(number % 2 === 0){
      return number * 8;
    }else{
      return number * 9;
    }
}

console.log(simpleMultiplication(5))
console.log(simpleMultiplication(6))





// Codewars Question 2

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.


function repeat_str(n, s){
    result = s.repeat(n);
    return result
}

let n = 3;
let s = "Milo";
console.log(repeat_str(n, s));
