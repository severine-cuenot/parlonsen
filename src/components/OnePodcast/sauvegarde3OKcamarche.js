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
import { useState, useRef, useEffect } from 'react';

// Component imports
import Container from '../Container';

// imports
import './style.scss';
import TestAudio from '../../../public/pe_2022_03_17_treve_hivernale.mp3';
import TestAudio2 from '../../../public/pe_2023_01_habitat_reve.mp3';

function OnePodcast() {
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [currentTime1, setCurrentTime1] = useState(0);
  const [duration1, setDuration1] = useState(0);

  const audioPlayer1 = useRef();
  const progressBar1 = useRef();
  const animationRef1 = useRef();

  const [isPlaying2, setIsPlaying2] = useState(false);
  const [currentTime2, setCurrentTime2] = useState(0);
  const [duration2, setDuration2] = useState(0);

  const audioPlayer2 = useRef();
  const progressBar2 = useRef();
  const animationRef2 = useRef();

  const onLoadedMetadata = (index) => {
    if (index === 1) {
      setDuration1(Math.floor(audioPlayer1.current.duration));
    }
    else if (index === 2) {
      setDuration2(Math.floor(audioPlayer2.current.duration));
    }
  };

  useEffect(() => {
    const seconds = Math.floor(audioPlayer1.current.duration);
    setDuration1(seconds);
    progressBar1.current.max = seconds;

    progressBar2.current.max = Math.floor(audioPlayer2.current.duration);
  }, [
    audioPlayer1?.current?.loadedmetadata,
    audioPlayer1?.current?.readyState,
    audioPlayer2?.current?.loadedmetadata,
    audioPlayer2?.current?.readyState,
  ]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = (index) => {
    const prevValue = index === 1 ? isPlaying1 : isPlaying2;
    if (index === 1) {
      setIsPlaying1(!prevValue);
    }
    else if (index === 2) {
      setIsPlaying2(!prevValue);
    }
    const audioPlayer = index === 1 ? audioPlayer1.current : audioPlayer2.current;
    // eslint-disable-next-line no-unused-vars
    const progressBar = index === 1 ? progressBar1.current : progressBar2.current;
    const animationRef = index === 1 ? animationRef1 : animationRef2; // Utiliser animationRef1 ou animationRef2 en fonction de l'index

    if (!prevValue) {
      audioPlayer.play();
      animationRef.current = requestAnimationFrame(() => whilePlaying(index, animationRef)); // Passer l'animationRef en tant qu'argument
    }
    else {
      audioPlayer.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = (index, animationRef) => {
    const audioPlayer = index === 1 ? audioPlayer1.current : audioPlayer2.current;
    const progressBar = index === 1 ? progressBar1.current : progressBar2.current;
    // Vérifier que animationRef et animationRef.current sont définis avant de les utiliser
    if (animationRef && animationRef.current) {
      progressBar.value = audioPlayer.currentTime;
      changePlayerCurrentTime(index);
      // Calculer le pourcentage de progression
      const progressPercentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      // Mettre à jour le style de la barre de progression
      progressBar.style.setProperty('--seek-before-width', `${progressPercentage}%`);
      animationRef.current = requestAnimationFrame(() => whilePlaying(index, animationRef));
    }
  };

  const changeRange = (index) => {
    const audioPlayer = index === 1 ? audioPlayer1.current : audioPlayer2.current;
    const progressBar = index === 1 ? progressBar1.current : progressBar2.current;

    audioPlayer.currentTime = progressBar.value;
    changePlayerCurrentTime(index);
  };

  const changePlayerCurrentTime = (index) => {
    const progressBar = index === 1 ? progressBar1.current : progressBar2.current;

    progressBar.style.setProperty('--seek-before-width', `${progressBar.value / (index === 1 ? duration1 : duration2) * 100}%`);
    if (index === 1) {
      setCurrentTime1(progressBar.value);
    }
    else if (index === 2) {
      setCurrentTime2(progressBar.value);
    }
  };

  const backThirty = (index) => {
    const progressBar = index === 1 ? progressBar1.current : progressBar2.current;

    progressBar.value = Number(progressBar.value - 30);
    changeRange(index);
  };

  const forwardThirty = (index) => {
    const audioPlayer = index === 1 ? audioPlayer1.current : audioPlayer2.current;
    const progressBar = index === 1 ? progressBar1.current : progressBar2.current;

    const newTime = audioPlayer.currentTime + 30;
    if (newTime <= (index === 1 ? duration1 : duration2)) {
      audioPlayer.currentTime = newTime;
      progressBar.value = newTime;
      changePlayerCurrentTime(index);
    }
  };

  return (
    <Container>
      <section className="onePodcast">
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
              <audio ref={audioPlayer1} src={TestAudio} preload="metadata" onLoadedData={() => onLoadedMetadata(1)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(1)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(1)} className="audioPlayer__main-btn">
                  {isPlaying1 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(1)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime1)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar1} onChange={() => changeRange(1)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration1 && !Number.isNaN(duration1)) && calculateTime(duration1)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(1)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(1)} className="audioPlayer__main-btn">
                  {isPlaying1 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(1)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <h3 className="header">Habitat</h3>
            <p>
              test d'audio n°2.
              blablablabalbalbalablab
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer2} src={TestAudio2} preload="metadata" onLoadedData={() => onLoadedMetadata(2)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(2)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(2)} className="audioPlayer__main-btn">
                  {isPlaying2 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(2)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime2)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar2} onChange={() => changeRange(2)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration2 && !Number.isNaN(duration2)) && calculateTime(duration2)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(2)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(2)} className="audioPlayer__main-btn">
                  {isPlaying2 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(2)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </Container>
  );
}

export default OnePodcast;
