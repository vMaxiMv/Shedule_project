const schedules = {
    ch1_fri: [
      {subject: "Физкультура", room: "5101", time: "9:00-10:30"},
      {subject: "ПЛИС лекция", room: "1201", time: "10:40-12:10"},
      {subject: "ПЛИС сем", room: "4338у", time: "12:50-14:20"},
      {subject: "ПЛИС лаба", room: "4338у", time: "14:30-16:00"},
      {subject: "ПЛИС лаба", room: "4338у", time: "16:10-17:40"},
    ],
    zn1_fri: [
      {subject: "Физкультура", room: "5101", time: "9:00-10:30"},
      {subject: "фтд Углубленный C", room: "4330", time: "10:40-12:10"},
      {subject: "фтд Углубленный C", room: "4330", time: "12:50-14:20"},
    ],
    // Другие расписания...
  };

  const section2 = document.querySelector('.section2')
const firstch= document.querySelector('.firstch')
const firstzn = document.querySelector('.firstzn')
const fri = document.querySelector('.fri')
let firstChClicked = false
let firstZnClicked = false

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
});

firstzn.addEventListener('click', () => {
  firstChClicked = false;
  firstZnClicked = true;
});

fri.addEventListener('click', () => {
  if (firstChClicked) {
    schedule_day(schedules.ch1_fri);
  } else if (firstZnClicked) {
    schedule_day(schedules.zn1_fri);
  }
});
