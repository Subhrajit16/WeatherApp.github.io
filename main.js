let input = document.getElementById("input");
let searchBtn=document.querySelector(".srch-div")
let weatherType = document.querySelector(".weather-icon")

async function showWeather(city){
    const apiKey = "f6871926d4a5af5afa613a0d61ba0ae4";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    let responce = await fetch(url);
    let data = await responce.json();

    // console.log(responce.status)
    // console.log(data)
    document.querySelector(".weather-info").style.display = "block"
    if(responce.status == 404){
        document.querySelector(".weather-info").style.display = "none"
        document.querySelector(".error-div").classList.remove("display")
    }

    else{

        document.querySelector(".weather-info").style.display = "block"
        document.querySelector(".error-div").classList.add("display")
        document.querySelector(".container").classList.remove("cloud", "clear", "rain", "haze");
        switch (data.weather[0].main) {
            case 'Clouds':
                weatherType.src = "./images/cloud.png";
                document.querySelector(".container").classList.add("cloud")
                break;
            case 'Clear':
                weatherType.src = "./images/clear.png"
                document.querySelector(".container").classList.add("clear")
                break;
            case 'Rain':
                weatherType.src = "./images/rain.png"
                document.querySelector(".container").classList.add("rain")
                break;
            case 'Mist':
                weatherType.src = "./images/mist.png"
                document.querySelector(".container").classList.add("haze")
                break;
            case 'Haze':
                weatherType.src = "./images/haze.png"
                document.querySelector(".container").classList.add("haze")
                break;
            case 'Drizzle':
                weatherType.src = "./images/drizzle.png"
                document.querySelector(".container").classList.add("rain")
                break;
        
            
        }
    
        document.querySelector('.temp').childNodes[0].textContent= Math.round(data.main.temp)
        document.querySelector(".type").innerHTML=data.weather[0].main
        document.querySelector(".humidity-amount").innerHTML=data.main.humidity + " %"
        document.querySelector(".wind-speed").innerHTML=data.wind.speed + "km/h"
        document.querySelector('.city').childNodes[1].textContent= input.value
    }
}

searchBtn.addEventListener('click', ()=> {
   
    showWeather(input.value)
})

