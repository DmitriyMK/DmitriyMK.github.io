var app = {

	displayTimer: function() {
		zero.setMilliseconds(zero.getMilliseconds() +4 );
		var milliseconds = zero.getMilliseconds();

		if ( milliseconds == 996) {
			seconds++;
		} 
		if (seconds >= 60) {
			seconds = 0;
			minutes++;
		} 
		if (minutes >= 60) {
			minutes = 0;
			hours++;
		} 
		if (seconds < 10) {
			secondsNumber = '0' + seconds;
		} else {
			secondsNumber = seconds;
		}
		if (minutes < 10) {
			minutesNumber = '0' + minutes;
		} else {
			minutesNumber = minutes;
		}
		if (hours < 10) {
			hoursNumber = '0' + hours;
		} else {
			hoursNumber = hours;
		}

		time = hoursNumber + ' : ' + minutesNumber + ' : ' + secondsNumber + ' : ' + milliseconds;
		timeTable.innerHTML = time;
	},

	startTimer: function() {
		startButton.classList.add ('btn', 'btn-primary');
		startButton.innerHTML = 'Pause';
		timer = setInterval (app.displayTimer, 4);
		startButton.removeEventListener ("click", app.startTimer);
		startButton.addEventListener ("click", app.pauseTimer);
	},

	pauseTimer: function() {
		startButton.classList.add ('btn-success');
		startButton.innerHTML = 'Continue';
		clearInterval(timer);
		timeTable.innerHTML = time;
		startButton.removeEventListener ("click", app.pauseTimer);
		startButton.addEventListener ("click", app.startTimer);
	},

	resetTimer: function() {
		startButton.innerHTML = 'Start';
		timeTable.innerHTML = '00 : 00 : 00 : 000';
		clearInterval(timer);
		startButton.removeEventListener ("click", app.pauseTimer);
		startButton.addEventListener ("click", app.startTimer);
		resetButton.addEventListener ("click", app.resetTimer);
		zero = new Date(0, 0);
		seconds = 0;
		minutes = 0;
		hours = 0;
	}
};


var wrapper = document.createElement ('div');
document.body.appendChild (wrapper);
wrapper.classList.add ('wrapper', 'col-md-12');

var timeTable = document.createElement ('h1');
wrapper.appendChild (timeTable);
timeTable.innerHTML = '00 : 00 : 00 : 000';
timeTable.setAttribute ('type', 'button');

var startButton = document.createElement ('button');
wrapper.appendChild (startButton);
startButton.classList.add ('btn', 'btn-success', 'col-md-1');
startButton.setAttribute ('type', 'button');
startButton.innerHTML = 'Start';
startButton.addEventListener ("click", app.startTimer());

var resetButton = document.createElement ('button');
wrapper.appendChild (resetButton);
resetButton.classList.add ('btn', 'btn-danger', 'col-md-1');
resetButton.setAttribute ('type', 'button');
resetButton.innerHTML = 'Reset';
resetButton.addEventListener ("click", app.resetTimer());