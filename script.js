// Countdown Timer Script
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// Dynamic target date for Christmas this year
const currentYear = new Date().getFullYear();
const targetDate = new Date(`December 25, ${currentYear} 00:00:00`).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        // Countdown reached zero
        daysEl.innerText = 0;
        hoursEl.innerText = 0;
        minutesEl.innerText = 0;
        secondsEl.innerText = 0;
       document.getElementById('countdown').innerText = "🎄 Merry Christmas! 🎄";
        clearInterval(interval);
        return;
    }

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update HTML
    daysEl.innerText = days;
    hoursEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;
}

// Update every second
const interval = setInterval(updateCountdown, 1000);
updateCountdown();

// Footer year update
document.getElementById('year').textContent = new Date().getFullYear();
