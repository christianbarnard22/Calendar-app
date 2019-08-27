import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

export default function Day({ date, todaysEvents, dateIsinThisMonth }) {
  let titles = todaysEvents.map(function(title, index) {
    return (
      <div className="event-info" key={index}>
        {title}
      </div>
    );
  });

  return (
    <div className={dateIsinThisMonth ? "day" : "day not-this-month"}>
      <div className="day-number">{format(date, "d")}</div>
      {todaysEvents.length > 0 && titles}
    </div>
  );
}

Day.propTypes = {
  date: PropTypes.object,
  todaysEvents: PropTypes.arrayOf(PropTypes.string),
  notThisMonth: PropTypes.bool
};
