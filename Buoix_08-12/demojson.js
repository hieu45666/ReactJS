function getImageJson(key) {
    return new Promise(function (resolve){
        axios.get("https://api.giphy.com/v1/gifs/search?q=${key}&api_key=q6w0BebcFxKaWhQ5zGNqYpyCmduLufVS")

        .then(function (json) {
            resolve(json.data.data[0]);
        })
    })
}

async function getImage(){
    let key = document.getElementById('key').value;
    getImageJson(key).then(result => {
        console.log(result.url);
        let imgSrc = result.url;
        let img = document.getElementById('result');
        img.src = imgSrc;
    })
}
