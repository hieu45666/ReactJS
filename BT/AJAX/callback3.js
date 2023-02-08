function greet(name, myFunction) {
    console.log("Hello world");
    myFunction(name);
}

function sayName(name) {
    console.log(`Hello ${name}`);
}

setTimeout(greet,2000,'Hiếu',sayName);
setTimeout(greet("Hiếu",sayName()),2000);