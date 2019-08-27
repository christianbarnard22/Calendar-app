import { format } from "date-fns";
import React from "react";

export const CalendarHeader = ({
  currentMonth,
  prevMonth,
  onMonthChange,
  nextMonth
}) => {
  let dateFormat = "MMMM yyyy";
  return (
    <header className="calendar-header">
      <div className="month-controls">
        <div className="icon" onClick={() => onMonthChange(prevMonth)}>
          chevron_left
        </div>
        <div className="box header-text">
          {format(currentMonth, dateFormat)}
        </div>
        <div className="icon" onClick={() => onMonthChange(nextMonth)}>
          chevron_right
        </div>
      </div>
    </header>
  );
};
