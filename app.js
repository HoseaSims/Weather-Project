const form = document.querySelector("form")
const h1 = document.querySelector("h1")
const temp = document.querySelector("h2")
const condition = document.querySelector("h3")
const body = $("body")
let bodyBackground;



    // Getting the time in hours and changing the inital background image

let date = new Date()
let hours = date.getHours()
console.log(hours);

if(hours >= 5 && hours <= 11 ){
    bodyBackground = "url('img/jonas-weckschmied--N_UwPdUs7E-unsplash.jpg')"
}
else if(hours >= 12 && hours <= 15){
    bodyBackground = "url('img/matt-jones-9CPAjGVB378-unsplash.jpg')"
}
else if(hours >= 16 && hours >= 19){
    bodyBackground = "url('img/bowen-chin-Hkq5xLbHjoY-unsplash.jpg')"
}
else if(hours <= 22 && hours >= 4){
    bodyBackground = "url('img/asoggetti-ILLq6afxocQ-unsplash.jpg')"
}

document.body.style.backgroundImage = bodyBackground;

    // Updating the location, Temperature, and Current Condition

const updateUI = (data) => {
    const cityInfo = data.cityInfo
    const weatherInfo = data.weatherInfo

    h1.innerText = cityInfo.EnglishName;
    temp.innerText = weatherInfo.Temperature.Imperial.Value + "°F";
    condition.innerText = weatherInfo.WeatherText;

    console.log(data);
    console.log(condition);

   

    switch (weatherInfo.WeatherText) {
        case 'Sunny':
        case 'Party Sunny':
        case 'Mostly Sunny':
          bodyBackground = "url('img/kumiko-shimizu-lNxMcE8mvIM-unsplash.jpg')";
          break;
      
        case 'Cloudy':
        case 'Mostly cloudy':
        case 'Overcast':
          case 'Partly cloudy':
          bodyBackground = "url('img/johny-goerend-z_SXPzTMKkc-unsplash.jpg')";
          break;

          case 'rainy':
            case 'Showers':
            case 'Drizzle':
            case 'Rain':

          bodyBackground = "url('img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg')"
          break;

          case 'Snow':
              bodyBackground = "url('img/jessica-fadel-SH4GNXNj1RA-unsplash.jpg')"
      } 
   
      document.body.style.backgroundImage = bodyBackground;


}

    // Gets API data from weather.js

const updateCity = async (storeInput) => {

    const cityInfo = await getLocation(storeInput)
    const weatherInfo = await getCondition(cityInfo.Key)

    console.log(weatherInfo);

    return {
        cityInfo,
        weatherInfo
    }

}

    // Allows user input on the form

form.addEventListener("submit", e =>{
    e.preventDefault();

    // gets and stores user input

    const storeInput = form.cityInput.value.trim()
    form.reset()
    
    form.cityInput.focus()
    

    updateCity(storeInput)
    .then(data => updateUI(data))
    .catch(err => console.log(err))
    
})

