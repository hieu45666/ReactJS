async function h() {
    console.log("Async function.");
    return Promise.resolve(33);
}

h().then(function (success){
    console.log(success);
})