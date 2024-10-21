import React, { useState, useEffect } from 'react';
function prettyNum(value = 0) {
  return value.toLocaleString('en-US');
}
function prettyPrice(value = 0) {
  if (typeof value === 'string' && value.includes('$')) {
    value = numericCurrency(value);
  }
  if (value == 0) return '$0';
  if (!Number(value)) return value;
  return Number(value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
const CountUp = ({ start = 0, end = 0, isPrice = false, duration = 800 }) => {
  const [value, setValue] = useState(start);
  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = Math.floor(progress * (end - start) + start);
      setValue(currentValue);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setValue(end); // Final value without rounding for precision
      }
    };
    window.requestAnimationFrame(step);
  }, [start, end, duration]);
  return (
    <span>
      {isPrice ? prettyPrice(value) : prettyNum(value)}
    </span>
  );
};
export default CountUp;