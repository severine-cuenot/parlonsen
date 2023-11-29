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

// imports MP3
import audio1 from '../../../public/mp3/201711_sdf_habitants_police.mp3';
import audio2 from '../../../public/mp3/201802_relations_rue.mp3';
import audio3 from '../../../public/mp3/20180314_jeunes_rue_chiens.mp3';
import audio4 from '../../../public/mp3/201804_rue_systemeD.mp3';

function OnePodcast() {
  // Player audio1
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [currentTime1, setCurrentTime1] = useState(0);
  const [duration1, setDuration1] = useState(0);

  const audioPlayer1 = useRef();
  const progressBar1 = useRef();
  const animationRef1 = useRef();

  // Player audio2
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [currentTime2, setCurrentTime2] = useState(0);
  const [duration2, setDuration2] = useState(0);

  const audioPlayer2 = useRef();
  const progressBar2 = useRef();
  const animationRef2 = useRef();

  // Player audio3
  const [isPlaying3, setIsPlaying3] = useState(false);
  const [currentTime3, setCurrentTime3] = useState(0);
  const [duration3, setDuration3] = useState(0);

  const audioPlayer3 = useRef();
  const progressBar3 = useRef();
  const animationRef3 = useRef();

  // Player audio4
  const [isPlaying4, setIsPlaying4] = useState(false);
  const [currentTime4, setCurrentTime4] = useState(0);
  const [duration4, setDuration4] = useState(0);

  const audioPlayer4 = useRef();
  const progressBar4 = useRef();
  const animationRef4 = useRef();

  const onLoadedMetadata = (index) => {
    if (index === 1) {
      setDuration1(Math.floor(audioPlayer1.current.duration));
    }
    else if (index === 2) {
      setDuration2(Math.floor(audioPlayer2.current.duration));
    }
    else if (index === 3) {
      setDuration3(Math.floor(audioPlayer3.current.duration));
    }
    else if (index === 4) {
      setDuration4(Math.floor(audioPlayer4.current.duration));
    }
  };

  useEffect(() => {
    const seconds = Math.floor(audioPlayer1.current.duration);
    setDuration1(seconds);
    progressBar1.current.max = seconds;
    progressBar2.current.max = Math.floor(audioPlayer2.current.duration);
    progressBar3.current.max = Math.floor(audioPlayer3.current.duration);
    progressBar4.current.max = Math.floor(audioPlayer4.current.duration);
  }, [
    // Player audio1
    audioPlayer1?.current?.loadedmetadata,
    audioPlayer1?.current?.readyState,
    // Player audio2
    audioPlayer2?.current?.loadedmetadata,
    audioPlayer2?.current?.readyState,
    // Player audio3
    audioPlayer3?.current?.loadedmetadata,
    audioPlayer3?.current?.readyState,
    // Player audio4
    audioPlayer4?.current?.loadedmetadata,
    audioPlayer4?.current?.readyState,
  ]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = (index) => {
    let prevValue; let audioPlayer; let progressBar; let
      animationRef;

    switch (index) {
      case 1:
        prevValue = isPlaying1;
        setIsPlaying1(!prevValue);
        audioPlayer = audioPlayer1.current;
        progressBar = progressBar1.current;
        animationRef = animationRef1;
        break;
      case 2:
        prevValue = isPlaying2;
        setIsPlaying2(!prevValue);
        audioPlayer = audioPlayer2.current;
        progressBar = progressBar2.current;
        animationRef = animationRef2;
        break;
      case 3:
        prevValue = isPlaying3;
        setIsPlaying3(!prevValue);
        audioPlayer = audioPlayer3.current;
        progressBar = progressBar3.current;
        animationRef = animationRef3;
        break;
      case 4:
        prevValue = isPlaying4;
        setIsPlaying4(!prevValue);
        audioPlayer = audioPlayer4.current;
        // eslint-disable-next-line no-unused-vars
        progressBar = progressBar4.current;
        animationRef = animationRef4;
        break;
      default:
        break;
    }

    if (!prevValue) {
      audioPlayer.play();
      animationRef.current = requestAnimationFrame(() => whilePlaying(index, animationRef));
    }
    else {
      audioPlayer.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = (index, animationRef) => {
    let audioPlayer; let
      progressBar;

    switch (index) {
      case 1:
        audioPlayer = audioPlayer1.current;
        progressBar = progressBar1.current;
        break;
      case 2:
        audioPlayer = audioPlayer2.current;
        progressBar = progressBar2.current;
        break;
      case 3:
        audioPlayer = audioPlayer3.current;
        progressBar = progressBar3.current;
        break;
      case 4:
        audioPlayer = audioPlayer4.current;
        progressBar = progressBar4.current;
        break;
      default:
        break;
    }

    if (animationRef && animationRef.current) {
      progressBar.value = audioPlayer.currentTime;
      changePlayerCurrentTime(index);

      const progressPercentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      progressBar.style.setProperty('--seek-before-width', `${progressPercentage}%`);
      animationRef.current = requestAnimationFrame(() => whilePlaying(index, animationRef));
    }
  };

  const changeRange = (index) => {
    let audioPlayer; let
      progressBar;

    switch (index) {
      case 1:
        audioPlayer = audioPlayer1.current;
        progressBar = progressBar1.current;
        break;
      case 2:
        audioPlayer = audioPlayer2.current;
        progressBar = progressBar2.current;
        break;
      case 3:
        audioPlayer = audioPlayer3.current;
        progressBar = progressBar3.current;
        break;
      case 4:
        audioPlayer = audioPlayer4.current;
        progressBar = progressBar4.current;
        break;
      default:
        break;
    }

    audioPlayer.currentTime = progressBar.value;
    changePlayerCurrentTime(index);
  };

  const changePlayerCurrentTime = (index) => {
    const progressBar = (() => {
      switch (index) {
        case 1:
          return progressBar1.current;
        case 2:
          return progressBar2.current;
        case 3:
          return progressBar3.current;
        case 4:
          return progressBar4.current;
        default:
          return null;
      }
    })();

    if (progressBar) {
      let selectedDuration;

      switch (index) {
        case 1:
          selectedDuration = duration1;
          break;
        case 2:
          selectedDuration = duration2;
          break;
        case 3:
          selectedDuration = duration3;
          break;
        case 4:
          selectedDuration = duration4;
          break;
        default:
          break;
      }

      progressBar.style.setProperty('--seek-before-width', `${progressBar.value / selectedDuration * 100}%`);

      switch (index) {
        case 1:
          setCurrentTime1(progressBar.value);
          break;
        case 2:
          setCurrentTime2(progressBar.value);
          break;
        case 3:
          setCurrentTime3(progressBar.value);
          break;
        case 4:
          setCurrentTime4(progressBar.value);
          break;
        default:
          break;
      }
    }
  };

  const backThirty = (index) => {
    const progressBar = (() => {
      switch (index) {
        case 1:
          return progressBar1.current;
        case 2:
          return progressBar2.current;
        case 3:
          return progressBar3.current;
        case 4:
          return progressBar4.current;
        default:
          return null;
      }
    })();

    if (progressBar) {
      progressBar.value = Number(progressBar.value - 30);
      changeRange(index);
    }
  };

  const forwardThirty = (index) => {
    const audioPlayer = (() => {
      switch (index) {
        case 1:
          return audioPlayer1.current;
        case 2:
          return audioPlayer2.current;
        case 3:
          return audioPlayer3.current;
        case 4:
          return audioPlayer4.current;
        default:
          return null;
      }
    })();

    const progressBar = (() => {
      switch (index) {
        case 1:
          return progressBar1.current;
        case 2:
          return progressBar2.current;
        case 3:
          return progressBar3.current;
        case 4:
          return progressBar4.current;
        default:
          return null;
      }
    })();

    if (audioPlayer && progressBar) {
      const newTime = audioPlayer.currentTime + 30;
      let selectedDuration;
      switch (index) {
        case 1:
          selectedDuration = duration1;
          break;
        case 2:
          selectedDuration = duration2;
          break;
        case 3:
          selectedDuration = duration3;
          break;
        case 4:
          selectedDuration = duration4;
          break;
        default:
          break;
      }

      if (newTime <= selectedDuration) {
        audioPlayer.currentTime = newTime;
        progressBar.value = newTime;
        changePlayerCurrentTime(index);
      }
    }
  };

  return (
    <Container>
      <section className="onePodcast">
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">La rue et le système D</h3>
              <p className="audioPlayer__date">Enregistré en avril 2018</p>
            </header>
            <p>
              Quels sont les regards, les préjugés, les réalités que vivent les jeunes sans logement propriétaires de chiens&nbsp;?<br />
              Comment faire pour trouver un logement avec un chien&nbsp;?<br />
              Peut-on accéder aux bâtiments publics&nbsp;?<br />
              Sont-ils aidés dans les démarches administratives&nbsp;?<br />
              Quels sont les critères de discrimination auxquels ces jeunes sont confrontés&nbsp;?
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer4} src={audio4} preload="metadata" onLoadedData={() => onLoadedMetadata(4)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(4)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(4)} className="audioPlayer__main-btn">
                  {isPlaying4 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(4)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime4)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar4} onChange={() => changeRange(4)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration4 && !Number.isNaN(duration4)) && calculateTime(duration4)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(4)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(4)} className="audioPlayer__main-btn">
                  {isPlaying4 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(4)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Jeunes à la rue avec chiens</h3>
              <p className="audioPlayer__date">Enregistré le 14 mars 2018</p>
            </header>
            <p>
              Quels sont les regards, les préjugés, les réalités que vivent les jeunes sans logement propriétaires de chiens&nbsp;?<br />
              Comment faire pour trouver un logement avec un chien&nbsp;?<br />
              Peut-on accéder aux bâtiments publics&nbsp;?<br />
              Sont-ils aidés dans les démarches administratives&nbsp;?<br />
              Quels sont les critères de discrimination auxquels ces jeunes sont confrontés&nbsp;?
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer3} src={audio3} preload="metadata" onLoadedData={() => onLoadedMetadata(3)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(3)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(3)} className="audioPlayer__main-btn">
                  {isPlaying3 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(3)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime3)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar3} onChange={() => changeRange(3)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration3 && !Number.isNaN(duration3)) && calculateTime(duration3)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(3)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(3)} className="audioPlayer__main-btn">
                  {isPlaying3 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(3)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Les relations affectives et sexuelles quand on est à la rue</h3>
              <p className="audioPlayer__date">Enregistré en février 2018</p>
            </header>
            <p>
              Quand on n'a pas de toit, comment vit-on nos relations avec les autres&nbsp;?<br />
              Aimer, s'aimer, être aimé-e...<br />
              Comment avoir une vie affective et/ou sexuelle quand on est privé d'intimité&nbsp;?<br />
              Comment les lieux d'hébergement permettent-ils ou pas de vivre sa sexualité&nbsp;?<br />
              Comment construire des amitiés quand on vit dans la rue&nbsp;?<br />
              A quels risques est-on confrontés&nbsp;?<br />
              Comment protéger sa santé physique et mentale&nbsp;?...
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer2} src={audio2} preload="metadata" onLoadedData={() => onLoadedMetadata(2)} />

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
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">SDF, Police Municipale et Centre-ville</h3>
              <p className="audioPlayer__date">Enregistré le 8 novembre 2017</p>
            </header>
            <p>
              Le centre-ville de Grenoble est un lieu qui cristallise les tensions entre personnes en errance, habitant-e-s et commerçant-e-s.<br />
              Quels sont les besoins, les réalités et les revendications des un-e-s et des autres&nbsp;?<br />
              Quel est le rôle de la Police Municipale vis-à-vis des personnes en errance&nbsp;?<br />
              Quelles sont les pratiques, les pouvoirs et les droits de chacun-e&nbsp;?
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer1} src={audio1} preload="metadata" onLoadedData={() => onLoadedMetadata(1)} />

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
      </section>
    </Container>
  );
}

export default OnePodcast;
