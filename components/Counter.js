<<<<<<< HEAD
"use client";
import { useState } from 'react';
import CountUp from "react-countup";

// Simple counter component that starts counting when mounted
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
=======
"use client";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
const Counter = ({ end, decimals, extraClass }) => {
  return (
    <CountUp
      end={end ? end : 100}
      duration={3}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span
            className={`counter ${extraClass}`}
            data-from="0"
            data-to={end}
            ref={countUpRef}
          >
            count
          </span>
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counter;
>>>>>>> 95ff9be6638ae07803b864c70523b545a06de5b8
