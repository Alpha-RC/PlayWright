import { baseUrl , formatUpperCaseString } from "../EXPORTED_UTILS/01_export_testutils.js";    //  as we have exported baseUrl and formatUpperCaseString 
                                                                                        //  from 01_testutils.js, we can import them in other files

console.log(baseUrl);  // https://vwo.com

let result = formatUpperCaseString("login case");
console.log(result); // LOGIN CASE