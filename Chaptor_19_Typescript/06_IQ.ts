let responseCode:number[] = [200,201,404,500,302,403];

function getFailedCodes(codes:number[]):number[]{
    return codes.filter( (code:number):boolean=> code>=400 )
}

console.log("All codes: " , responseCode);                      //  All codes:  [ 200, 201, 404, 500, 302, 403 ]
console.log("Failed codes: ", getFailedCodes(responseCode) );   //  Failed codes:  [ 404, 500, 403 ]