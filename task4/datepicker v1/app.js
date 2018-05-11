'use strict';
const main = (document => {
    let date = new Date();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();
    let temp = new Date(currentYear, currentMonth + 1, 0);
    let lastDay = temp.getDate();

    Date.prototype.daysInMonth = function () {
        return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
    };

    const daysName = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const monthsName = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    window.onload = function () {
        const datepicker = showElements();
        document.body.appendChild(datepicker);
        createDatePicker();
    };

    function bindEvents(block) {
        const rightButton = block.querySelector('.vp-datepicker__button-next');
        const leftButton = block.querySelector('.vp-datepicker__button-prev');
        rightButton.addEventListener("click", generateNextMonth);
        leftButton.addEventListener("click", generatePrevMonth);
    };

    function createElement(tag, props, ...children) {
        const element = document.createElement(tag);
        Object.keys(props).forEach(key => element[key] = props[key]);
        if (children.length > 0) {
            children.forEach(child => {
                if (typeof child === 'string') {
                    child = document.createTextNode(child);
                }
                element.appendChild(child);
            })
        }
        return element;
    };

    function createDatePicker() {
        let currentDay = new Date(currentYear, currentMonth, 1);
        let t = currentDay.getDay() - 1;
        if (t < 0) {
            t = 6;
        }
        let a = 0;
        while (currentDay.getMonth() === currentMonth) {
            let week = document.createElement('div');
            week.className = 'vp-datepicker__week';
            let i = -1;
            while (i < 6) {
                let weekDay = document.createElement('div');
                weekDay.className = 'vp-datepicker__week-day';
                if (a === 0) {
                    if (i < t) {
                        weekDay.innerHTML = '';
                    } else {
                        weekDay.innerHTML = currentDay.getDate().toString();
                        currentDay.setDate(currentDay.getDate() + 1);
                    }
                } else {
                    if (currentDay.getDate() === lastDay) {
                        weekDay.innerHTML = currentDay.getDate().toString();
                        currentDay.setDate(currentDay.getDate() + 1);
                        week.appendChild(weekDay);
                        break;
                    }
                    weekDay.innerHTML = currentDay.getDate().toString();
                    currentDay.setDate(currentDay.getDate() + 1);
                }
                week.appendChild(weekDay);
                i++;
            }
            document.querySelector('.vp-datepicker__weeks').appendChild(week);
            a++;
        }
    };

    function showElements() {
        const prevBut = createElement('div', {
            className: 'vp-datepicker__button vp-datepicker__button-prev'
        }, '◄');
        const nextBut = createElement('div', {
            className: 'vp-datepicker__button vp-datepicker__button-next'
        }, '►');
        const dates = createElement('div', {
            className: 'vp-datepicker__date'
        }, monthsName[currentMonth] + ' ' + currentYear);
        const days = createElement('div', {
            className: 'vp-datepicker__days'
        });
        const weeks = createElement('div', {
            className: 'vp-datepicker__weeks'
        })
        for (let day of daysName) {
            const dayName = createElement('div', {
                className: 'vp-datepicker__day'
            }, day);
            days.appendChild(dayName);
        }
        const title = createElement('div', {
            className: 'vp-datepicker__title'
        }, prevBut, dates, nextBut);
        const field = createElement('div', {
            className: 'vp-datepicker__field'
        }, title, days, weeks);
        const el = createElement('div', {
            className: 'vp-datepicker__el'
        }, field);
        const block = createElement('div', {
            className: 'vp-datepicker'
        }, el);

        bindEvents(block);

        return block;
    };

    function generatePrevMonth() {
        if (document.querySelector('.vp-datepicker')) {
            document.body.removeChild(document.querySelector('.vp-datepicker'));
        }
        prevMonth();
        const datepicker = showElements();
        document.body.appendChild(datepicker);
        createDatePicker();
    };

    function generateNextMonth() {
        if (document.querySelector('.vp-datepicker')) {
            document.body.removeChild(document.querySelector('.vp-datepicker'));
        }
        nextMonth();
        const datepicker = showElements();
        document.body.appendChild(datepicker);
        createDatePicker();
    };

    function nextMonth() {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
    };

    function prevMonth() {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
    };

})(document);

main();