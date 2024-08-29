let time1;
let time2;
let activeClock = 1;
let interval;

const time1Display = document.getElementById('time1');
const time2Display = document.getElementById('time2');
const clock1 = document.getElementById('clock1');
const clock2 = document.getElementById('clock2');
const setupScreen = document.getElementById('setupScreen');
const chessClock = document.getElementById('chessClock');
const startButton = document.getElementById('startButton');
const minutesInput = document.getElementById('minutes');

function updateTime(clock, time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    clock.textContent = formattedTime;
}

function tick() {
    if (activeClock === 1) {
        time1--;
        updateTime(time1Display, time1);
        if (time1 === 0) clearInterval(interval);
    } else {
        time2--;
        updateTime(time2Display, time2);
        if (time2 === 0) clearInterval(interval);
    }
}

function switchClock(clickedClock) {
    if (activeClock !== clickedClock) return;

    activeClock = activeClock === 1 ? 2 : 1;

    if (activeClock === 1) {
        clock1.classList.remove('inactive');
        clock2.classList.add('inactive');
    } else {
        clock1.classList.add('inactive');
        clock2.classList.remove('inactive');
    }

    clearInterval(interval);
    interval = setInterval(tick, 1000);
}

startButton.addEventListener('click', () => {
    const minutes = parseInt(minutesInput.value);
    time1 = minutes * 60;
    time2 = minutes * 60;
    updateTime(time1Display, time1);
    updateTime(time2Display, time2);
    setupScreen.style.display = 'none';
    chessClock.style.display = 'flex';
    interval = setInterval(tick, 1000);
    clock1.classList.remove('inactive');
    clock2.classList.add('inactive');
});
