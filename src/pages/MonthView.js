import React from "react";
import Calendar from "../components/Calendar";
import PropTypes from "prop-types";

export default function MonthView({
  match: {
    params: { month, year }
  }
}) {
  return <Calendar month={month} year={year} />;
}

MonthView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      month: PropTypes.string,
      year: PropTypes.string
    })
  })
};
