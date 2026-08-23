let s1 = "silent";
let s2 = "listen";

console.log(s1.split("")); // output: [ 's', 'i', 'l', 'e', 'n', 't' ]

if ( s1.split('').sort().join() === s2.split('').sort().join() )
{
    console.log('String is anagram')
}
else{
     console.log('String is not anagram');
}

// output: String is anagram