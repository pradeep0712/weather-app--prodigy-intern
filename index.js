const apikey = "8a132ba0f16deac38e786c8387ef07b1"
const apiid = "https://api.openweathermap.org/data/2.5/weather?units=metric&"
/* const apiid = "https://api.openweathermap.org/data/2.5/weather?&units=metric" */


const button = document.querySelector("button")
const place = document.getElementById("pla")
const celcius = document.getElementById("cel")
const windspeed = document.getElementById("wspeed")
const humidity = document.getElementById("humid")
const logoimg = document.getElementById("logoimg")
const overlap = document.querySelector(".overlap")

  overlap.addEventListener("mouseover", () => {
/*     overlap.style='clip-path: inset(30% 0 0 0)'

     overlap.innerHTML='Search'
*/
overlap.style='opacity: 0'




button.addEventListener('click',initialize)
 
function initialize()
{
    
    const cityname = document.querySelector("input").value    
    weather(cityname) 

}
async function weather(city)
{

    const response = await fetch(apiid +`q=${city}` +`&appid=${apikey}`)
    var data = await response.json()
    console.log(data)


    const temp = data.main.temp
    const name = data.name
    const wind = data.wind.speed
    const humids = data.main.humidity

    place.innerHTML = `${name}`
    celcius.innerHTML = `${Math.round(temp)}°c`
    windspeed.innerHTML = `${Math.round(wind)}km/h`
    humidity.innerHTML = `${humids}%`


    if (parseInt(temp) < 10)
    {
        logoimg.src = "https://i.im.ge/2024/03/07/8pdf8J.snow.png"
         
    }
    else if (parseInt(temp) > 10 && parseInt(temp)<=19)
    {
        logoimg.src = "https://i.im.ge/2024/03/07/8pq1kp.rain.png"
    }
    else if (parseInt(temp) <=25 && parseInt(temp) >19)
    {
        logoimg.src = "https://i.im.ge/2024/03/07/8pqD3W.clouds.png"
    }
    else
    {
        logoimg.src = "https://i.im.ge/2024/03/07/8pqhtc.clear.png"
    }


}
}); 