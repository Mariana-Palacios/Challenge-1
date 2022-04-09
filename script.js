// // https://meta-weather.vercel.app/static/img/weather/sn.svg

// // let date = new Date();
// // console.log(date.toLocaleDateString());
// console.log('hola')
const time__today = document.querySelector('#time__today')
const time__tomorrow = document.querySelector('#time__tomorrow')
const time__one = document.querySelector('#time__one')
const time__two = document.querySelector('#time__two')
const time__three = document.querySelector('#time__three')
const time__four = document.querySelector('#time__four')

// time__tomorrow.src = `https://meta-weather.vercel.app/static/img/weather/sn.svg`



const weatherImage = async(weather, image) => {
    const url = `https://meta-weather.vercel.app/static/img/weather/${weather}.svg`
    image.src = url
}

weatherImage('sn',time__today);
weatherImage('sn',time__tomorrow);
weatherImage('sn',time__one);
weatherImage('sn',time__two);
weatherImage('sn',time__three);
weatherImage('sn',time__four);
