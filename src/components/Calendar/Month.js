import React from "react";
import PropTypes from "prop-types";
import { addWeeks, startOfMonth, startOfWeek } from "date-fns";

import Week from "./Week";
import WeekDayHeader from "./WeekDayHeader";

// I would have writen a use case test for this component
// to ensure that this always output the first day of the week in a given Month
// and the last day of the week of a given month
export default function Month({ currentMonth, events }) {
  let numOfColumns = 5;
  let firstDayOfMonth = startOfMonth(currentMonth);
  let beginningOfWeek = startOfWeek(firstDayOfMonth);
  let weeks = [];

  for (let i = 0; i < numOfColumns; i++) {
    let firstDayofWeek = addWeeks(beginningOfWeek, i);

    weeks.push(
      <Week
        key={i}
        events={events ? events : {}}
        firsDayOfweek={firstDayofWeek}
        currentMonth={currentMonth}
      />
    );
  }
  return (
    <div>
      {/* I started out making the week day header it's own component.
        This could have been created using the week component as well 
        but I decided keep what I started with so that I wouldn't run out of time */}
      <WeekDayHeader currentMonth={currentMonth} />
      {weeks}
    </div>
  );
}

Month.propTypes = {
  currentMonth: PropTypes.instanceOf(Date),
  events: PropTypes.object
};
