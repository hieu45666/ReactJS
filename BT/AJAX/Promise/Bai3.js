let countValue = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
    reject("Promise rejected")
});

countValue.then(
    function successValue(result){
    console.log(result);
    }
)

.catch( 
    function errorValue(result){
    console.log(result);
    }
)