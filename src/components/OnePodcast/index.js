/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/media-has-caption */

// React imports
import {
  TbPlayerPlayFilled,
  TbPlayerPauseFilled,
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from 'react-icons/tb';
// import { RiReplay30Fill, RiForward30Fill } from 'react-icons/ri';
import { useState, useRef, useEffect } from 'react';

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

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
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
    const newTime = audioPlayer.current.currentTime + 30;
    // Needed this to fix the wrong number ofsecs added to the player
    if (newTime <= duration) {
      audioPlayer.current.currentTime = newTime;
      progressBar.current.value = newTime;
      changePlayerCurrentTime();
    }
  };

  return (
    <Container>
      <section className="onePodcast">
        <header className="onePodcast__header">
          <h2 className="header">Radio Gresivaudan</h2>
          <div className="onePodcast__header-block">
            <div className="onePodcast__header-block-img">
              <a href="https://www.radio-gresivaudan.org/" target="_blank" title="Page officielle de radio Gresivaudan" rel="noreferrer">
                <img src={logoRadio} alt="Radio Gresivaudan" />
              </a>
            </div>
            <p className="OnePodcast__excerpt">
              Depuis octobre 2018, les "Parlons-en" sont diffusés sur <em className="onePodcast__em">Radio Grésivaudan</em> chaque 4ème mercredi du mois&nbsp;! <br />
              Plus d'infos sur le site de <em className="onePodcast__em"><a href="https://www.radio-gresivaudan.org/?s=parlons-en" target="__blank" rel="noreferrer">Radio Grésivaudan</a></em>.
            </p>
          </div>
        </header>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <h3 className="header">La trêve hivernale</h3>
            <p>
              Quels dispositifs ont été mis en place à Grenoble cet hiver&nbsp;?<br />
              Comment l'ont vécu les personnes hébergées&nbsp;?<br />
              Qui (ne) fait (pas) quoi&nbsp;? Quel rôle des collectivités locales&nbsp;?<br />
              En cette période de pandémie, quels ont été les changements par rapport aux hivers précédents&nbsp;?<br />
              Maintien dans l'hébergement ou le logement&nbsp;: quels sont les droits, les possibles en cette fin de trêve&nbsp;?…<br />
              illustration sonore&nbsp;: Claudio Capéo "<em className="onePodcast__em"><a href="https://www.youtube.com/watch?v=Y9GCM9DZUJo&ab_channel=ClaudioCapeoVEVO" target="__blank" rel="noreferrer">Un homme debout</a></em>".
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer} src={TestAudio} preload="metadata" onLoadedData={onLoadedMetadata} />

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar} onChange={changeRange} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration && !Number.isNaN(duration)) && calculateTime(duration)}</div>
              </div>

              <div className="audioPlayer__player-btn">
                <button type="button" onClick={backThirty} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={togglePlayPause} className="audioPlayer__main-btn">
                  {isPlaying ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={forwardThirty} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </Container>
  );
}

export default OnePodcast;
