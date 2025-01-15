class Timer {
    constructor(container) {
        this.container = container;
        this.timerDisplay = this.createElement('div', 'timer-display', '00:00');
        this.timerDisplay.contentEditable = true;

        this.p = this.createElement('p', '', 'Enter your time in the circle');
        this.startButton = this.createElement('button', '', 'Start Timer');
        this.stopButton = this.createElement('button', '', 'Stop');
        this.removeButton = this.createElement('button', '', 'Remove');

        this.container.appendChild(this.timerDisplay);
        this.container.appendChild(this.p);
        this.container.appendChild(this.startButton);
        this.container.appendChild(this.stopButton);
        this.container.appendChild(this.removeButton);

        this.intervalId = null;
        this.timeLeft = 0;

        this.startButton.addEventListener("click", () => this.startTimer());
        this.stopButton.addEventListener("click", () => this.stopTimer());
        this.removeButton.addEventListener("click", () => this.removeTimer());
        this.timerDisplay.addEventListener("blur", () => this.updateTime());
        this.timerDisplay.addEventListener("input", () => this.colonCheck());
    }

    createElement(tag, className = '', textContent = '') {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        element.textContent = textContent;
        return element;
    }

    updateDisplay() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;

        this.timerDisplay.textContent = `${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
    }

    formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    updateTime() {
        const timeParts = this.timerDisplay.textContent.split(":").map(Number);
        const minutes = parseInt(timeParts[0]);
        const seconds = parseInt(timeParts[1]);

        if (!isNaN(minutes) && !isNaN(seconds) && minutes >= 0 && seconds >= 0) {
            this.timeLeft = minutes * 60 + seconds;
        } else {
            this.timerDisplay.textContent = "00:00";
            this.timeLeft = 0;
        }
    }

    startTimer() {
        if (this.timeLeft <= 0) {
            console.log("Please enter a valid time");
            return;
        }

        this.updateDisplay();
        this.p.style.display = "none";

        if (this.intervalId) {
            clearInterval(this.intervalId);
        }

        this.intervalId = setInterval(() => {
            this.timeLeft--;
            this.updateDisplay();

            if (this.timeLeft <= 0) {
                clearInterval(this.intervalId);
                this.timerDisplay.textContent = "00:00";
                console.log("Time's up!");
            }
        }, 1000);
    }

    stopTimer() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    removeTimer() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }

        this.container.removeChild(this.timerDisplay);
        this.container.removeChild(this.p);
        this.container.removeChild(this.startButton);
        this.container.removeChild(this.stopButton);
        this.container.removeChild(this.removeButton);
        console.log("Timer removed");
    }

    colonCheck() {
        const timeText = this.timerDisplay.textContent;
        if (timeText.length === 2 && !timeText.includes(":")) {
            this.timerDisplay.textContent = `0${timeText[0]}:${timeText[1]}`;
        }
    }
}

document.getElementById("btnCreate").addEventListener("click", () => {
    const timersList = document.getElementById("timers-list");
    const newTimerContainer = document.createElement("div");
    timersList.appendChild(newTimerContainer);
    
    new Timer(newTimerContainer);
});
