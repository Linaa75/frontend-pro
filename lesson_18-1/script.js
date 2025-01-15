class Timer {
    constructor(container) {
        this.container = container;

        this.timerDisplay = document.createElement("div");
        this.timerDisplay.classList.add("timer-display");
        this.timerDisplay.contentEditable = true;
        this.timerDisplay.textContent = "00:00";
        this.container.appendChild(this.timerDisplay);

        this.p = document.createElement("p");
        this.p.textContent = "Enter your time in the circle";
        this.container.appendChild(this.p);

        this.startButton = document.createElement("button");
        this.startButton.textContent = "Start Timer";
        this.container.appendChild(this.startButton);

        this.stopButton = document.createElement("button");
        this.stopButton.textContent = "Stop";
        this.container.appendChild(this.stopButton);

        this.removeButton = document.createElement("button");
        this.removeButton.textContent = "Remove";
        this.container.appendChild(this.removeButton);

        this.intervalId = null;
        this.timeLeft = 0;

        this.startButton.addEventListener("click", () => this.startTimer());
        this.stopButton.addEventListener("click", () => this.stopTimer());
        this.removeButton.addEventListener("click", () => this.removeTimer());

        this.timerDisplay.addEventListener("blur", () => this.updateTime());
        this.timerDisplay.addEventListener("input", () => this.colonCheck());
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
        const timeParts = this.timerDisplay.textContent.split(":");
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
        return new Promise((resolve, reject) => {
            if (this.timeLeft <= 0) {
                alert("Please enter a valid time");
                reject("Invalid time");
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
                    alert("Time's up!");
                    resolve("Time's up!");
                }
            }, 1000);
        });
    }

    stopTimer() {
        return new Promise((resolve) => {
            if (this.intervalId) {
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
            resolve("Timer stopped");
        });
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
        alert("Timer removed");
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
