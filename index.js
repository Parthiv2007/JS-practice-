
// =========== {-- Task 1 and 2---}

/*
let a = 80;
 let b = 100;

 let sum = a + b ;

 let c = sum % 2 ;   

 if (c ==  0) {
    console.log("The sum is " + sum + " and it is Even");
 }else{
    console.log("The sum is " + sum + " and it is Odd");
 } 

 */
//------------------------------------------------------------------

/*

   // =========== Task 3 


let  a = [1,2,3,4,5,6,7,8,9];
console.log(a);

  a.map( (dbl) => console.log(dbl * 2));

  */

//------------------------------------------------------------------

//=========== Task 4 


/*
 let text = "Hello everyone" ;
 console.log(text);
 
  let x = text.replace("Hello everyone","how are You") ;

  console.log(x);
  */

//------------------------------------------------------------------



//=========== Task 5 

/*

let n = 5000;

for (i=1;i < n ; i++) {
    console.log(i);    
};

 */

//------------------------------------------------------------------


//=========== Task 6 

/*

let obj = {
    firstName : 'parthiv',
    lastName : 'patel',
}

let fullName = obj.firstName + " " + obj.lastName ;

console.log(fullName);

*/
//------------------------------------------------------------------

//=========== Task 7
/*
 
let  a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
 
let a2 = a.filter((b)=>{
    return b > 10
})  
console.log(a2);

 */

//==================================================================

// +++++++++ Task 8

/*

let value =  "parthiv";
const Palindrome = () => {
    let reverseval = value.toString().split("").reverse().join("");
    let comval = value.toString();
    console.log("reverse value of word or number is "+ reverseval);

    if(reverseval==comval){
        console.log("This is Palindrome")
    }else {
        console.log("This is not Palindrome ")
    }
};

Palindrome();

*/

//------------------------------------------------------------------

// +++++++++ Task 9
/* 
let arr = [1,2,[3,4,5,[6,7,[8,9,10]]]]

let flat = arr.flat(3);
console.log(flat); 
*/

//------------------------------------------------------------------

// +++++++++ Task 10
/*

let arr = [5,4,5,6,6,3,3,7,1,9];

let filt = arr.filter((val,ind,se) => {
return se.indexOf(val) == ind 
});

console.log(arr);
console.log(filt);
 
*/

//------------------------------------------------------------------

// +++++++++ Task 11 

/*

 function checkAnagram(str1,str2){
    let objstr1 = {};
    if (str1.length !== str2.length){
        return false
    }
    for (ch of str1){
        objstr1[ch] = (objstr1[ch] || 0) +1
    }
           
    for (ch of str2){
        
      if (!objstr1[ch]) {
        return false;
      }
        objstr1[ch]-- 
        
    }
    return true
 }

 console.log(checkAnagram("cat","act"));

 */

//------------------------------------------------------------------

// +++++++++ Task 12

/*

for (i = 1; i < 101; i++) {

 

   if (i % 3 == 0 && i % 5 == 0) {
       console.log("fizzBuzz");
   }else if (i % 3 == 0){
       console.log("fizz")
   }else if (i % 5 == 0){
       console.log("Buzz")
   }else {
       console.log(i);
   } 
}
   */

//------------------------------------------------------------------

// +++++++++ Task 13

/*

let obj = {
    FirstName: "Parthiv",
    LastName: "Patel",
    Age:18, 
}

let obj2 = {...obj};
obj2.FirstName = "Harsh"

console.log(obj);
console.log(obj2)

*/
//------------------------------------------------------------------

// +++++++++ Task 14

/*

setTimeout(() => {
    console.log("Hello World");
}, 2000);

*/

//------------------------------------------------------------------

// +++++++++ Task 15

/*

let grp = [
    {
        company: "BMW",
        model: "M4"
    },
    {
        company: "BMW",
        model: "M5"
    },
    {
        company: "Mercedes",
        model: "G-Wagon"
    },
    {
        company: "Mercedes",
        model: "Mercedes Benz"
    },
    {
        company: "NISSAN",
        model: "NISSAN GTR"
    },
]

const car = Object.groupBy(grp, cars => grp.company);

//console.log(grp);
console.log(car);

 */

//------------------------------------------------------------------

// +++++++++ Task 16 

/*
let first = new Promise((resolve, reject) => {
    let success = false;

    if(success){
            resolve("hello world");
    }else{
        reject("I am fine");
    }

});

console.log(first);

*/

//------------------------------------------------------------------

// +++++++++ Task 17 

/*

function ch(array,size){
    let chunked = [];

    for (let index = 0; index < array.length; index++) {
        
        chunked.push(array.slice(index,index + size));
    }
    return chunked;
}

 console.log(ch([1,2,3,4,5,6,7,8,9],2));
 
 */
