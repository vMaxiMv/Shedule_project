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
      {subject: "Электроника сем", room:"3210", time:"16:10-17:40"}
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




tue.addEventListener('click', () => {
  if (firstChClicked) {
    schedule_day(schedules.ch1_tue);
  } else if (firstZnClicked) {
    schedule_day(schedules.zn1_tue);
  }
    else if (secondChClicked){
    schedule_day(schedules.ch2_tue)
  }
    else if (secondZnClicked){
    schedule_day(schedules.zn2_tue)  
    }
});
wed.addEventListener('click', () => {
  if (firstChClicked) {
    schedule_day(schedules.ch1_wed);
  } else if (firstZnClicked) {
    schedule_day(schedules.zn1_wed);
  }
    else if (secondChClicked){
    schedule_day(schedules.ch2_wed)
  }
    else if (secondZnClicked){
    schedule_day(schedules.zn2_wed)  
    }
});
third.addEventListener('click', () => {
  if (firstChClicked) {
    schedule_day(schedules.ch1_third);
  } else if (firstZnClicked) {
    schedule_day(schedules.zn1_third);
  }
    else if (secondChClicked){
    schedule_day(schedules.ch2_third)
  }
    else if (secondZnClicked){
    schedule_day(schedules.zn2_third)  
    }
});
fri.addEventListener('click', () => {
  if (firstChClicked) {
    schedule_day(schedules.ch1_fri);
  } else if (firstZnClicked) {
    schedule_day(schedules.zn1_fri);
  }
    else if (secondChClicked){
    schedule_day(schedules.ch2_fri)
  }
    else if (secondZnClicked){
    schedule_day(schedules.zn2_fri)  
    }
});
sat.addEventListener('click', () => {
  if (firstChClicked) {
    schedule_day(schedules.ch1_sat);
  } else if (firstZnClicked) {
    schedule_day(schedules.zn1_sat);
  }
    else if (secondChClicked){
    schedule_day(schedules.ch2_sat)
  }
    else if (secondZnClicked){
    schedule_day(schedules.zn2_sat)  
    }
});
