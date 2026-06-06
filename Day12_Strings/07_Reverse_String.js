let str = "Welcome";

let reverse = "";

for (let i = str.length-1;i>=0;i--) 
{ 
     reverse += str.charAt(i); 
}
console.log(reverse); // outout: emocleW

let str2 = "oo";
let isPalindrome = "";
for (let i = str2.length -1; i >= 0 ; i--) {
    
    isPalindrome += str2.charAt(i);
    
}

if(isPalindrome === str2){
    console.log(`${str2} is palindrome`);
}
else{
    console.log(`${str2} is not palindrome`);
}