import React, { useEffect, useState } from 'react'

export default function useClockHooks() {
    const [clock, setClock] = useState("");


    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const perio = hours <= 12 ? "AM" : "PM"
            hours = hours % 12 || 12;
            setClock([
                hours.toString().padStart(2, "0"),
                minutes.toString().padStart(2, "0"),
                seconds.toString().padStart(2, "0"),
                perio.toString().padStart()
            ].join(":"))
        }
        updateClock();

        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, [])
    return clock;
}
