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
import audio9 from '../../../public/mp3/20190314_apres_hiver.mp3';

import audio11 from '../../../public/mp3/20190613_vacances.mp3';
import audio12 from '../../../public/mp3/20190912_guide_galere.mp3';
import audio13 from '../../../public/mp3/201910_douche_ciel.mp3';
import audio14 from '../../../public/mp3/201911_exclusions.mp3';
import audio15 from '../../../public/mp3/202001_regles_lieu.mp3';
import audio16 from '../../../public/mp3/202002_nouvelles_rue_hiver.mp3';

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

  // Player audio9
  const [isPlaying9, setIsPlaying9] = useState(false);
  const [currentTime9, setCurrentTime9] = useState(0);
  const [duration9, setDuration9] = useState(0);

  const audioPlayer9 = useRef();
  const progressBar9 = useRef();
  const animationRef9 = useRef();

  // Player audio11
  const [isPlaying11, setIsPlaying11] = useState(false);
  const [currentTime11, setCurrentTime11] = useState(0);
  const [duration11, setDuration11] = useState(0);

  const audioPlayer11 = useRef();
  const progressBar11 = useRef();
  const animationRef11 = useRef();

  // Player audio12
  const [isPlaying12, setIsPlaying12] = useState(false);
  const [currentTime12, setCurrentTime12] = useState(0);
  const [duration12, setDuration12] = useState(0);

  const audioPlayer12 = useRef();
  const progressBar12 = useRef();
  const animationRef12 = useRef();

  // Player audio13
  const [isPlaying13, setIsPlaying13] = useState(false);
  const [currentTime13, setCurrentTime13] = useState(0);
  const [duration13, setDuration13] = useState(0);

  const audioPlayer13 = useRef();
  const progressBar13 = useRef();
  const animationRef13 = useRef();

  // Player audio14
  const [isPlaying14, setIsPlaying14] = useState(false);
  const [currentTime14, setCurrentTime14] = useState(0);
  const [duration14, setDuration14] = useState(0);

  const audioPlayer14 = useRef();
  const progressBar14 = useRef();
  const animationRef14 = useRef();

  // Player audio15
  const [isPlaying15, setIsPlaying15] = useState(false);
  const [currentTime15, setCurrentTime15] = useState(0);
  const [duration15, setDuration15] = useState(0);

  const audioPlayer15 = useRef();
  const progressBar15 = useRef();
  const animationRef15 = useRef();

  // Player audio16
  const [isPlaying16, setIsPlaying16] = useState(false);
  const [currentTime16, setCurrentTime16] = useState(0);
  const [duration16, setDuration16] = useState(0);

  const audioPlayer16 = useRef();
  const progressBar16 = useRef();
  const animationRef16 = useRef();

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
    else if (index === 9) {
      setDuration9(Math.floor(audioPlayer9.current.duration));
    }
    else if (index === 11) {
      setDuration11(Math.floor(audioPlayer11.current.duration));
    }
    else if (index === 12) {
      setDuration12(Math.floor(audioPlayer12.current.duration));
    }
    else if (index === 13) {
      setDuration13(Math.floor(audioPlayer13.current.duration));
    }
    else if (index === 14) {
      setDuration14(Math.floor(audioPlayer14.current.duration));
    }
    else if (index === 15) {
      setDuration15(Math.floor(audioPlayer15.current.duration));
    }
    else if (index === 16) {
      setDuration16(Math.floor(audioPlayer16.current.duration));
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
    progressBar9.current.max = Math.floor(audioPlayer9.current.duration);
    progressBar11.current.max = Math.floor(audioPlayer11.current.duration);
    progressBar12.current.max = Math.floor(audioPlayer12.current.duration);
    progressBar13.current.max = Math.floor(audioPlayer13.current.duration);
    progressBar14.current.max = Math.floor(audioPlayer14.current.duration);
    progressBar15.current.max = Math.floor(audioPlayer15.current.duration);
    progressBar16.current.max = Math.floor(audioPlayer16.current.duration);
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
    // Player audio9
    audioPlayer9?.current?.loadedmetadata,
    audioPlayer9?.current?.readyState,
    // Player audio11
    audioPlayer11?.current?.loadedmetadata,
    audioPlayer11?.current?.readyState,
    // Player audio12
    audioPlayer12?.current?.loadedmetadata,
    audioPlayer12?.current?.readyState,
    // Player audio13
    audioPlayer13?.current?.loadedmetadata,
    audioPlayer13?.current?.readyState,
    // Player audio14
    audioPlayer14?.current?.loadedmetadata,
    audioPlayer14?.current?.readyState,
    // Player audio15
    audioPlayer15?.current?.loadedmetadata,
    audioPlayer15?.current?.readyState,
    // Player audio16
    audioPlayer16?.current?.loadedmetadata,
    audioPlayer16?.current?.readyState,
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
      case 9:
        prevValue = isPlaying9;
        setIsPlaying9(!prevValue);
        audioPlayer = audioPlayer9.current;
        progressBar = progressBar9.current;
        animationRef = animationRef9;
        break;
      case 11:
        prevValue = isPlaying11;
        setIsPlaying11(!prevValue);
        audioPlayer = audioPlayer11.current;
        progressBar = progressBar11.current;
        animationRef = animationRef11;
        break;
      case 12:
        prevValue = isPlaying12;
        setIsPlaying12(!prevValue);
        audioPlayer = audioPlayer12.current;
        progressBar = progressBar12.current;
        animationRef = animationRef12;
        break;
      case 13:
        prevValue = isPlaying13;
        setIsPlaying13(!prevValue);
        audioPlayer = audioPlayer13.current;
        progressBar = progressBar13.current;
        animationRef = animationRef13;
        break;
      case 14:
        prevValue = isPlaying14;
        setIsPlaying14(!prevValue);
        audioPlayer = audioPlayer14.current;
        progressBar = progressBar14.current;
        animationRef = animationRef14;
        break;
      case 15:
        prevValue = isPlaying15;
        setIsPlaying15(!prevValue);
        audioPlayer = audioPlayer15.current;
        progressBar = progressBar15.current;
        animationRef = animationRef15;
        break;
      case 16:
        prevValue = isPlaying16;
        setIsPlaying16(!prevValue);
        audioPlayer = audioPlayer16.current;
        progressBar = progressBar16.current;
        animationRef = animationRef16;
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
      case 9:
        audioPlayer = audioPlayer9.current;
        progressBar = progressBar9.current;
        break;
      case 11:
        audioPlayer = audioPlayer11.current;
        progressBar = progressBar11.current;
        break;
      case 12:
        audioPlayer = audioPlayer12.current;
        progressBar = progressBar12.current;
        break;
      case 13:
        audioPlayer = audioPlayer13.current;
        progressBar = progressBar13.current;
        break;
      case 14:
        audioPlayer = audioPlayer14.current;
        progressBar = progressBar14.current;
        break;
      case 15:
        audioPlayer = audioPlayer15.current;
        progressBar = progressBar15.current;
        break;
      case 16:
        audioPlayer = audioPlayer16.current;
        progressBar = progressBar16.current;
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
      case 9:
        audioPlayer = audioPlayer9.current;
        progressBar = progressBar9.current;
        break;
      case 11:
        audioPlayer = audioPlayer11.current;
        progressBar = progressBar11.current;
        break;
      case 12:
        audioPlayer = audioPlayer12.current;
        progressBar = progressBar12.current;
        break;
      case 13:
        audioPlayer = audioPlayer13.current;
        progressBar = progressBar13.current;
        break;
      case 14:
        audioPlayer = audioPlayer14.current;
        progressBar = progressBar14.current;
        break;
      case 15:
        audioPlayer = audioPlayer15.current;
        progressBar = progressBar15.current;
        break;
      case 16:
        audioPlayer = audioPlayer16.current;
        progressBar = progressBar16.current;
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
        case 9:
          return progressBar9.current;
        case 11:
          return progressBar11.current;
        case 12:
          return progressBar12.current;
        case 13:
          return progressBar13.current;
        case 14:
          return progressBar14.current;
        case 15:
          return progressBar15.current;
        case 16:
          return progressBar16.current;
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
        case 9:
          selectedDuration = duration9;
          break;
        case 11:
          selectedDuration = duration11;
          break;
        case 12:
          selectedDuration = duration12;
          break;
        case 13:
          selectedDuration = duration13;
          break;
        case 14:
          selectedDuration = duration14;
          break;
        case 15:
          selectedDuration = duration15;
          break;
        case 16:
          selectedDuration = duration16;
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
        case 9:
          setCurrentTime9(progressBar.value);
          break;
        case 11:
          setCurrentTime11(progressBar.value);
          break;
        case 12:
          setCurrentTime12(progressBar.value);
          break;
        case 13:
          setCurrentTime13(progressBar.value);
          break;
        case 14:
          setCurrentTime14(progressBar.value);
          break;
        case 15:
          setCurrentTime15(progressBar.value);
          break;
        case 16:
          setCurrentTime16(progressBar.value);
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
        case 9:
          return progressBar9.current;
        case 11:
          return progressBar11.current;
        case 12:
          return progressBar12.current;
        case 13:
          return progressBar13.current;
        case 14:
          return progressBar14.current;
        case 15:
          return progressBar15.current;
        case 16:
          return progressBar16.current;
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
        case 9:
          return audioPlayer9.current;
        case 11:
          return audioPlayer11.current;
        case 12:
          return audioPlayer12.current;
        case 13:
          return audioPlayer13.current;
        case 14:
          return audioPlayer14.current;
        case 15:
          return audioPlayer15.current;
        case 16:
          return audioPlayer16.current;
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
        case 9:
          return progressBar9.current;
        case 11:
          return progressBar11.current;
        case 12:
          return progressBar12.current;
        case 13:
          return progressBar13.current;
        case 14:
          return progressBar14.current;
        case 15:
          return progressBar15.current;
        case 16:
          return progressBar16.current;
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
        case 9:
          selectedDuration = duration9;
          break;
        case 11:
          selectedDuration = duration11;
          break;
        case 12:
          selectedDuration = duration12;
          break;
        case 13:
          selectedDuration = duration13;
          break;
        case 14:
          selectedDuration = duration14;
          break;
        case 15:
          selectedDuration = duration15;
          break;
        case 16:
          selectedDuration = duration16;
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
              <h3 className="header">Quelles nouvelles de la rue&nbsp;?</h3>
              <p className="audioPlayer__date">Enregistré le 25 février 2020</p>
            </header>
            <p>
              SDF, précaires, pauvres, mal-logé-e-s...<br />
              Que se passe-t-il dans la rue cet hiver à Grenoble&nbsp;?<br />
              Quelles sont les actualités, les colères, les alertes&nbsp;?<br />
              Avantages et inconvénients du nouvel accueil de nuit 79 rue Stalingrad à Grenoble&nbsp;?<br />
              Retour sur le projet de la maison conventionnée "Le Tremplin".
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer16} src={audio16} preload="metadata" onLoadedData={() => onLoadedMetadata(16)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(16)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(16)} className="audioPlayer__main-btn">
                  {isPlaying16 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(16)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime16)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar16} onChange={() => changeRange(16)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration16 && !Number.isNaN(duration16)) && calculateTime(duration16)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(16)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(16)} className="audioPlayer__main-btn">
                  {isPlaying16 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(16)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Le Lîeu, quelles règles du jeu&nbsp;?</h3>
              <p className="audioPlayer__date">Enregistré le 21 janvier 2020</p>
            </header>
            <p>
              Le Lîeu, c'est un projet de croisements et d'échanges ouvert à tous-tes, cogéré par les habitants de la ville et de la rue, suffisamment ouvert et disponible pour que des idées et projets y trouvent leur place. Un lieu de rencontre, de bricolage&nbsp;; un lieu où se poser, trouver de l'information, s'entraider dans les démarches...<br />
              Ce projet fait suite à La Piscine – Fabrique de Solutions pour l'Habitat, première expérience qui a montré l'intérêt d'un lieu d'expérimentation, de réflexions et de solutions concrètes.<br />
              Situé au 17, rue Abbé Grégoire, Le Lîeu, ce sera un local permanent ouvert à tous-tes, et en particulier aux personnes en grande précarité.<br />
              Le Lîeu, d'où vient-il&nbsp;? Comment fonctionne-t-il&nbsp;? Qu'aimeriez-vous y trouver&nbsp;? Qu'aimeriez-vous y proposer&nbsp;?...<br />
              Le Lîeu a été Lauréat du Budget Participatif Octobre 2017.
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer15} src={audio15} preload="metadata" onLoadedData={() => onLoadedMetadata(15)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(15)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(15)} className="audioPlayer__main-btn">
                  {isPlaying15 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(15)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime15)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar15} onChange={() => changeRange(15)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration15 && !Number.isNaN(duration15)) && calculateTime(duration15)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(15)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(15)} className="audioPlayer__main-btn">
                  {isPlaying15 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(15)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Les exclusions – "tu t'es (encore) fait virer&nbsp;?</h3>
              <p className="audioPlayer__date">Enregistré en novembre 2019</p>
            </header>
            <p>
              Dans les associations, les centres d’hébergement, les accueils de jour, les administrations...<br />
              On peut se faire exclure pour cause de non respect des règles.<br />
              Mais qui fixe les règles&nbsp;?<br />
              Qui les fait appliquer&nbsp;?<br />
              Qui décide des exclusions, pour combien de temps&nbsp;?<br />
              Comment lutter contre l'arbitraire&nbsp;?<br />
              Comment gérer les conflits dans les lieux collectifs&nbsp;?<br />
              Chartes, règlements intérieurs, accords tacites...
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer14} src={audio14} preload="metadata" onLoadedData={() => onLoadedMetadata(14)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(14)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(14)} className="audioPlayer__main-btn">
                  {isPlaying14 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(14)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime14)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar14} onChange={() => changeRange(14)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration14 && !Number.isNaN(duration14)) && calculateTime(duration14)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(14)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(14)} className="audioPlayer__main-btn">
                  {isPlaying14 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(14)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Sous la douche, le ciel</h3>
              <p className="audioPlayer__date">Enregistré en octobre 2019</p>
            </header>
            <p>
              Prendre une douche, laver son linge, trouver de l'eau... Personnes précaires ou en galère, quelle était la situation à Grenoble durant le confinement&nbsp;?<br />
              Aujourd'hui, quelles sont les difficultés pour accéder à l'eau et à l'hygiène&nbsp;?<br />
              En compagnie des agents des douches municipales de Grenoble.
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer13} src={audio13} preload="metadata" onLoadedData={() => onLoadedMetadata(13)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(13)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(13)} className="audioPlayer__main-btn">
                  {isPlaying13 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(13)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime13)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar13} onChange={() => changeRange(13)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration13 && !Number.isNaN(duration13)) && calculateTime(duration13)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(13)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(13)} className="audioPlayer__main-btn">
                  {isPlaying13 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(13)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Un guide de la galère&nbsp;?</h3>
              <p className="audioPlayer__date">Enregistré le 12 septembre 2019</p>
            </header>
            <p>
              Savoir où manger, dormir, se laver, se soigner, poser son sac, faire ses papiers, faire garder son chien, se faire entendre, rencontrer des gens, se défendre...<br />
              Connaître ses droits lorsqu’on est à la rue ou en galère...<br />
              Où trouver les infos&nbsp;? Quels guides existent&nbsp;?<br />
              Faut-il inventer autre chose&nbsp;?
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer12} src={audio12} preload="metadata" onLoadedData={() => onLoadedMetadata(12)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(12)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(12)} className="audioPlayer__main-btn">
                  {isPlaying12 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(12)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime12)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar12} onChange={() => changeRange(12)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration12 && !Number.isNaN(duration12)) && calculateTime(duration12)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(12)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(12)} className="audioPlayer__main-btn">
                  {isPlaying12 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(12)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Tu pars où en vacances&nbsp;?</h3>
              <p className="audioPlayer__date">Enregistré le 13 juin 2019</p>
            </header>
            <p>
              Comment s'annonce l'été pour les personnes à la rue ou en galère&nbsp;?<br />
              Peut-on/veut-on quitter la ville&nbsp;?<br />
              Quelles alternatives pour “partir en vacances”&nbsp;?<br />
              Partir en vacances et revenir en errance.<br />
              Manger, dormir, se soigner, se laver...<br />
              Quelles structures restent ouvertes cet été à Grenoble&nbsp;?
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer11} src={audio11} preload="metadata" onLoadedData={() => onLoadedMetadata(11)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(11)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(11)} className="audioPlayer__main-btn">
                  {isPlaying11 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(11)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime11)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar11} onChange={() => changeRange(11)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration11 && !Number.isNaN(duration11)) && calculateTime(duration11)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(11)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(11)} className="audioPlayer__main-btn">
                  {isPlaying11 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(11)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Une clé, et après&nbsp;? La galère ne s'arrête pas une fois qu'on a un toit</h3>
              <p className="audioPlayer__date">Enregistré le 16 mai 2019</p>
            </header>
            <p>
              <span className="header">MANQUE MP3</span><br />
              Se retrouver seul-e entre quatre murs...<br />
              Payer son appart, ses factures...<br />
              Accéder à ses droits&nbsp;: papiers, santé, travail...<br />
              Affronter les regards des voisins...<br />
              Gérer les relations avec le propriétaire...<br />
              Quelles relations avec ses anciens compagnons de galère...<br />
              Autant des thématiques abordées autour du Plan quinquennal pour le Logement d'abord
              et de la lutte contre le sans-abrisme (2018-2022).
            </p>
            {/* <div className="audioPlayer__player">
              <audio ref={audioPlayer9} src={audio9} preload="metadata" onLoadedData={() => onLoadedMetadata(9)} /> */}

            {/* Buttons for desktop */}
            {/* <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(9)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(9)} className="audioPlayer__main-btn">
                  {isPlaying9 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(9)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div> */}

            {/* <div className="audioPlayer__player-bar"> */}
            {/* current time */}
            {/* <div className="audioPlayer__currentTime">{calculateTime(currentTime9)}</div> */}
            {/* Progress bar */}
            {/* <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar9} onChange={() => changeRange(9)} />
                </div> */}
            {/* duration */}
            {/* <div className="audioPlayer__duration">{(duration9 && !Number.isNaN(duration9)) && calculateTime(duration9)}</div> */}
            {/* </div> */}

            {/* Buttons for mobile */}
            {/* <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(9)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(9)} className="audioPlayer__main-btn">
                  {isPlaying9 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(9)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div> */}
            {/* </div> */}
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Tu dors où après l'hiver&nbsp;?</h3>
              <p className="audioPlayer__date">Enregistré le 14 mars 2019</p>
            </header>
            <p>
              Qu'a-t-on pensé du dispositif d'urgence cet hiver&nbsp;? Comment l'ont vécu les personnes hébergées&nbsp;? Quelles conditions de vie dans les centres&nbsp;? Du changement par rapport aux hivers précédents&nbsp;? Les acteurs de l'hébergement d'urgence ont-ils des solutions pour les personnes accueillies cet hiver&nbsp;?<br />
              "Un chez-soi d'abord", "Un logement d'abord"&nbsp;: où en sont les politiques&nbsp;?<br />
              Quels moyens mettre en œuvre pour sensibiliser les pouvoirs publics&nbsp;?<br />
              Avec la participation de Mme Françoise Cloteau, Vice-présidente en charge de l'hébergement à la Metro, et Mme Aurélie Duffey, Responsable Service Gestion du logement social et de l'hébergement à la Metro.
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer9} src={audio9} preload="metadata" onLoadedData={() => onLoadedMetadata(9)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(9)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(9)} className="audioPlayer__main-btn">
                  {isPlaying9 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(9)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime9)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar9} onChange={() => changeRange(9)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration9 && !Number.isNaN(duration9)) && calculateTime(duration9)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(9)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(9)} className="audioPlayer__main-btn">
                  {isPlaying9 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(9)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
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
