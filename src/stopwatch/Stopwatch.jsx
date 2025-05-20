import { useEffect, useRef, useState } from 'react'
import './Stopwatch.css'


function Stopwatch() {

/////////////////////////////////////////////////// SVG STYLING ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const startSVG = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                      </svg>);

    const stopSVG = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                     </svg>);
    
    const resetSVG = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>)

/////////////////////////////////////////////////// SVG STYLING ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const intervalID = useRef(null);

    useEffect(()=> {
        if (isRunning) {
            intervalID.current = setInterval(() => {
                setElapsedTime(Date.now() - startTime)
            }, 10);
        }
        return () => {
            clearInterval(intervalID.current)}
            ;
    },[isRunning])

    function startTimer() {
        setIsRunning(true);
        setStartTime(Date.now() - elapsedTime)
    }

    function stopTimer() {
        setIsRunning(false);
    }

    function resetTimer() {
        setIsRunning(false);
        setStartTime(0);
        setElapsedTime(0);
    }
    
    function displayTime() {
    const ms = Math.floor((elapsedTime % 1000) / 10);
    const sec = Math.floor((elapsedTime / 1000) % 60);
    const min = Math.floor((elapsedTime / 60000) % 60);

    const formattedMin = min.toString().padStart(2, '0');
    const formattedSec = sec.toString().padStart(2, '0');
    const formattedMs = ms.toString().padStart(2, '0');

    return `${formattedMin}:${formattedSec}:${formattedMs}`;
    }

    return (   
        <>
            <div className="stopwatch">
                <h1>Stopwatch</h1>
                <div className="display">{displayTime()}</div>
                <div className="button">
                    <button className="start-button"
                    onClick={() => startTimer()}
                    >{startSVG}</button>
                    <button className="stop-button"
                    onClick={() => stopTimer()}
                    >{stopSVG}</button>
                    <button className="reset-button"
                    onClick={() => resetTimer()}
                    >{resetSVG}</button>
                </div>
            </div>
        </>
    )
}

export default Stopwatch