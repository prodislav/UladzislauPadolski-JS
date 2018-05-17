'use strict';
let appendPlace = 'body';

const main = function (appendPlace) {
    document.addEventListener("DOMContentLoaded", function () {
        init(appendPlace);
    }, false);

    let date = new Date();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();

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

    function init(appendPlace) {
        const datepicker = showElements();
        let wrapper = document.querySelector(appendPlace);
        wrapper.appendChild(datepicker);
        createDatePicker();
    }

    function bindEvents(block) {
        const rightButton = block.querySelector('.vp-datepicker__button-next');
        const leftButton = block.querySelector('.vp-datepicker__button-prev');
        rightButton.addEventListener("click", generateNextMonth);
        leftButton.addEventListener("click", generatePrevMonth);
    }

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
    }

    function createDatePicker() {
        const today = new Date();
        const date = new Date(currentYear, currentMonth, 1);
        for (let i = 0; i < date.getDay(); i++) {
            let day = createElement('div', {
                className: 'vp-datepicker__week-day'
            }, '');
            document.querySelector('.vp-datepicker__weeks').appendChild(day);
        }

        for (let i = 0; i < date.daysInMonth(); i++) {
            let day = createElement(
                'div',
                {
                    className: 'vp-datepicker__week-day'
                },
                '' + (i + 1) + '');
            document.querySelector('.vp-datepicker__weeks').appendChild(day);
            if (i + 1 === today.getDate() && today.getFullYear() === currentYear && today.getMonth() === currentMonth) {
                day.classList.add('today');
            }
        }
    }

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
        });
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
    }

    function deleteMonth() {
        if (document.querySelector('.vp-datepicker')) {
            document.body.removeChild(document.querySelector('.vp-datepicker'));
        }
    }

    function generatePrevMonth() {
        deleteMonth();
        prevMonth();
        init(appendPlace);
    }

    function generateNextMonth() {
        deleteMonth();
        nextMonth();
        init(appendPlace);
    }

    function nextMonth() {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
    }

    function prevMonth() {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
    }

};

main(appendPlace);
