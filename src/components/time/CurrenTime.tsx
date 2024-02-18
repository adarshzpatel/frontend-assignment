import  { useState, useEffect } from "react";

const CurrenTime= () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000*60);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="text-4xl text-center">{time.toLocaleTimeString().slice(0,-3)}</div>;
};

export default CurrenTime;
