import React, { useState, useEffect } from "react";
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
import Month from "./Month";
import { eventsRequest } from "./api";
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
  const [events, setEvents] = useState(null);
  useEffect(() => {
    // A request is made each time the next and previous buttons
    // are clicked. I built this to accept a start and end date to pass to the server.
    // Here I decided to return just the current month's data but I'd probaly use a wider date
    // range to avoid having to make frequent requests to the server
    eventsRequest(
      format(startOfWeek(startOfMonth(currentMonth)), "T"),
      format(endOfWeek(endOfMonth(currentMonth)), "T")
    ).then(releases => {
      setEvents(releases);
    });
  }, [currentMonth]);
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
      <Month currentMonth={currentMonth} events={events} />
    </section>
  );
}

export default Calendar;
