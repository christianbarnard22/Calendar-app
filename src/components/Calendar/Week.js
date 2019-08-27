import React from "react";
import PropTypes from "prop-types";
import { addDays, format, isSameMonth } from "date-fns";

import Day from "./Day";
// when writing this my first goal was to be able to first show a full week of days,
// then I worked on figuring out how to get the frist day of the week.

export default function Week({ firsDayOfweek, events, currentMonth }) {
  let numOfDays = 7;

  const days = [];

  for (let i = 0; i < numOfDays; i++) {
    let date = addDays(firsDayOfweek, i);
    // I can determine if a day has events if the date is a key in the events
    let todaysEvents = events[format(date, "P")];
    let dateIsinThisMonth = isSameMonth(date, currentMonth);
    days.push(
      <Day
        dateIsinThisMonth={dateIsinThisMonth}
        key={i}
        date={date}
        todaysEvents={todaysEvents ? todaysEvents : []}
      />
    );
  }

  return <div className="week-container">{days}</div>;
}

Week.propTypes = {
  firstDayOfWeek: PropTypes.number,
  events: PropTypes.object,
  currentMonth: PropTypes.object
};
