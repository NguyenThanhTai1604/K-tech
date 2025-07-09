import { useEffect, useState } from "react";

export default function CountDownTimer() {
    const [timeLeft, setTimeLeft] = useState(300);
    const [isRunning, setIsRunning] = useState(false);
    const fomatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);

        return [
            m > 9 ? m.toString().padStart(2, "0").concat("m") : m.toString().concat("m"),
            s.toString().padStart(2, "0").concat("s"),
        ].join(" ");
    };


    useEffect(() => {
        if (!isRunning) return;

        const intervalId = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalId);
                    setIsRunning(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        // Cleanup: nếu isRunning thay đổi hoặc component unmount
        return () => clearInterval(intervalId);
    }, [isRunning]);



    const handleClickStart = () => {
        if (!isRunning) setIsRunning(true);
    }

    const handleReset = () => {
        setIsRunning(false);
        setTimeLeft(300);
    };



    return (
        <>
            <h1 className='mt-4 text-center font-bold'>Countdown Timer</h1>
            <div className="w-80 bg-gray-700 text-white rounded-lg mx-auto mt-5 p-4">
                <div className="flex justify-center items-center flex-col">
                    <p>Timer</p>
                    <div>{fomatTime(timeLeft)}</div>
                    <div className="space-x-2.5">
                        <button onClick={() => { handleClickStart(); }} className="text-white bg-blue-500 px-3 py-1 rounded-lg">Start</button>
                        <button onClick={() => { handleReset() }} className="text-blue-500 bg-white px-3 py-1 rounded-lg">Reset</button>
                    </div>
                </div>
            </div>
        </>
    );
}
