'use strict';

function View(appendClassName, model) {

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

    this.main = function () {
        init();
    };

    function init () {
        const datepicker = showElements();
        let wrapper = document.querySelector(appendClassName);
        wrapper.appendChild(datepicker);
        createDatePicker();
    }

    function createDatePicker() {
        const today = new Date();
        const date = new Date(model.currentYear, model.currentMonth, 1);
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
            if (i + 1 === today.getDate() && today.getFullYear() === model.currentYear && today.getMonth() === model.currentMonth) {
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
        }, monthsName[model.currentMonth] + ' ' + model.currentYear);
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
        model.prevMonth();
        init();
    }

    function generateNextMonth() {
        deleteMonth();
        model.nextMonth();
        init();
    }

    function bindEvents(block) {
        const rightButton = block.querySelector('.vp-datepicker__button-next');
        const leftButton = block.querySelector('.vp-datepicker__button-prev');
        rightButton.addEventListener("click", generateNextMonth);
        leftButton.addEventListener("click", generatePrevMonth);
    }
}