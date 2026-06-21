import logger1 from "../EXPORTED_UTILS/03_export_logger.js";
// in 03_logger.js we have exported function logger1 but this is a default export so we need to import this function without curly braces

import { logger2 } from "../EXPORTED_UTILS/03_export_logger.js";
// similarly function logger2 is exported but it is not a default export so we need to import it with curly braces

logger1("Starting the Test Cases");     // [LOG]Starting the Test Cases