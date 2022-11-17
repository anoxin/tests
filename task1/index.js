const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let timer;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => seconds => setInterval(() => {
	const hour = parseInt(seconds / 3600);
	const minute = parseInt((seconds % 3600) / 60);
	const secondsMod = seconds - parseInt(seconds / 60) * 60;
	timerEl.textContent = `${(hour < 10) ? "0" + hour : hour}: ${(minute < 10) ? "0" + minute : minute}: 
  ${(secondsMod < 10) ? "0" + secondsMod : secondsMod}`;
	if (seconds === 0) {
		buttonEl.textContent = "Start";
		clearInterval(timer);
	}
	seconds -= 1;
}, 1000);

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
	// Очистите input так, чтобы в значении
	// оставались только числа
	inputEl.value = inputEl.value.replace(/[^\d]/g, "");
});

buttonEl.addEventListener('click', () => {
	const seconds = Number(inputEl.value);
	if (buttonEl.textContent === "Start") {
		timer = animateTimer(seconds);
		buttonEl.textContent = "Stop";
	} else {
		clearInterval(timer);
		buttonEl.textContent = "Start";
		timerEl.textContent = "hh:mm:ss";
	}
	inputEl.value = '';
});