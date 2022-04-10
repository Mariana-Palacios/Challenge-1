// get the day 
let date = new Date()

let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()

let today = `/${year}/${month}/${day}/`
// console.log(`/${year}/${month}/${day}/`)


// information of the weather
const time__today = document.querySelector('#time__today')
const today_humidity = document.querySelector('#humidity')
const today_wind = document.querySelector('#wind')
const today_visibility = document.querySelector('#visibility')
const today_pressure = document.querySelector('#pressure')

// tomorrow
const time__tomorrow = document.querySelector('#time__tomorrow')

// one
const time__one = document.querySelector('#time__one')

// two
const time__two = document.querySelector('#time__two')

// three
const time__three = document.querySelector('#time__three')

// four
const time__four = document.querySelector('#time__four')
// 
let woeid = '44418' 


// time__tomorrow.src = `https://meta-weather.vercel.app/static/img/weather/sn.svg`


const weatherImage = (weather, image ) => {
    const url = `https://meta-weather.vercel.app/static/img/weather/${weather}.svg`
    image.src = url
}

const weatherInformation = async(woeidUser , humidity , wind , visibility, pressure, todayImg) => {
    const url = `https://meta-weather.vercel.app/api/location/${woeidUser}${today}`
    const responseApi = await fetch(url)
    const weather = await responseApi.json()
    console.log(weather[0]['humidity'])
    humidity.innerHTML = weather[0]['humidity']
    wind.innerHTML = Math.trunc(weather[0]['wind_speed'])
    visibility.innerHTML = weather[0]['visibility'].toFixed(1)
    pressure.innerHTML = Math.trunc(weather[0]['air_pressure'])
    weatherImage(weather[0]['weather_state_abbr'],todayImg);
    console.log('si funciono')
}


weatherInformation(woeid, today_humidity, today_wind, today_visibility, today_pressure, time__today)
// weatherImage('sn',time__today);
weatherImage('sn',time__tomorrow);
weatherImage('sn',time__one);
weatherImage('sn',time__two);
weatherImage('sn',time__three);
weatherImage('sn',time__four);

weatherInformation(woeid)