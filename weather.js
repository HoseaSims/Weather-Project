const apiKey = "02PzVXhhRMeyZtLKJ9kTXObUiEbuc6Fh";


// Gets the city data

const getLocation = async (city) => {
    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`)
    const data = await response.json();
    console.log(data);
    return data[0];
}




// Gets the weather data

const getCondition = async (id) => {
    const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${apiKey}`)
    const data = await response.json();
    
    return data[0]
}

