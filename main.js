const apik = "63a90ae96d390ec37d6c1252f5a86e1a";

function convertion(val) {
    return (val - 273).toFixed(3);
}

const btn = document.querySelector('#add');
const city = document.querySelector('#cityoutput');
const temp = document.querySelector('#temp');
const description = document.querySelector('#description');
const wind = document.querySelector('#wind');
const inputvalue = document.querySelector('#cityinput');

btn.addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&appid=${apik}`)
        .then(res => res.json())
        .then(data => {
            const nameval = data.name;
            const descrip = data.weather[0].description;
            const tempature = data.main.temp;
            const wndspeed = data.wind.speed;

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`;
            description.innerHTML = `Sky Conditions: <span>${descrip}</span>`;
            wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>`;
        })
        .catch(err => alert('You entered the wrong city name'));
});
