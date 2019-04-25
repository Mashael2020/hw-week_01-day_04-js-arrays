//Create a function that will get the sum of the numbers between 1 and n and return the answer 
const su = function(n){
	let sum = 0;
	for(let a = 0; a <= n ;a++){
		sum +=  a;
	}

	return sum;
}
____________________________________

let fmjh = function (num) {

    let sum = 0;
    
        for (i=1;i <= num ;i++) {
    
            if (i % 2===0){
    
        sum = sum + i;}}
    
    return (sum);}
    
fmjh(5);
    
///////////


let av = function (num) {

    let sum = 0;
    
        for (i=0 ; i < num.length ;i++ ) {
    
            sum = sum + num[i];}
    
    return (sum)/num.length;}
    
av ([1,2,3,4,5]);   


/////////////////////////////


//Create a function to reverse the letters in a word 
//reverse("caterpillar") // should return "rallipretac"

let mn =function (str) { 
    return str.splet('').reverse ().join('')





}

mn ("");



//Create a function that takes an array of words and combines them with a dash 
//addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"

const msh=function(m1)
{
let i=0;
for(i=0;i<=m1;++i)
{
    return (m1.join(" - "))
}

}

msh ();

//Function that will count up to a number and back down and return a string of the climb 
//countUpAndDown(3) // should return "1 2 3 2 1"


const sqns=function(cnt){
    for (let cnt = 0; cnt>= arr1.length;--cnt)
    do (                          )
    {
    
    }
    return ;
    }
1-






//Write a function that will tell you all of the words in an array that contain the letter `a` 
//wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']

excuse me i cant


//Write a function that will tell you all of the words in an array that contain a specified letter 
//wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']






//Function that returns the longest word in sentence 
//longestWord("The cat in the house") // should return "house"

function longestWord(string) {
    let str = string.split(” “);
    let  longest = 0;
    let  word = null;
   for (let i = 0; i < str.length; i++)
 {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
 }


//Function that returns the largest even number 
//largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"



function max_even(arra) {

    arra.sort((x, y) => y - x);
    
    for (var i = 0; i < arra.length; i++) {
      if (arra[i] % 2 == 0)
        return arra[i];
      }
    }




