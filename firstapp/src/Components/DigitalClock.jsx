import React, { useState } from "react";

const DigitalClock = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const UpdateTime = () => {
        const time = new Date().toLocaleTimeString();
        setCurrentTime(time);
        
    };

    setInterval(UpdateTime, 1000);

    return (
        <div
            className="digital-clock"
            style={{
                backgroundImage: "url(/Clock-Background-img.png)",
                overflow: "hidden",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <h1 className="Header">Welcome To Altaf Digital Clock Application</h1>

            <h1 className="clock">{currentTime}</h1>
        </div>
    );
};

export default DigitalClock;
