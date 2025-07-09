import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev < 1) {
                    clearInterval(interval);
                    alert("Time's up")
                    return 0;
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(interval);
    }, [])
    return (
        <div className='count-down'>
            Count down from {timer}
        </div>
    )
}
