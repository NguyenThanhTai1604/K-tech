import React from 'react'
import useClockHooks from '../hooks/useClockHooks'

export default function ClockDisplay() {
    const clock = useClockHooks();

    return (
        <div className="clock-container">
            {clock}
        </div>
    )
}
