import React, { useState } from 'react';
import moment from 'moment';

function YearsSince({ startDate }) {
  const [now] = useState(new Date());
  const start = new Date(startDate);

  return (
    <span>{moment(now).diff(start, 'years', false)}</span>
  );
}

export default YearsSince;
