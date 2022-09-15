import { React, useEffect, useState } from 'react';
import './Countdown.css';

const Countdown = () => {

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleHours = (up) => {
    if (up) {
      setHours(hours + 1);
    } else {
      (hours > 0 && setHours(hours - 1));
    }
  }

  const handleMinutes = (up) => {
    if (up) {
      minutes === 59 ? setMinutes(0) : setMinutes(minutes + 1);
    } else {
      if (minutes === 0) {
        setMinutes(59);
        isPlaying && handleHours(false);
      } else {
        setMinutes(minutes - 1);
      }
    }
  }

  const handleSeconds = (up) => {
    if (up) {
      seconds === 59 ? setSeconds(0) : setSeconds(seconds + 1);
    } else {
      if (seconds === 0) {
        setSeconds(59);
        isPlaying && handleMinutes(false);
      }
      else {
        setSeconds(seconds - 1);
      }
    }
  }

  const handlePlaying = () => {
    if (isPlaying) {
      setIsPlaying(!isPlaying);
    } else {
      setTimeInSeconds((hours * 3600) + (minutes * 60) + seconds);
      setIsPlaying(!isPlaying);
    }
  }

  const handleReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTimeInSeconds(0);
    setIsPlaying(false);
  }

  useEffect(() => {    
    // console.log(`isPlaying: ${isPlaying}`);
    if (isPlaying) {
      const interval = setInterval(() => {
        if (timeInSeconds > 0) {
          setTimeInSeconds(timeInSeconds - 1);
          handleSeconds(false);
        }
        if (timeInSeconds === 0) {
          setIsPlaying(false);
          // play sound here 
          alert('Stand Up!');
        }
      }, 1000);
      return () => clearInterval(interval);
    } // eslint-disable-next-line
  }, [timeInSeconds, isPlaying]);

  return (
    <>
      <h3 className='center'> | Stand Up! Mthrfckr! |</h3>


      <div className="countdown">

        <div className="buttons">
          <button className='btn' disabled={isPlaying} onClick={() => handleHours(true)}>🡁</button>
          <button className='btn' disabled={isPlaying} onClick={() => handleMinutes(true)}>🡁</button>
          <button className='btn' disabled={isPlaying} onClick={() => handleSeconds(true)}>🡁</button>
        </div>

        <div className='numbers'>
          {(hours < 10) && 0}{hours}h:{(minutes < 10) && 0}{minutes}m:{(seconds < 10) && 0}{seconds}s
        </div>

        <div className="buttons">
          <button className='btn' disabled={isPlaying} onClick={() => handleHours(false)}>🡃</button>
          <button className='btn' disabled={isPlaying} onClick={() => handleMinutes(false)}>🡃</button>
          <button className='btn' disabled={isPlaying} onClick={() => handleSeconds(false)}>🡃</button>
        </div>

        <div className="separator"> </div>

        <div className="buttons">
          { isPlaying
            ? <button className='btn-pause' onClick={() => handlePlaying()}>PAUSE</button>
            : <button className='btn-play' onClick={() => handlePlaying()}>START</button>
          }
          <button className='btn-reset' onClick={() => handleReset()}>RESET</button>
        </div>

        <div className="separator"> </div>

      </div>
    </>
  )
}

export default Countdown