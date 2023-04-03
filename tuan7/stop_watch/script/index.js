(function () {

    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const startBtn = $('#start-btn');
    const stopBtn = $('#stop-btn');
    const resetBtn = $('#reset-btn');

    class StopWatch {
        #intervalId = null;

        constructor (selectors) {
            this.hours = $(selectors.hours);
            this.minutes = $(selectors.minutes);
            this.second = $(selectors.second);
        }
        #getSecond() {
            return Number(this.second.innerText);
        }
        #getMinutes() {
            return Number(this.minutes.innerText);
        }
        #getHours() {
            return Number(this.hours.innerText);
        }
        #setSecond(second) {
            if (second < 10) {
                this.second.innerText = `0${second}`;
            } else {
                this.second.innerText = second;
            }
        }
        #setMinutes(minutes) {
            if (minutes < 10) {
                this.minutes.innerText = `0${minutes}`;
            } else {
                this.minutes.innerText = minutes;
            }
        }
        #setHours(hours) {
            if (hours < 10) {
                this.hours.innerText = `0${hours}`;
            } else {
                this.hours.innerText = hours;
            }
        }
        start () {
            this.#intervalId = setInterval(() => {
                let currentSecond = this.#getSecond() + 1;
                let currentMinutes = this.#getMinutes();
                let currentHours = this.#getHours();

                if (currentSecond === 60) {
                    currentSecond = 0;
                    currentMinutes++;
                }

                if (currentMinutes >= 60) {
                    currentMinutes = 0;
                    currentHours++;
                }

                this.#setSecond(currentSecond);
                this.#setMinutes(currentMinutes);
                this.#setHours(currentHours);  
            }, 1000)
        }
        stop () {
            if (this.#intervalId) {
                clearInterval(this.#intervalId);
            }
        }
        reset () {
            if (this.#intervalId) {
                clearInterval(this.#intervalId);
            }
            this.#setSecond(0);
            this.#setMinutes(0);
            this.#setHours(0);
        }
    }

    const stopWatch = new StopWatch({
        hours: '#hours',
        minutes: '#minutes',
        second: '#second',
    });

    startBtn.onclick = () => {
        stopWatch.start();
    };
    stopBtn.onclick = () => {
        stopWatch.stop();
    };
    resetBtn.onclick = () => {
        stopWatch.reset();
    };
})();