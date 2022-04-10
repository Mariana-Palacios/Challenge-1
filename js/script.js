// get the day 
let date = new Date()

const aside__button = document.querySelector('.aside__button');

const isActive=()=> {
    aside__button.classList.toggle("is-active");
}

// true = celsius ; false = faren
let celsius = true
let fahrenheit = false

const degrees__c = document.querySelector('#degrees__c')
const degrees__f = document.querySelector('#degrees__f')

const changeTemperature=(option)=> {
    if(option == 'celsius' && celsius == true){
        celsius = true;
        fahrenheit = false;
        console.log('celsius')
    }else if(option == 'celsius' && celsius == false){
        celsius = true;
        fahrenheit = false;
        console.log('celsius')
    }else if(option == 'fahrenheit' && fahrenheit == true){
        fahrenheit = true;
        celsius = false;
        console.log('fahrenheit')
    }else{
        fahrenheit = true;
        celsius = false;
        console.log('fahrenheit')
    }
}


// obtener dias siguientes respecto a la fecha actual
function sumarDias(date, dias){
    date.setDate(date.getDate() + dias);
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let today = `/${year}/${month}/${day}/`
    return today;
}

console.log(sumarDias(new Date(), 0))
let today = sumarDias(date, 0)

// information of the weather
const time__today = document.querySelector('#time__today')
const today_humidity = document.querySelector('#humidity')
const today_wind = document.querySelector('#wind')
const today_visibility = document.querySelector('#visibility')
const today_pressure = document.querySelector('#pressure')

// tomorrow
const time__tomorrow = document.querySelector('#time__tomorrow')
const ligth__tomorrow = document.querySelector('#ligth__tomorrow')
const dark__tomorrow = document.querySelector('#dark__tomorrow')

// one
const time__one = document.querySelector('#time__one')
const ligth__one = document.querySelector('#ligth__one')
const dark__one = document.querySelector('#dark__one')

// two
const time__two = document.querySelector('#time__two')
const ligth__two = document.querySelector('#ligth__two')
const dark__two = document.querySelector('#dark__two')

// three
const time__three = document.querySelector('#time__three')
const ligth__three = document.querySelector('#ligth__three')
const dark__three = document.querySelector('#dark__three')

// four
const time__four = document.querySelector('#time__four')
const ligth__four = document.querySelector('#ligth__four')
const dark__four = document.querySelector('#dark__four')

// 
let woeid = '44418' 

// let daysImgId = [time__today, time__tomorrow, time__one, time__two, time__three, time__four] 


const weatherImage = (weather, image ) => {
    const url = `https://meta-weather.vercel.app/static/img/weather/${weather}.svg`
    image.src = url
}

const weatherInformation = async(woeidUser , humidity , wind , visibility, pressure, todayImg) => {
    const url = `https://meta-weather.vercel.app/api/location/${woeidUser}${today}`
    const responseApi = await fetch(url)
    const weather = await responseApi.json()

    // adding today values
    humidity.innerHTML = weather[0]['humidity']
    wind.innerHTML = Math.trunc(weather[0]['wind_speed'])
    visibility.innerHTML = weather[0]['visibility'].toFixed(1)
    pressure.innerHTML = Math.trunc(weather[0]['air_pressure'])
    weatherImage(weather[0]['weather_state_abbr'],todayImg);

}

const weatherImages = async(woeidUser, todayImg, minTem, maxTem, n) =>{
    const sumDay = sumarDias(date, n)
    const url = `https://meta-weather.vercel.app/api/location/${woeidUser}${sumDay}`
    const responseApi = await fetch(url)
    const weather = await responseApi.json()
    weatherImage(weather[0]['weather_state_abbr'],todayImg);
    if(celsius==true){
        minTem.innerHTML = `${Math.trunc(weather[0]['min_temp'])}ºC`
        maxTem.innerHTML = `${Math.trunc(weather[0]['max_temp'])}ºC`
    }else{
        minTem.innerHTML = `${Math.trunc(weather[0]['min_temp'])+32}ºF`
        maxTem.innerHTML = `${Math.trunc(weather[0]['max_temp'])+32}ºF`
    }
}

weatherInformation(woeid, today_humidity, today_wind, today_visibility, today_pressure, time__today)

weatherImages(woeid, time__tomorrow, ligth__tomorrow, dark__tomorrow, 1,)
weatherImages(woeid, time__one, ligth__one, dark__one, 2)
weatherImages(woeid, time__two, ligth__two, dark__two, 3)
weatherImages(woeid, time__three, ligth__three, dark__three, 1)
weatherImages(woeid, time__four, ligth__four, dark__four, 2)


weatherInformation(woeid)