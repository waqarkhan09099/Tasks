let day = document.getElementById('day')
let time = document.getElementById('time')
let date = document.getElementById('date')
let triangle = document.getElementById('triangle')
let rotate = document.getElementById('rotate')
let leap = document.getElementById('year')
let userNumber = Number(document.getElementById('userNumber').value)
let sundayfinder = document.getElementById('sundayfinder')
let placeNumber = document.getElementById('randomNumber')
let dateObj = new Date()
const week = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let word = ['S', 'a', 'y', 'l', 'a', 'n', 'i']

setInterval(() => {
    time.innerText = new Date().toLocaleTimeString()
}, 1000)

day.innerText = week[dateObj.getDay()]

date.innerText = dateObj.toLocaleDateString()

let s = (5 + 6 + 7) / 2;

let area = Math.sqrt(s * ((s - 5) * (s - 6) * (s - 7)));
triangle.innerText = area.toFixed(2)

let reverseWord = '';
let pop;
for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i]
}

let pullchar = reverseWord.substr(-1)

rotate.innerHTML = `
        <h4>${reverseWord}======><h4>
        <h4>   last Character:-   ${pullchar}<h4>
`

const leapYear = (year) => {
    for (j = 1947; j !== year; j++) {
        if (j / 1000 === 2) {
            leap.innerText = j
            break
        }

    }

}

leapYear(Number(dateObj.getUTCFullYear()))

// const januarysundayfinder=(num)=>{
//     for(){

//     }
// }

let randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber)
let chance = 10
for (let k = 0; k !== chance; k++) {
    if (randomNumber === userNumber) {
        placeNumber.innerText = "you gues Right Number You Won!"
        break
    }

    else {       
        chance--
        placeNumber.innerText = `you have ${chance} chances `

    }
}