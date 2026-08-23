//reverse string:

let str = "Welcome";
let reverse = "";

for (let i = str.length-1;i>=0;i--) 
{ 
     reverse += str.charAt(i); 
}
console.log(`Reverse of ${str}: ${reverse}`); // outout: Reverse of Welcome: emocleW

// Palindrome
let str2 = String("madam").toLowerCase();
let palindrome = "";

for (let i = str2.length -1; i >= 0 ; i--) 
{
    palindrome += str2.charAt(i);   
}

if(palindrome === str2){
    console.log(`${str2} is palindrome`);
}
else{
    console.log(`${str2} is not palindrome`);
}