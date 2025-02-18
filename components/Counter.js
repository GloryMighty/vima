"use client";
import { useState } from 'react';
import CountUp from "react-countup";

/**
 * Counter component that animates a number counting up from 0
 * Uses react-countup for smooth animation and starts when mounted
 * @param {Object} props
 * @param {number} props.end - The final number to count up to
 * @param {number} props.decimals - Number of decimal places to show
 * @param {string} props.extraClass - Additional CSS classes to apply
 */
const Counter = ({ end, decimals, extraClass }) => {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <span className={`counter ${extraClass || ''}`}>
      <CountUp
        end={end || 100}
        duration={3}
        decimals={decimals || 0}
        start={hasStarted}
        onStart={() => setHasStarted(true)}
      />
    </span>
  );
};

export default Counter;
