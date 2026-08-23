let retry = 0;

while(retry < 0){
    console.log(`retry count: ${retry}`);
    retry++;
}
// in above case condition retry < 0 will fail as 0 is not less than 0 
// so while loop will not execute at all and we will not get any output

// Now if we use same condition using do while loop 

do{
    console.log(`retry count: ${retry}`);
    retry++;
} while (retry < 0);

// in above do while loop output will be: retry count: 0, because do while loop will execue at least once

// so do will execute the below condition first
/*

{
    console.log(`retry count: ${retry}`);
    retry++;
}

*/

// and then it will check the while condition (retry < 0) and as this condition fails it will not execute the code again


let retry1 = 1;

do{
    console.log(`retry count: ${retry1}`);
    retry1++;
}while(retry1 < 3);