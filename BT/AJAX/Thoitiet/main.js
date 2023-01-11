function getWeather() {
    return new Promise(function (resolve) {
        axios.get("http://api.openweathermap.org/data/2.5/forecast?lat=21.1167&lon=105.88339&appid=18b70536531779f639d8ca70e4881f20&unit=metric")
        
        .then(function (json) {
            resolve(json.data.list[0]);
        })
    })
}

async function getWeatherHaNoi(){
    let lat = 21.1167;
    let lon =  105.8833;
    let result = document.getElementById('result');
    getWeather().then(result => {
        console.log(result);
        let temp = document.getElementById('temp');
        temp.innerHTML = Math.floor(result.main.temp - 273);
        let humd = document.getElementById('humd');
        humd.innerHTML = result.main.humidity;
        let desc = document.getElementById('desc');
        desc.innerHTML = result.weather[0].description;
        let speed = document.getElementById('speed');
        speed.innerHTML = result.wind.speed;
        let deg = document.getElementById('deg');
        deg.innerHTML = result.wind.deg;

    })
}

getWeatherHaNoi();