const hourElem = document.querySelector('.hour')
const minElem = document.querySelector('.min')
const secElem = document.querySelector('.sec')
const msElem = document.querySelector('.ms')

const start = document.querySelector('.button__start')
const pause = document.querySelector('.button__pause')
const stop = document.querySelector('.button__stop')
const clear = document.querySelector('.button__clear')

const results = document.querySelector('.results')

let hour = 0,
	min = 0,
	sec = 0,
	ms = 0,
	interval,
	counter = 0,
	disabled = true

start.addEventListener('click', () => {
	clearInterval(interval)
	pause.disabled = false
	stop.disabled = false
	clear.disabled = false
	interval = setInterval(startTimer, 10);
})

pause.addEventListener('click', () => {
	clearInterval(interval)
})

stop.addEventListener('click', () => {
	clearInterval(interval)
	counter++
	const block = document.createElement('p')
	block.innerText = `Результат ${counter}: ${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}:${ms < 10 ? '0' + ms : ms}`
	results.append(block)
	clearFields()
	pause.disabled = true
	stop.disabled = true
})

clear.addEventListener('click', () => {
	clearInterval(interval)
	clearFields()
	counter = 0
	pause.disabled = true
	stop.disabled = true
	clear.disabled = true
	results.querySelectorAll('p').forEach(e => e.remove())
})

function startTimer() {
	ms++

	// миллисекунды
	if (ms < 10) {
		msElem.innerText = '0' + ms
	}
	if (ms > 9) {
		msElem.innerText = ms
	}
	if (ms > 99) {
		sec++
		secElem.innerText = '0' + sec
		ms = 0
		msElem.innerText = '0' + ms
	}

	// секунды
	if (sec < 10) {
		secElem.innerText = '0' + sec
	}
	if (sec > 9) {
		secElem.innerText = sec
	}
	if (sec > 59) {
		min++
		minElem.innerText = '0' + min
		sec = 0
		secElem.innerText = '0' + sec
	}

	// минуты
	if (min < 10) {
		minElem.innerText = '0' + min
	}
	if (min > 9) {
		minElem.innerText = min
	}
	if (min > 59) {
		hour++
		hourElem.innerText = '0' + hour
		min = 0
		minElem.innerText = '0' + min
	}

	// часы
	if (hour < 10) {
		hourElem.innerText = '0' + hour
	}
	if (hour > 9) {
		hourElem.innerText = hour
	}
}

function clearFields() {
	hour = 0
	min = 0
	sec = 0
	ms = 0
	msElem.innerText = '00'
	secElem.innerText = '00'
	minElem.innerText = '00'
	hourElem.innerText = '00'
}

function disabledBtn() {
	if (disabled = true) {
		pause.disabled = true
		stop.disabled = true
		clear.disabled = true
	}
}
disabledBtn()



