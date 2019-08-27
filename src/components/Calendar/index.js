import React, { useState } from "react";
// I decided to use date-fns because I could load only what I need,
// it is immutable, and light weight.
import {
  format,
  addMonths,
  subMonths,
  startOfWeek,
  startOfMonth,
  endOfMonth,
  endOfWeek
} from "date-fns";

import { CalendarHeader } from "./Header";
// If I had more time I would have worked on a mobile view for this but I decided
// that the functionality of the calendar needed to be completed first. For mobile
// I would have made the width 100% this would be displayed edge to edge on smaller screens.
import "./calendar.css";

function getValidDate(month, year) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let suppliedMonth = month - 1;
  let firstOriginalSeriesYear = 2013;

  let d = new Date();

  let validMonth = suppliedMonth > 0 && suppliedMonth <= 11;
  let validYear = year > firstOriginalSeriesYear;

  // If I had more time I would let the user know that the date that they
  // entered is not valid so that they know why they are viewing the current month instead
  // of the date and year that they input into the url
  if (validMonth && validYear) {
    let dateString = `${months[month - 1]}, ${year}`;
    var timestamp = Date.parse(dateString);
  }

  if (!isNaN(timestamp)) {
    d = new Date(timestamp);
  }
  return d;
}
// I decided not to write tests for this so that I could focus on getting the calendar completed
// If there was more time I would have written tests as I finished a goal that I set for completion and/or started
// out by writing tests that I then needed to pass.
function Calendar({ month, year }) {
  let initializedDate = getValidDate(month, year);
  const [currentMonth, setCurrentMonth] = useState(initializedDate);

  let newcurrentmonth = currentMonth;

  const prevMonth = subMonths(currentMonth, 1);

  const nextMonth = addMonths(newcurrentmonth, 1);

  const handleMonthChange = month => setCurrentMonth(month);

  return (
    <section className="month">
      <div>
        <CalendarHeader
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
        />
      </div>
    </section>
  );
}

export default Calendar;
