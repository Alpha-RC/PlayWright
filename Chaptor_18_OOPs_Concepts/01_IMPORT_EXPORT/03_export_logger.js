
export default function logger1(msg){
    console.log("[LOG]" +  msg);
}

export function logger2(msg){
    console.log("[LOG]" +  msg);
}


// note we can export only one default per file

// we cannot export a function with default