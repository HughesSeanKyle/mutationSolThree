/* 
Basic Algorithm Scripting: MutationsPassed
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

//Solution Three
function mutation([ target, test ], i = 0) {    //1
  target = target.toLowerCase();                //2
  test = test.toLowerCase();                    //3
  return i >= test.length                       //4
    ? true                                      //5
    : !target.includes(test[i])                 //6
      ? false                                   //7
      : mutation([ target, test ], i + 1);      //8
}

  
console.log(mutation(["Alien", "line"]));


//Notes
/*
//1
This function takes in two arguments:
  Arg1 = an array with destructured variables assigned to each argument respectively
  Arg2 = Index initialized at 0

//2&&//3
Setting both test and target to lowercase.

//4 - Base case - When i >= test.length (4, "line"). 
        This recursive call will run for the length of the test word (4 iterations)
          The base case is i >= test.length
//5&&//6
The includes() method determines whether one string may be found within another string, returning true or false as appropriate.
Source - [https://devdocs.io/javascript/global_objects/string/includes]


True will be returned once all characters in the test argument passes the test of the includes method. This method assesses if the target argument does in fact include each character of the test argument. 

//7&&//8
While each character in the test argument is being assessed false will be returned until the base case is reached. True will only be returned if:
  All the characters are present in target &&
  The base case has been reached. 
 
*/