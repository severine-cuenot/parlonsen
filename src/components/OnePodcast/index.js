/* eslint-disable no-unused-vars */
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
import audio5 from '../../../public/mp3/201809_manche_taf.mp3';
import audio6 from '../../../public/mp3/201811_dormir_hiver.mp3';
import audio7 from '../../../public/mp3/201901_sac_a_dos.mp3';
import audio8 from '../../../public/mp3/201902_guichet.mp3';

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

  // Player audio5
  const [isPlaying5, setIsPlaying5] = useState(false);
  const [currentTime5, setCurrentTime5] = useState(0);
  const [duration5, setDuration5] = useState(0);

  const audioPlayer5 = useRef();
  const progressBar5 = useRef();
  const animationRef5 = useRef();

  // Player audio6
  const [isPlaying6, setIsPlaying6] = useState(false);
  const [currentTime6, setCurrentTime6] = useState(0);
  const [duration6, setDuration6] = useState(0);

  const audioPlayer6 = useRef();
  const progressBar6 = useRef();
  const animationRef6 = useRef();

  // Player audio7
  const [isPlaying7, setIsPlaying7] = useState(false);
  const [currentTime7, setCurrentTime7] = useState(0);
  const [duration7, setDuration7] = useState(0);

  const audioPlayer7 = useRef();
  const progressBar7 = useRef();
  const animationRef7 = useRef();

  // Player audio8
  const [isPlaying8, setIsPlaying8] = useState(false);
  const [currentTime8, setCurrentTime8] = useState(0);
  const [duration8, setDuration8] = useState(0);

  const audioPlayer8 = useRef();
  const progressBar8 = useRef();
  const animationRef8 = useRef();

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
    else if (index === 5) {
      setDuration5(Math.floor(audioPlayer5.current.duration));
    }
    else if (index === 6) {
      setDuration6(Math.floor(audioPlayer6.current.duration));
    }
    else if (index === 7) {
      setDuration7(Math.floor(audioPlayer7.current.duration));
    }
    else if (index === 8) {
      setDuration8(Math.floor(audioPlayer8.current.duration));
    }
  };

  useEffect(() => {
    const seconds = Math.floor(audioPlayer1.current.duration);
    setDuration1(seconds);
    progressBar1.current.max = seconds;
    progressBar2.current.max = Math.floor(audioPlayer2.current.duration);
    progressBar3.current.max = Math.floor(audioPlayer3.current.duration);
    progressBar4.current.max = Math.floor(audioPlayer4.current.duration);
    progressBar5.current.max = Math.floor(audioPlayer5.current.duration);
    progressBar6.current.max = Math.floor(audioPlayer6.current.duration);
    progressBar7.current.max = Math.floor(audioPlayer7.current.duration);
    progressBar8.current.max = Math.floor(audioPlayer8.current.duration);
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
    // Player audio5
    audioPlayer5?.current?.loadedmetadata,
    audioPlayer5?.current?.readyState,
    // Player audio6
    audioPlayer6?.current?.loadedmetadata,
    audioPlayer6?.current?.readyState,
    // Player audio7
    audioPlayer7?.current?.loadedmetadata,
    audioPlayer7?.current?.readyState,
    // Player audio8
    audioPlayer8?.current?.loadedmetadata,
    audioPlayer8?.current?.readyState,
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
        progressBar = progressBar4.current;
        animationRef = animationRef4;
        break;
      case 5:
        prevValue = isPlaying5;
        setIsPlaying5(!prevValue);
        audioPlayer = audioPlayer5.current;
        progressBar = progressBar5.current;
        animationRef = animationRef5;
        break;
      case 6:
        prevValue = isPlaying6;
        setIsPlaying6(!prevValue);
        audioPlayer = audioPlayer6.current;
        progressBar = progressBar6.current;
        animationRef = animationRef6;
        break;
      case 7:
        prevValue = isPlaying7;
        setIsPlaying7(!prevValue);
        audioPlayer = audioPlayer7.current;
        progressBar = progressBar7.current;
        animationRef = animationRef7;
        break;
      case 8:
        prevValue = isPlaying8;
        setIsPlaying8(!prevValue);
        audioPlayer = audioPlayer8.current;
        progressBar = progressBar8.current;
        animationRef = animationRef8;
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
      case 5:
        audioPlayer = audioPlayer5.current;
        progressBar = progressBar5.current;
        break;
      case 6:
        audioPlayer = audioPlayer6.current;
        progressBar = progressBar6.current;
        break;
      case 7:
        audioPlayer = audioPlayer7.current;
        progressBar = progressBar7.current;
        break;
      case 8:
        audioPlayer = audioPlayer8.current;
        progressBar = progressBar8.current;
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
      case 5:
        audioPlayer = audioPlayer5.current;
        progressBar = progressBar5.current;
        break;
      case 6:
        audioPlayer = audioPlayer6.current;
        progressBar = progressBar6.current;
        break;
      case 7:
        audioPlayer = audioPlayer7.current;
        progressBar = progressBar7.current;
        break;
      case 8:
        audioPlayer = audioPlayer8.current;
        progressBar = progressBar8.current;
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
        case 5:
          return progressBar5.current;
        case 6:
          return progressBar6.current;
        case 7:
          return progressBar7.current;
        case 8:
          return progressBar8.current;
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
        case 5:
          selectedDuration = duration5;
          break;
        case 6:
          selectedDuration = duration6;
          break;
        case 7:
          selectedDuration = duration7;
          break;
        case 8:
          selectedDuration = duration8;
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
        case 5:
          setCurrentTime5(progressBar.value);
          break;
        case 6:
          setCurrentTime6(progressBar.value);
          break;
        case 7:
          setCurrentTime7(progressBar.value);
          break;
        case 8:
          setCurrentTime8(progressBar.value);
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
        case 5:
          return progressBar5.current;
        case 6:
          return progressBar6.current;
        case 7:
          return progressBar7.current;
        case 8:
          return progressBar8.current;
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
        case 5:
          return audioPlayer5.current;
        case 6:
          return audioPlayer6.current;
        case 7:
          return audioPlayer7.current;
        case 8:
          return audioPlayer8.current;
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
        case 5:
          return progressBar5.current;
        case 6:
          return progressBar6.current;
        case 7:
          return progressBar7.current;
        case 8:
          return progressBar8.current;
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
        case 5:
          selectedDuration = duration5;
          break;
        case 6:
          selectedDuration = duration6;
          break;
        case 7:
          selectedDuration = duration7;
          break;
        case 8:
          selectedDuration = duration8;
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
              <h3 className="header">Des deux côtés du guichet</h3>
              <p className="audioPlayer__date">Enregistré en février 2019</p>
            </header>
            <p>
              Personnes à la rue ou en galère/Administrations, lieux d'accueil, travailleurs sociaux, bénévoles&nbsp;: comment on se regarde, comment on se parle&nbsp;?<br />
              Quand on est à la rue ou dans la précarité, on rencontre des professionnels et des bénévoles de différentes structures.<br />
              Quels regards pèsent sur nous&nbsp;? Comment on nous parle&nbsp;? Quelles postures nous renforcent&nbsp;? Lesquelles nous fragilisent&nbsp;? Quel impact sur l'accès au droit&nbsp;?<br />
              Quand on est travailleur social, bénévole, salarié, stagiaire, travailleur pair...<br />
              Qu'est-ce qu'on apprend, comment on s'y prend, comment on se sent&nbsp;?...<br />
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer8} src={audio8} preload="metadata" onLoadedData={() => onLoadedMetadata(8)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(8)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(8)} className="audioPlayer__main-btn">
                  {isPlaying8 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(8)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time / duration */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime8)} / {(duration8 && !Number.isNaN(duration8)) && calculateTime(duration8)}
                </div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar8} onChange={() => changeRange(8)} />
                </div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(8)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(8)} className="audioPlayer__main-btn">
                  {isPlaying8 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(8)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Tu mets quoi dans ton sac à dos&nbsp;?</h3>
              <p className="audioPlayer__date">Enregistré en janvier 2019</p>
            </header>
            <p>
              Quand on n'a pas de maison, de quoi a-t-on besoin pour survivre à la rue&nbsp;?<br />
              Où le trouve-ton, comment le transporte-t-on&nbsp;?<br />
              Où est-il possible de poser son sac à Grenoble&nbsp;?
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer7} src={audio7} preload="metadata" onLoadedData={() => onLoadedMetadata(7)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(7)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(7)} className="audioPlayer__main-btn">
                  {isPlaying7 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(7)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time / duration */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime7)} / {(duration7 && !Number.isNaN(duration7)) && calculateTime(duration7)}
                </div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar7} onChange={() => changeRange(7)} />
                </div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(7)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(7)} className="audioPlayer__main-btn">
                  {isPlaying7 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(7)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Tu dors où cet hiver&nbsp;?</h3>
              <p className="audioPlayer__date">Enregistré en novembre 2018</p>
            </header>
            <p>
              Nouvelles lois, trêve hivernale, accès à l'hébergement, risques d'expulsions...<br />
              Qu'est-ce qui s'annonce cet hiver à Grenoble pour les personnes à la rue ou en précarité de logement&nbsp;?<br />
              Quelles sont les portes auxquelles on peut toquer, quelles sont les difficultés rencontrées dans l'accès à l'hébergement, quel avenir pour le squat&nbsp;?...<br />
              Face au désengagement croissant de l'État comment les collectivités territoriales réagissent elles&nbsp;?
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer6} src={audio6} preload="metadata" onLoadedData={() => onLoadedMetadata(6)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(6)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(6)} className="audioPlayer__main-btn">
                  {isPlaying6 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(6)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time / duration */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime6)} / {(duration6 && !Number.isNaN(duration6)) && calculateTime(duration6)}
                </div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar6} onChange={() => changeRange(6)} />
                </div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(6)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(6)} className="audioPlayer__main-btn">
                  {isPlaying6 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(6)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">La manche, c'est du taf&nbsp;!</h3>
              <p className="audioPlayer__date">Enregistré en septembre 2018</p>
            </header>
            <p>
              Manches passives ou actives, parfois agressives ou festives, sont elles toutes légales&nbsp;?<br />
              La manche comme unique revenu ou complément inévitable d'un maigre salaire ou de droits sociaux insuffisants&nbsp;?<br />
              A quels regards et attitudes font face ceux qui demandent l'aumône&nbsp;?<br />
              Et au fait ça rapporte combien de faire la manche&nbsp;?...
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer5} src={audio5} preload="metadata" onLoadedData={() => onLoadedMetadata(5)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(5)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(5)} className="audioPlayer__main-btn">
                  {isPlaying5 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(5)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time / duration */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime5)} / {(duration5 && !Number.isNaN(duration5)) && calculateTime(duration5)}
                </div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar5} onChange={() => changeRange(5)} />
                </div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(5)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(5)} className="audioPlayer__main-btn">
                  {isPlaying5 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(5)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">La rue et le système D</h3>
              <p className="audioPlayer__date">Enregistré en avril 2018</p>
            </header>
            <p>
              Comment se débrouille-t-on pour manger, s'abriter, se chauffer, trouver de l'argent, vivre des relations quand on n'a pas de toit&nbsp;?<br />
              Les techniques sont-elles les mêmes pour les hommes et pour les femmes&nbsp;?<br />
              Le système D, c'est mieux tout seul ou en groupe&nbsp;?<br />
              Système D opposé ou complément de l'assistance sociale&nbsp;?
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
