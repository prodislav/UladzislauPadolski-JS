'use strict';

function Model() {
  this.date = new Date();
  this.currentMonth = this.date.getMonth();
  this.currentYear = this.date.getFullYear();

  this.nextMonth = function () {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.date = new Date(this.currentYear, this.currentMonth);
    return this.date;
  };

  this.prevMonth = function () {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.date = new Date(this.currentYear, this.currentMonth);
    return this.date;
  };

  Date.prototype.daysInMonth = function () {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
  };
}