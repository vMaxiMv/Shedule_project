const section2 = document.querySelector('.section2')
const elementToHide = document.querySelector(".example")
const ch1_fri = `
                <div class="row justify-content-center text-center pt-3 flex-column">
                <div class="col"> Физкультура (5101)<span class="time">9:00-10:30</span></div>
                <div class="col"> ПЛИС лекция (1201)<span class="time">10:40-12:10</span></div>
                <div class="col">ПЛИС сем  (4338у)<span class="time">12:50-14:20</span></span></div>
                <div class="col"> ПЛИС лаба (4338у)<span class="time">14:30-16:00</span></div>
                <div class="col"> ПЛИС лаба (4338у)<span class="time">16:10-17:40</span></div>
                </div> `

// const ch1_third = `
//                 <div class="row justify-content-center text-center pt-3 flex-column">
//                 <div class="col"> Числаки лекция (1204)<span class="time">9:00-10:30</span></div>
//                 <div class="col"> Электроника лекция (1203)<span class="time">10:40-12:10</span></div>
//                 <div class="col">ООП лаба (4338у)<span class="time">12:50-14:20</span></span></div>
//                 <div class="col"> ООП лаба (4338у)<span class="time">14:30-16:00</span></div>
//                 <div class="col"> Электроника сем (3210)<span class="time">10:40-12:10</span></div>
//                 </div> `

const zn1_fri = `
                <div class="row justify-content-center text-center pt-3 flex-column">
                <div class="col"> Физкультура (5101)<span class="time">9:00-10:30</span></div>
                <div class="col"> фтд Углубленный C (4330)<span class="time">10:40-12:10</span></div>
                <div class="col"> фтд Углубленный C (4330)<span class="time">12:50-14:20</span></span></div>
                </div> `


const firstch= document.querySelector('.firstch')
const firstzn = document.querySelector('.firstzn')
const fri = document.querySelector('.fri')
let firstChClicked = false

const shedule_day = (shedule1,shedule2)=>{
    if(firstChClicked) 
    section2.innerHTML = shedule1
    else if (firstZnClicked)
    section2.innerHTML = shedule2
}
firstch.addEventListener('click',()=>{
    firstZnClicked = !firstZnClicked
    firstChClicked = true})

let firstZnClicked = false
firstzn.addEventListener('click',()=>{
    firstChClicked = !firstChClicked
    firstZnClicked = true
})

fri.addEventListener('click', ()=>{shedule_day(ch1_fri,zn1_fri)})




// const third = document.querySelector('.third')
// third.addEventListener('click', ()=>{shedule_day(ch1_third)})







