'use strict';

function Controller() {
}

Controller.prototype.createCalendar = function (appendPlaceClass) {
    let model = new Model();
    let view = new View(appendPlaceClass, model);
    view.main();
};

let Calendar = new Controller();
Calendar.createCalendar('body');
