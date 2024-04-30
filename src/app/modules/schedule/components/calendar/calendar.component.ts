import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Day } from './models/day';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnChanges {

  @Input()
  calendarMonth !: Date;

  @Input()
  availableDays: number[] = [];

  @Output()
  changedMonthEvent = new EventEmitter<Date>;

  @Output()
  selectedDateEvent = new EventEmitter<Date>;

  days: Day[] = [];
  selectedDay: number = 0;

  ngOnInit(): void {
    this.loadCalendar();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedDay = 0;
    this.loadCalendar();
  }

  onSelectedDay(day: number) {
    this.selectedDay = day;
    this.selectedDateEvent.emit(new Date(this.calendarMonth.getFullYear(), this.calendarMonth.getMonth(), this.selectedDay));
  }

  loadCalendar() {
    this.days = [... this.getBlankInitialDays(this.calendarMonth.getFullYear(), this.calendarMonth.getMonth()),
                 ... this.getDaysInMonth(this.calendarMonth.getFullYear(), this.calendarMonth.getMonth())];
    
    this.days = [... this.days,
                 ... this.getBlankEndDays(this.days.length)];
  }

  getBlankEndDays(length: number) {
    let rest = 7 - length % 7;
    let days: Day[] = [];

    for (let i = 0; i < rest; i++){
      days.push({} as Day)
    }

    if (days.length + length == 35) {
      for (let i = 0; i < 7; i++){
        days.push({} as Day)
      }
    }

    return days;
  }

  getBlankInitialDays(year: number, month: number): Day[] {
    let firstDay = this.getFirstDayInMonth(year, month);
    let emptyDays: number = 0;
    let dayWeek = firstDay.getDay();
    let days: Day[] = [];

    if (dayWeek == 0) {
      emptyDays = 6;
    }
    else {
      emptyDays = dayWeek - 1;
    }

    for (let i = 0; i < emptyDays; i++){
      days.push({} as Day)
    }

    return days;
  }

  getFirstDayInMonth(year: number, month: number): Date {
    return new Date(year, month, 1);
  }

  getDaysInMonth(year: number, month: number): Day[] {
    let numberOfDays: number = this.getNumberOfDays(year, month);
    let days: Day[] = [];

    for (let i = 1; i <= numberOfDays; i++){
      if (this.availableDays.includes(i)) {
        days.push({ day: i, available: true });
      }
      else {
        days.push({ day: i, available: false });
      }
    }

    return days;
  }

  getNumberOfDays(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  onNextMonth() {
    this.calendarMonth = new Date(this.calendarMonth);
    this.calendarMonth.setMonth(this.calendarMonth.getMonth() + 1);
    this.calendarMonth.setDate(1);

    this.loadCalendar();
    this.changedMonthEvent.emit(new Date(this.calendarMonth));

    this.selectedDay = 0;
  }

  onPreviousMonth() {
    
    let previousDate = new Date(this.calendarMonth);
    previousDate.setMonth(this.calendarMonth.getMonth() - 1);
    previousDate.setDate(1);

    if (this.isDateInFuture(previousDate) || this.isDateInCurrentMonthYear(previousDate)) {
      if (this.isDateInCurrentMonthYear(previousDate))
        previousDate.setDate(new Date().getDate());

      this.calendarMonth = previousDate;

      this.loadCalendar();
      this.changedMonthEvent.emit(new Date(this.calendarMonth));

      this.selectedDay = 0;
    }
  }

  showPreviousMonth(): boolean{
    return !this.isDateInCurrentMonthYear(this.calendarMonth);
  }

  isDateInFuture = (date: Date): boolean => date >= new Date();
  isDateInCurrentMonthYear = (date: Date): boolean => date.getMonth() == new Date().getMonth() && date.getFullYear() == new Date().getFullYear();
}
