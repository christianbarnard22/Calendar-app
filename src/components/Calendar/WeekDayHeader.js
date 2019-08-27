import { addDays, format, startOfWeek } from "date-fns";
import PropTypes from "prop-types";
import React from "react";

export default function WeekDayHeader({ currentMonth }) {
  const days = [];
  let startDate = startOfWeek(currentMonth);
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="day" key={i}>
        <span className="day-name">
          {format(addDays(startDate, i), "EEEEEE")}
        </span>
      </div>
    );
  }
  return <div className="day-name-container">{days}</div>;
}

WeekDayHeader.propTypes = {
  currentMonth: PropTypes.instanceOf(Date)
};
