let element: unknown = {
    tagName: "button",
    testContent: "submit",
    id: "submit-btn",
    disabled: false
}

// now above object variable "element" is of type unknown

interface elementI {
    tagName: string;
    testContent: string;
    id: string;
    disabled: boolean;
}

// now usually we first create a interface and then we create object to which we can assign a type of that interface
// but here we have object but with unknown type, so we can use "as" keyword to assign the type of interface to that object

let button = element as elementI

// in above code we assigned button variable a object which we created with unknown type
// but using as keyword we assigned that object as elementI interface type
// so now variable button is of type elementI and we can access all the properties of that interface using button variable

console.log("Tag: ", button.tagName);
console.log("Text: ", button.testContent);
console.log("ID: ", button.id);
console.log("Disabled: ", button.disabled);