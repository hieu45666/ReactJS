async function f() {
    console.log("Async function");
    return Promise.resolve(20);
}

f();