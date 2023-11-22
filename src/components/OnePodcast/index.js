/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/media-has-caption */
// React imports
import { IoPlaySharp } from 'react-icons/io5';
import { AiFillBackward, AiFillForward } from 'react-icons/ai';
import { IoMdPause } from 'react-icons/io';
import { useState, useRef } from 'react';

// Component imports
import Container from '../Container';

// imports
import './style.scss';
import TestAudio from '../../../public/pe_2022_03_17_treve_hivernale.mp3';
import logoRadio from '../../../public/img/gresivaudan-logo.svg';

function OnePodcast() {
  // State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // References
  const audioPlayer = useRef(); // reference the audioplayer component
  const progressBar = useRef(); // reference the progress bar
  const animationRef = useRef(); // reference the animation

  const onLoadedMetadata = () => {
    setDuration(Math.floor(audioPlayer.current.duration));
  };

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds} `;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
    else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`);
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  };

  return (
    <Container>
      <section className="onePodcast">
        <header className="onePodcast__header">
          <h2 className="header">Radio Gresivaudan</h2>
          <div className="onePodcast__header-block">
            <span>
              <a href="https://www.radio-gresivaudan.org/" target="_blank" title="Page officielle de radio Gresivaudant" rel="noreferrer">
                <img src={logoRadio} alt="Radio Gresivaudant" />
              </a>
            </span>
            <p className="OnePodcast__excerpt">
              Depuis octobre 2018, les "Parlons-en" sont diffusés sur <em className="onePodcast__em">Radio Grésivaudan</em> chaque 4ème mercredi du mois&nbsp;! <br />
              Plus d'infos sur le site de <em className="onePodcast__em"><a href="https://www.radio-gresivaudan.org/?s=parlons-en" target="__blank" rel="noreferrer">Radio Grésivaudan</a></em>.
            </p>
          </div>
        </header>
        <article className="audioPlayer">
          <audio ref={audioPlayer} src={TestAudio} onLoadedMetadata={onLoadedMetadata} preload="metadata" />
          <button type="button" onClick={backThirty}><AiFillBackward /> 30 </button>
          <button type="button" onClick={togglePlayPause}>
            {isPlaying ? <IoMdPause /> : <IoPlaySharp /> }
          </button>
          <button type="button" onClick={forwardThirty}> 30 <AiFillForward /></button>

          {/* current time */}
          <div>{calculateTime(currentTime)}</div>

          {/* Progress bar */}
          <div>
            <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar} onChange={changeRange} />
          </div>

          {/* duration */}
          <div>{(duration && !Number.isNaN(duration)) && calculateTime(duration)}</div>

        </article>
        <article className="audioPlayer">
          <audio ref={audioPlayer} src={TestAudio} onLoadedMetadata={onLoadedMetadata} preload="metadata" />
          <button type="button" onClick={backThirty}><AiFillBackward /> 30 </button>
          <button type="button" onClick={togglePlayPause}>
            {isPlaying ? <IoMdPause /> : <IoPlaySharp /> }
          </button>
          <button type="button" onClick={forwardThirty}> 30 <AiFillForward /></button>

          {/* current time */}
          <div>{calculateTime(currentTime)}</div>

          {/* Progress bar */}
          <div>
            <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar} onChange={changeRange} />
          </div>

          {/* duration */}
          <div>{(duration && !Number.isNaN(duration)) && calculateTime(duration)}</div>

        </article>
        <article className="audioPlayer">
          <audio ref={audioPlayer} src={TestAudio} onLoadedMetadata={onLoadedMetadata} preload="metadata" />
          <button type="button" onClick={backThirty}><AiFillBackward /> 30 </button>
          <button type="button" onClick={togglePlayPause}>
            {isPlaying ? <IoMdPause /> : <IoPlaySharp /> }
          </button>
          <button type="button" onClick={forwardThirty}> 30 <AiFillForward /></button>

          {/* current time */}
          <div>{calculateTime(currentTime)}</div>

          {/* Progress bar */}
          <div>
            <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar} onChange={changeRange} />
          </div>

          {/* duration */}
          <div>{(duration && !Number.isNaN(duration)) && calculateTime(duration)}</div>

        </article>
      </section>
    </Container>
  );
}

export default OnePodcast;
