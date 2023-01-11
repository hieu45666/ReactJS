function getImageJson(key) {
    return new Promise(function (resolve){
        axios.get(`https://api.giphy.com/v1/gifs/search?q=${key}&api_key=q6w0BebcFxKaWhQ5zGNqYpyCmduLufVS`)

        .then(function (json) {
            resolve(json.data.data[0]);
        })
    })
}

async function getImage(){
    let key = document.getElementById('key').value;
    getImageJson(key).then(result => {
        console.log(result.images.downsized.url);
        console.log(key);
        let imgSrc = result.images.downsized.url;
        let img1 = document.getElementById('result1');
        let img2 = document.getElementById('result2');
        let img3 = document.getElementById('result3');
        
        if (img1.getAttribute('src') == null) {
            img1.setAttribute('src',imgSrc);
        }
        else {
            if (img2.getAttribute('src') == null) {
                img2.setAttribute('src',imgSrc);
            }
            else {
                if (img3.getAttribute('src') == null) {
                    img3.setAttribute('src',imgSrc);
                }
            }
        }
        
    })
}
