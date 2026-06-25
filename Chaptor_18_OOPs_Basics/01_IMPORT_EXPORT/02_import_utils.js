import { baseURL as URL          , formatTestName        } from "../EXPORTED_UTILS/02_export_utils";
import { baseUrl as bul_testutil , formatUpperCaseString } from "../EXPORTED_UTILS/01_export_testutils";


console.log(URL);                       // https://api.statging.com
console.log(bul_testutil);              // https://vwo.com
console.log(formatTestName("login"));   // TC_LOGIN