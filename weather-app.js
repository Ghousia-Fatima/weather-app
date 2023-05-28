function display(name, weather, wind) {
   var newDiv = document.createElement('div')
    newDiv.id="main"

    var newh1 = document.createElement('h1')
    var newh2 = document.createElement('h2')
    var newh3 = document.createElement('h2')

    newh1.innerHTML = "city: "+ name;
    newh2.innerHTML = "weather " + weather;
    newh3.innerHTML = "wind: " + wind;

    document.querySelector('.dataArea').appendChild(newDiv)
    newDiv.appendChild(newh1)
    newDiv.appendChild(newh2)
    newDiv.appendChild(newh3)
}


let api_url=  `https://api.openweathermap.org/data/2.5/weather?units=metric&q=delhi&appid=863242cfb2b1d357e6093d9a4df19a4b`
 
 function weatherData(url){
     fetch(url)
     .then(res=>res.json())
     .then(res=>console.log(res))
     .catch(err=>console.log(err)) 
     display(data.name, data.weather[0], data.wind)
 
 }
 
 
 console.log(weatherData(api_url))