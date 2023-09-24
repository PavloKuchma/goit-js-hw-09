import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  datePicker: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let setIntervalFn = null;

refs.startBtn.disabled = true;

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] > options.defaultDate) {
      refs.startBtn.disabled = false;
    } else {
      Notiflix.Notify.failure('Please, choose any date and time in the future');
    }
  },
};

refs.startBtn.addEventListener('click', () => {
  setIntervalFn = setInterval(() => {
    let targetDate = new Date(refs.datePicker.value);
    const deltaTime = targetDate - Date.now();
    const time = convertMs(deltaTime);

    updateClockFace(time), 1000;

    if (deltaTime < 1000) {
      clearInterval(setIntervalFn);
    }
  });

  refs.startBtn.disabled = true;
  refs.datePicker.disabled = true;
});

flatpickr(refs.datePicker, options);

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}
