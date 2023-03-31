const schedules = {
    ch1_tue:[
      {subject: "Инж.граф лек", room:"1204", time:"9:00-10:30"},
      {subject: "ООП лек", room:"3102", time:"10:40-12:10"},
      {subject: "Тер.вер лек", room:"1201", time:"12:50-14:20"},
      {subject: "ТСПА лек", room:"1205", time:"14:30-16:00"}
    ],
    ch1_wed:[
      {subject: "Физкультура", room:"5101", time:"9:00-10:30"},
      {subject: "Тер.вер сем", room:"3230", time:"10:40-12:10"},
    ],
    ch1_third:[
      {subject: "Числаки лек", room:"1204", time:"9:00-10:30"},
      {subject: "Электроника лек", room:"1203", time:"10:40-12:10"},
      {subject: "ООП лаб", room:"4338y", time:"12:50-14:20"},
      {subject: "ООП лаб", room:"4338y", time:"14:30-16:00"},
      {subject: "Электроника сем", room:"3210", time:"16:10-17:40"}
    ],
    ch1_fri: [
      {subject: "Физкультура", room: "5101", time: "9:00-10:30"},
      {subject: "ПЛИС лекция", room: "1201", time: "10:40-12:10"},
      {subject: "ПЛИС сем", room: "4338у", time: "12:50-14:20"},
      {subject: "ПЛИС лаба", room: "4338у", time: "14:30-16:00"},
      {subject: "ПЛИС лаба", room: "4338у", time: "16:10-17:40"},
    ],
    ch1_sat:[
      {subject: "Выходной", room: "Дома", time: "24 часа"},
    ],
    zn1_tue:[
      {subject: "Инж.граф лек", room:"1204", time:"9:00-10:30"},
      {subject: "Окошечко", room:"????", time:"10:40-12:10"},
      {subject: "Тер.вер лек", room:"1201", time:"12:50-14:20"},
      {subject: "ООП сем", room:"3107", time:"14:30-16:00"},
      {subject: "ТСПА сем", room: "3220", time: "16:10-17:40"}
    ],
    zn1_wed:[
      {subject: "Физкультура", room:"5101", time:"9:00-10:30"},
      {subject: "Тер.вер сем", room:"3230", time:"10:40-12:10"},
      {subject: "Инж.граф сем", room: "3105", time: "12:50-14:20"},
      {subject: "Инж.граф сем", room: "3105", time: "14:30-16:00"}
    ],
    zn1_third:[
      {subject: "Числаки лек", room:"1204", time:"9:00-10:30"},
      {subject: "Электроника лек", room:"1203", time:"10:40-12:10"},
      {subject: "ООП лаб", room:"4338y", time:"12:50-14:20"},
      {subject: "ООП лаб", room:"4338y", time:"14:30-16:00"},
    ],
    zn1_fri: [
      {subject: "Физкультура", room: "5101", time: "9:00-10:30"},
      {subject: "Углубленный C", room: "4330", time: "10:40-12:10"},
      {subject: "Углубленный C", room: "4330", time: "12:50-14:20"},
    ],
    zn1_sat:[
      {subject: "Электроника лаб", room:"3201", time:"9:00-10:30"},
      {subject: "Электроника лаб", room:"3201", time:"10:40-12:10"},
      {subject: "Числаки сем", room:"3220", time:"12:50-14:20"},
      {subject: "Числаки лаб", room:"3118", time:"14:30-16:00"}
    ],
    ch2_tue:[
      {subject: "Инж.граф лек", room:"1204", time:"9:00-10:30"},
      {subject: "ООП лек", room:"3102", time:"10:40-12:10"},
      {subject: "Тер.вер лек", room:"1201", time:"12:50-14:20"},
      {subject: "ТСПА лек", room:"1205", time:"14:30-16:00"}
    ],
    ch2_wed:[
      {subject: "Физкультура", room:"5101", time:"9:00-10:30"},
      {subject: "Тер.вер сем", room:"3230", time:"10:40-12:10"},
      {subject: "Инж.граф сем", room: "3105", time: "12:50-14:20"},
      {subject: "Инж.граф сем", room: "3105", time: "14:30-16:00"}
    ],
    ch2_third:[
      {subject: "Числаки лек", room:"1204", time:"9:00-10:30"},
      {subject: "Электроника лек", room:"1203", time:"10:40-12:10"},
      {subject: "ООП лаб", room:"4338y", time:"12:50-14:20"},
      {subject: "ООП лаб", room:"4338y", time:"14:30-16:00"},
      {subject: "Электроника сем", room:"3210", time:"16:10-17:40"}
    ],
    ch2_fri: [
      {subject: "Физкультура", room: "5101", time: "9:00-10:30"},
      {subject: "ПЛИС лекция", room: "1201", time: "10:40-12:10"},
      {subject: "ПЛИС сем", room: "4338у", time: "12:50-14:20"},
      {subject: "ПЛИС лаба", room: "4338у", time: "14:30-16:00"},
      {subject: "ПЛИС лаба", room: "4338у", time: "16:10-17:40"},
    ],
    ch2_sat:[
      {subject: "Выходной", room: "Дома", time: "24 часа"},
    ],
    zn2_tue:[
      {subject: "Инж.граф лек", room:"1204", time:"9:00-10:30"},
      {subject: "Окошечко", room:"????", time:"10:40-12:10"},
      {subject: "Тер.вер лек", room:"1201", time:"12:50-14:20"},
      {subject: "ООП сем", room:"3107", time:"14:30-16:00"},
      {subject: "ТСПА сем", room: "3220", time: "16:10-17:40"}
    ],
    zn2_wed:[
      {subject: "Физкультура", room:"5101", time:"9:00-10:30"},
      {subject: "Тер.вер сем", room:"3230", time:"10:40-12:10"},
      {subject: "Инж.граф сем", room: "3105", time: "12:50-14:20"},
      {subject: "Инж.граф сем", room: "3105", time: "14:30-16:00"}
    ],
    zn2_third:[
      {subject: "Числаки лек", room:"1204", time:"9:00-10:30"},
      {subject: "Электроника лек", room:"1203", time:"10:40-12:10"},
    ],
    zn2_fri: [
      {subject: "Физкультура", room: "5101", time: "9:00-10:30"},
      {subject: "Углубленный C", room: "4330", time: "10:40-12:10"},
      {subject: "Углубленный C", room: "4330", time: "12:50-14:20"}
    ],
    zn2_sat:[
      {subject: "Электроника лаб", room:"3201", time:"9:00-10:30"},
      {subject: "Электроника лаб", room:"3201", time:"10:40-12:10"},
      {subject: "Числаки сем", room:"3220", time:"12:50-14:20"},
      {subject: "Числаки лаб", room:"3118", time:"14:30-16:00"}
    ],
  };

const section2 = document.querySelector('.section2')
const firstch= document.querySelector('.firstch')
const firstzn = document.querySelector('.firstzn')
const secondch = document.querySelector('.secondch')
const secondzn = document.querySelector('.secondzn')
const tue = document.querySelector('.tue')
const wed = document.querySelector('.wed')
const third = document.querySelector('.third')
const fri = document.querySelector('.fri')
const sat = document.querySelector('.sat')
const week_day = document.querySelector(".week_day")
const example = document.querySelector('.example')
let firstChClicked = false
let firstZnClicked = false
let secondChClicked = false
let secondZnClicked = false

const renderSchedule = (schedule) => {
  const rows = schedule.map(({ subject, room, time }) => {
    return `
      <div class="col">${subject} (${room})<span class="time">${time}</span></div>
    `;
  });
  return `
    <div class="row justify-content-center text-center pt-3 flex-column">
      ${rows.join("")}
    </div>
  `;
};

const schedule_day = (schedule) => {
  section2.innerHTML = renderSchedule(schedule);
};

firstch.addEventListener('click', () => {
  firstChClicked = true;
  firstZnClicked = false;
  secondChClicked = false;
  secondZnClicked = false;
 
});

firstzn.addEventListener('click', () => {
  firstChClicked = false;
  firstZnClicked = true;
  secondChClicked = false;
  secondZnClicked = false;

});
secondch.addEventListener('click', () => {
  firstChClicked = false;
  firstZnClicked = false;
  secondChClicked = true;
  secondZnClicked = false;
 
});
secondzn.addEventListener('click', () => {
  firstChClicked = false;
  firstZnClicked = false;
  secondChClicked = false;
  secondZnClicked = true;
 
});
const buttons = [
  { button: firstch, color: "rgb(13,110,253)" },
  { button: firstzn, color: "rgb(13,110,253)" },
  { button: secondch, color: "rgb(13,110,253)" },
  { button: secondzn, color: "rgb(13,110,253)" },
];

buttons.forEach((btn) => {
  btn.button.addEventListener("click", () => {
    buttons.forEach((b) => (b.button.style.backgroundColor = b.color));
    btn.button.style.backgroundColor = "rgb(33,23,139)";
  });
});

tue.addEventListener('click', () => {
  const static_tue=()=>{week_day.innerHTML = "Вторник"}
  if (firstChClicked) {
    schedule_day(schedules.ch1_tue);
    static_tue()
  } else if (firstZnClicked) {
    schedule_day(schedules.zn1_tue);
    static_tue()
  }
    else if (secondChClicked){
    schedule_day(schedules.ch2_tue)
    static_tue()
  }
    else if (secondZnClicked){
    schedule_day(schedules.zn2_tue)  
    static_tue()
    }
});
wed.addEventListener('click', () => {
  const static_wed=()=>{week_day.innerHTML = "Среда"}
  if (firstChClicked) {
    schedule_day(schedules.ch1_wed);
    static_wed()
  } else if (firstZnClicked) {
    schedule_day(schedules.zn1_wed);
    static_wed()
  }
    else if (secondChClicked){
    schedule_day(schedules.ch2_wed)
    ()
  }
    else if (secondZnClicked){
    schedule_day(schedules.zn2_wed)  
    static_wed()
    }
});
third.addEventListener('click', () => {
  const static_third=()=>{week_day.innerHTML = "Четверг"}
  if (firstChClicked) {
    schedule_day(schedules.ch1_third);
    static_third()
  } else if (firstZnClicked) {
    schedule_day(schedules.zn1_third);
    static_third()
  }
    else if (secondChClicked){
    schedule_day(schedules.ch2_third)
    static_third()
  }
    else if (secondZnClicked){
    schedule_day(schedules.zn2_third)  
    static_third()
    }
});
fri.addEventListener('click', () => {
  const static_fri=()=>{week_day.innerHTML = "Пятница"}
  if (firstChClicked) {
    schedule_day(schedules.ch1_fri);
    static_fri()
  } else if (firstZnClicked) {
    schedule_day(schedules.zn1_fri);
    static_fri()
  }
    else if (secondChClicked){
    schedule_day(schedules.ch2_fri)
    static_fri()
  }
    else if (secondZnClicked){
    schedule_day(schedules.zn2_fri)  
    static_fri()
    }
});
sat.addEventListener('click', () => {
  const static_sat=()=>week_day.innerHTML = "Суббота"
  if (firstChClicked) {
    schedule_day(schedules.ch1_sat);
    static_sat()
  } else if (firstZnClicked) {
    schedule_day(schedules.zn1_sat);
    static_sat()
  }
    else if (secondChClicked){
    schedule_day(schedules.ch2_sat)
    static_sat()
  }
    else if (secondZnClicked){
    schedule_day(schedules.zn2_sat)  
    static_sat()
    }
});

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const add_btn = document.querySelector('.add_btn')
const form = document.querySelector('.form')
const input = document.querySelector('input')
const listGroup = document.querySelector('.list-group')
const empty = document.querySelector('.empty')
const goal = document.querySelector('.goal')

form.addEventListener('submit',addHomeTask)
function addHomeTask (event){
  event.preventDefault()
  const inputVal = input.value
  const inputPunkt = `<li class="list-group-items d-flex justify-content-between align-items-center mt-5">
  <span class="goal">${inputVal}</span>
  <div class="buttons_ok_no">
      <button type="button" data-action="done" class="btn_action btn_ok">
          <img src="/img/galochka.svg" alt="Ok" width="36" height="42">
      </button>
      <button type="button" data-action="delete" class="btn_action btn_del">
          <img src="/img/krestic_2.0.svg" alt="delete" width="36" height="42">
      </button>
  </div>
</li>`
  document.querySelector('.list-group').insertAdjacentHTML("beforeend", inputPunkt)
  form.reset()
  input.focus()

  if(listGroup.children.length > 1){
    empty.classList.add('none')
  }
}
listGroup.addEventListener('click',deleteHomeTask)
function deleteHomeTask(event){
  if(event.target.dataset.action == 'delete'){
    event.target.closest('li').remove()
  }
  // listGroup.children.length==0 ? empty.classList.remove('none') : 
  if (listGroup.children.length == 1) empty.classList.remove('none')
}
listGroup.addEventListener('click', readyHomeTask)
function readyHomeTask(event){
if(event.target.dataset.action =='done'){
// const rrr = event.target.closest('li').classList.add('ready')
// rrr.toggle('done')
const listItem = event.target.closest('li')
listItem.classList.toggle('btn_ok--done')
}
}


