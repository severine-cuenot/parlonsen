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
import audio1 from '../../../public/mp3/unipopia1.mp3';
import audio2 from '../../../public/mp3/unipopia2.mp3';
import audio3 from '../../../public/mp3/unipopia3.mp3';
import audio4 from '../../../public/mp3/unipopia4.mp3';
import audio5 from '../../../public/mp3/unipopia5.mp3';
import audio6 from '../../../public/mp3/unipopia6.mp3';
import audio7 from '../../../public/mp3/unipopia7.mp3';
import audio8 from '../../../public/mp3/unipopia8.mp3';
import audio9 from '../../../public/mp3/unipopia9.mp3';
import audio10 from '../../../public/mp3/unipopia10.mp3';
import audio11 from '../../../public/mp3/unipopia11.mp3';
import audio12 from '../../../public/mp3/unipopia12.mp3';
import audio13 from '../../../public/mp3/unipopia13.mp3';
import audio14 from '../../../public/mp3/unipopia14.mp3';
import audio15 from '../../../public/mp3/unipopia15.mp3';
import audio16 from '../../../public/mp3/unipopia16.mp3';
import audio17 from '../../../public/mp3/unipopia17.mp3';
import audio18 from '../../../public/mp3/unipopia18.mp3';
import audio19 from '../../../public/mp3/unipopia19.mp3';
import audio20 from '../../../public/mp3/unipopia20.mp3';
import audio21 from '../../../public/mp3/unipopia21.mp3';

function UnipopiaPodcats() {
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

  // Player audio10
  const [isPlaying10, setIsPlaying10] = useState(false);
  const [currentTime10, setCurrentTime10] = useState(0);
  const [duration10, setDuration10] = useState(0);

  const audioPlayer10 = useRef();
  const progressBar10 = useRef();
  const animationRef10 = useRef();

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

  // Player audio17
  const [isPlaying17, setIsPlaying17] = useState(false);
  const [currentTime17, setCurrentTime17] = useState(0);
  const [duration17, setDuration17] = useState(0);

  const audioPlayer17 = useRef();
  const progressBar17 = useRef();
  const animationRef17 = useRef();

  // Player audio18
  const [isPlaying18, setIsPlaying18] = useState(false);
  const [currentTime18, setCurrentTime18] = useState(0);
  const [duration18, setDuration18] = useState(0);

  const audioPlayer18 = useRef();
  const progressBar18 = useRef();
  const animationRef18 = useRef();

  // Player audio19
  const [isPlaying19, setIsPlaying19] = useState(false);
  const [currentTime19, setCurrentTime19] = useState(0);
  const [duration19, setDuration19] = useState(0);

  const audioPlayer19 = useRef();
  const progressBar19 = useRef();
  const animationRef19 = useRef();

  // Player audio20
  const [isPlaying20, setIsPlaying20] = useState(false);
  const [currentTime20, setCurrentTime20] = useState(0);
  const [duration20, setDuration20] = useState(0);

  const audioPlayer20 = useRef();
  const progressBar20 = useRef();
  const animationRef20 = useRef();

  // Player audio21
  const [isPlaying21, setIsPlaying21] = useState(false);
  const [currentTime21, setCurrentTime21] = useState(0);
  const [duration21, setDuration21] = useState(0);

  const audioPlayer21 = useRef();
  const progressBar21 = useRef();
  const animationRef21 = useRef();

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
    else if (index === 10) {
      setDuration10(Math.floor(audioPlayer10.current.duration));
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
    else if (index === 17) {
      setDuration17(Math.floor(audioPlayer17.current.duration));
    }
    else if (index === 18) {
      setDuration18(Math.floor(audioPlayer18.current.duration));
    }
    else if (index === 19) {
      setDuration19(Math.floor(audioPlayer19.current.duration));
    }
    else if (index === 20) {
      setDuration20(Math.floor(audioPlayer20.current.duration));
    }
    else if (index === 21) {
      setDuration21(Math.floor(audioPlayer21.current.duration));
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
    progressBar10.current.max = Math.floor(audioPlayer10.current.duration);
    progressBar11.current.max = Math.floor(audioPlayer11.current.duration);
    progressBar12.current.max = Math.floor(audioPlayer12.current.duration);
    progressBar13.current.max = Math.floor(audioPlayer13.current.duration);
    progressBar14.current.max = Math.floor(audioPlayer14.current.duration);
    progressBar15.current.max = Math.floor(audioPlayer15.current.duration);
    progressBar16.current.max = Math.floor(audioPlayer16.current.duration);
    progressBar17.current.max = Math.floor(audioPlayer17.current.duration);
    progressBar18.current.max = Math.floor(audioPlayer18.current.duration);
    progressBar19.current.max = Math.floor(audioPlayer19.current.duration);
    progressBar20.current.max = Math.floor(audioPlayer20.current.duration);
    progressBar21.current.max = Math.floor(audioPlayer21.current.duration);
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
    // Player audio10
    audioPlayer10?.current?.loadedmetadata,
    audioPlayer10?.current?.readyState,
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
    // Player audio17
    audioPlayer17?.current?.loadedmetadata,
    audioPlayer17?.current?.readyState,
    // Player audio18
    audioPlayer18?.current?.loadedmetadata,
    audioPlayer18?.current?.readyState,
    // Player audio19
    audioPlayer19?.current?.loadedmetadata,
    audioPlayer19?.current?.readyState,
    // Player audio20
    audioPlayer20?.current?.loadedmetadata,
    audioPlayer20?.current?.readyState,
    // Player audio21
    audioPlayer21?.current?.loadedmetadata,
    audioPlayer21?.current?.readyState,
  ]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = (index) => {
    const audioPlayerArray = [
      audioPlayer1.current,
      audioPlayer2.current,
      audioPlayer3.current,
      audioPlayer4.current,
      audioPlayer5.current,
      audioPlayer6.current,
      audioPlayer7.current,
      audioPlayer8.current,
      audioPlayer9.current,
      audioPlayer10.current,
      audioPlayer11.current,
      audioPlayer12.current,
      audioPlayer13.current,
      audioPlayer14.current,
      audioPlayer15.current,
      audioPlayer16.current,
      audioPlayer17.current,
      audioPlayer18.current,
      audioPlayer19.current,
      audioPlayer20.current,
      audioPlayer21.current,
    ];

    const progressBarArray = [
      progressBar1.current,
      progressBar2.current,
      progressBar3.current,
      progressBar4.current,
      progressBar5.current,
      progressBar6.current,
      progressBar7.current,
      progressBar8.current,
      progressBar9.current,
      progressBar10.current,
      progressBar11.current,
      progressBar12.current,
      progressBar13.current,
      progressBar14.current,
      progressBar15.current,
      progressBar16.current,
      progressBar17.current,
      progressBar18.current,
      progressBar19.current,
      progressBar20.current,
      progressBar21.current,
    ];

    const isPlayingArray = [
      isPlaying1,
      isPlaying2,
      isPlaying3,
      isPlaying4,
      isPlaying5,
      isPlaying6,
      isPlaying7,
      isPlaying8,
      isPlaying9,
      isPlaying10,
      isPlaying11,
      isPlaying12,
      isPlaying13,
      isPlaying14,
      isPlaying15,
      isPlaying16,
      isPlaying17,
      isPlaying18,
      isPlaying19,
      isPlaying20,
      isPlaying21,
    ];

    const setIsPlayingArray = [
      setIsPlaying1,
      setIsPlaying2,
      setIsPlaying3,
      setIsPlaying4,
      setIsPlaying5,
      setIsPlaying6,
      setIsPlaying7,
      setIsPlaying8,
      setIsPlaying9,
      setIsPlaying10,
      setIsPlaying11,
      setIsPlaying12,
      setIsPlaying13,
      setIsPlaying14,
      setIsPlaying15,
      setIsPlaying16,
      setIsPlaying17,
      setIsPlaying18,
      setIsPlaying19,
      setIsPlaying20,
      setIsPlaying21,
    ];

    const animationRefArray = [
      animationRef1,
      animationRef2,
      animationRef3,
      animationRef4,
      animationRef5,
      animationRef6,
      animationRef7,
      animationRef8,
      animationRef9,
      animationRef10,
      animationRef11,
      animationRef12,
      animationRef13,
      animationRef14,
      animationRef15,
      animationRef16,
      animationRef17,
      animationRef18,
      animationRef19,
      animationRef20,
      animationRef21,
    ];

    let prevValue;
    let audioPlayer;
    let progressBar;
    let animationRef;

    if (index >= 1 && index <= 32) {
      prevValue = isPlayingArray[index - 1];
      setIsPlayingArray[index - 1](!prevValue);
      audioPlayer = audioPlayerArray[index - 1];
      progressBar = progressBarArray[index - 1];
      animationRef = animationRefArray[index - 1];
    }

    if (audioPlayer && progressBar && animationRef) {
      if (!prevValue) {
        audioPlayer.play();
        animationRef.current = requestAnimationFrame(() => whilePlaying(index, animationRef));
      }
      else {
        audioPlayer.pause();
        cancelAnimationFrame(animationRef.current);
      }
    }
  };

  const whilePlaying = (index, animationRef) => {
    const audioPlayerArray = [
      audioPlayer1.current,
      audioPlayer2.current,
      audioPlayer3.current,
      audioPlayer4.current,
      audioPlayer5.current,
      audioPlayer6.current,
      audioPlayer7.current,
      audioPlayer8.current,
      audioPlayer9.current,
      audioPlayer10.current,
      audioPlayer11.current,
      audioPlayer12.current,
      audioPlayer13.current,
      audioPlayer14.current,
      audioPlayer15.current,
      audioPlayer16.current,
      audioPlayer17.current,
      audioPlayer18.current,
      audioPlayer19.current,
      audioPlayer20.current,
      audioPlayer21.current,
    ];

    const progressBarArray = [
      progressBar1.current,
      progressBar2.current,
      progressBar3.current,
      progressBar4.current,
      progressBar5.current,
      progressBar6.current,
      progressBar7.current,
      progressBar8.current,
      progressBar9.current,
      progressBar10.current,
      progressBar11.current,
      progressBar12.current,
      progressBar13.current,
      progressBar14.current,
      progressBar15.current,
      progressBar16.current,
      progressBar17.current,
      progressBar18.current,
      progressBar19.current,
      progressBar20.current,
      progressBar21.current,
    ];

    const audioPlayer = audioPlayerArray[index - 1];
    const progressBar = progressBarArray[index - 1];

    if (audioPlayer && progressBar && animationRef && animationRef.current) {
      progressBar.value = audioPlayer.currentTime;
      changePlayerCurrentTime(index);

      const progressPercentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      progressBar.style.setProperty('--seek-before-width', `${progressPercentage}%`);
      animationRef.current = requestAnimationFrame(() => whilePlaying(index, animationRef));
    }
  };

  const changeRange = (index) => {
    const audioPlayerArray = [
      audioPlayer1.current,
      audioPlayer2.current,
      audioPlayer3.current,
      audioPlayer4.current,
      audioPlayer5.current,
      audioPlayer6.current,
      audioPlayer7.current,
      audioPlayer8.current,
      audioPlayer9.current,
      audioPlayer10.current,
      audioPlayer11.current,
      audioPlayer12.current,
      audioPlayer13.current,
      audioPlayer14.current,
      audioPlayer15.current,
      audioPlayer16.current,
      audioPlayer17.current,
      audioPlayer18.current,
      audioPlayer19.current,
      audioPlayer20.current,
      audioPlayer21.current,
    ];
    const progressBarArray = [
      progressBar1.current,
      progressBar2.current,
      progressBar3.current,
      progressBar4.current,
      progressBar5.current,
      progressBar6.current,
      progressBar7.current,
      progressBar8.current,
      progressBar9.current,
      progressBar10.current,
      progressBar11.current,
      progressBar12.current,
      progressBar13.current,
      progressBar14.current,
      progressBar15.current,
      progressBar16.current,
      progressBar17.current,
      progressBar18.current,
      progressBar19.current,
      progressBar20.current,
      progressBar21.current,
    ];

    const audioPlayer = audioPlayerArray[index - 1];
    const progressBar = progressBarArray[index - 1];

    if (audioPlayer && progressBar) {
      audioPlayer.currentTime = progressBar.value;
      changePlayerCurrentTime(index);
    }
  };

  const changePlayerCurrentTime = (index) => {
    const progressBarArray = [
      progressBar1.current,
      progressBar2.current,
      progressBar3.current,
      progressBar4.current,
      progressBar5.current,
      progressBar6.current,
      progressBar7.current,
      progressBar8.current,
      progressBar9.current,
      progressBar10.current,
      progressBar11.current,
      progressBar12.current,
      progressBar13.current,
      progressBar14.current,
      progressBar15.current,
      progressBar16.current,
      progressBar17.current,
      progressBar18.current,
      progressBar19.current,
      progressBar20.current,
      progressBar21.current,
    ];

    const progressBar = progressBarArray[index - 1];

    if (progressBar) {
      let selectedDuration = null;

      const durationMap = {
        1: duration1,
        2: duration2,
        3: duration3,
        4: duration4,
        5: duration5,
        6: duration6,
        7: duration7,
        8: duration8,
        9: duration9,
        10: duration10,
        11: duration11,
        12: duration12,
        13: duration13,
        14: duration14,
        15: duration15,
        16: duration16,
        17: duration17,
        18: duration18,
        19: duration19,
        20: duration20,
        21: duration21,
      };

      selectedDuration = durationMap[index];

      if (selectedDuration !== null) {
        progressBar.style.setProperty('--seek-before-width', `${progressBar.value / selectedDuration * 100}%`);

        const setCurrentTimeFunction = `setCurrentTime${index}`;
        if (typeof window[setCurrentTimeFunction] === 'function') {
          window[setCurrentTimeFunction](progressBar.value);
        }
      }
    }
  };

  const backThirty = (index) => {
    const progressBarArray = [
      progressBar1.current,
      progressBar2.current,
      progressBar3.current,
      progressBar4.current,
      progressBar5.current,
      progressBar6.current,
      progressBar7.current,
      progressBar8.current,
      progressBar9.current,
      progressBar10.current,
      progressBar11.current,
      progressBar12.current,
      progressBar13.current,
      progressBar14.current,
      progressBar15.current,
      progressBar16.current,
      progressBar17.current,
      progressBar18.current,
      progressBar19.current,
      progressBar20.current,
      progressBar21.current,
    ];

    const progressBar = progressBarArray[index - 1];

    if (progressBar) {
      progressBar.value -= 30;
      changeRange(index);
    }
  };

  const forwardThirty = (index) => {
    const audioPlayerArray = [
      audioPlayer1.current,
      audioPlayer2.current,
      audioPlayer3.current,
      audioPlayer4.current,
      audioPlayer5.current,
      audioPlayer6.current,
      audioPlayer7.current,
      audioPlayer8.current,
      audioPlayer9.current,
      audioPlayer10.current,
      audioPlayer11.current,
      audioPlayer12.current,
      audioPlayer13.current,
      audioPlayer14.current,
      audioPlayer15.current,
      audioPlayer16.current,
      audioPlayer17.current,
      audioPlayer18.current,
      audioPlayer19.current,
      audioPlayer20.current,
      audioPlayer21.current,
    ];
    const audioPlayer = audioPlayerArray[index - 1] || null;

    const progressBar = (() => {
      const progressBarArray = [
        progressBar1.current,
        progressBar2.current,
        progressBar3.current,
        progressBar4.current,
        progressBar5.current,
        progressBar6.current,
        progressBar7.current,
        progressBar8.current,
        progressBar9.current,
        progressBar10.current,
        progressBar11.current,
        progressBar12.current,
        progressBar13.current,
        progressBar14.current,
        progressBar15.current,
        progressBar16.current,
        progressBar17.current,
        progressBar18.current,
        progressBar19.current,
        progressBar20.current,
        progressBar21.current,
      ];
      return progressBarArray[index - 1] || null;
    })();

    if (audioPlayer && progressBar) {
      const newTime = audioPlayer.currentTime + 30;
      let selectedDuration = null;
      const durationMap = {
        1: duration1,
        2: duration2,
        3: duration3,
        4: duration4,
        5: duration5,
        6: duration6,
        7: duration7,
        8: duration8,
        9: duration9,
        10: duration10,
        11: duration11,
        12: duration12,
        13: duration13,
        14: duration14,
        15: duration15,
        16: duration16,
        17: duration17,
        18: duration18,
        19: duration19,
        20: duration20,
        21: duration21,
      };
      selectedDuration = durationMap[index];
      if (selectedDuration !== null && newTime <= selectedDuration) {
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
              <h3 className="header">Premier jour, les présentations (Partie 1)</h3>
            </header>
            <p>
              Dans ce premier volet nous vous proposons une partie des 18 initiatives présentent&nbsp;:
            </p>
            <p>
              Le Lîeu des habitants de la rue et de la ville&nbsp;; Comité D-Base&nbsp;; LUCSE&nbsp;; Les voisins de Service&nbsp;; Résidence de demain&nbsp;; C Prévu&nbsp;; Street Reporters&nbsp;; Le Chantier&nbsp;; Amelior&nbsp;; Terrain d'entente&nbsp;; Mon chien ma vie&nbsp;; L'Agence du Squat.
            </p>
            <p>
              <em className="onePodcast__em">Musique Burkinabè&nbsp;: Mamadou Kone</em>
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
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Premier jour, les présentations (Partie 2)</h3>
            </header>
            <p>
              Dans cette seconde partie vous pourrez écouter&nbsp;: L'après M&nbsp;; Un Ptit vélo dans la tête&nbsp;;
              Madame RueTabaga&nbsp;; Poya&nbsp;; DAL38&nbsp;; Le38.
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
              <h3 className="header">Deuxième jour&nbsp;; On échange, on propose, on imagine.</h3>
            </header>
            <p>
              Lors de la seconde journée de l'université populaire de la capacitation, les discussions se sont orientées autour des questions, préoccupations ou sujets de recherche que chaque groupe aurait envie de poser sur "la table commune".
            </p>
            <p>
              Après une matinée de discussions en plénière, de petits ateliers se sont formés pour creuser certaines thématiques&nbsp;: comment peser sur le politique et l'institution&nbsp;; comment réfléchir à la notion de travail&nbsp;; que signifie la notion de territoire ou encore comment lutter contre la fatigue ou l'épuisement dans les collectifs lorsqu'on est soi-même en précarité...
            </p>
            <p>
              <em className="onePodcast__em">Chanson&nbsp;: Musicalement (in)correct, Animal.</em>
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
              <h3 className="header">Troisième jour&nbsp;; précaires, chercheurs populaires&nbsp;?</h3>
            </header>
            <p>
              La dernière journée a permis de partager avec d'autres grenoblois les discussions lors du débat public&nbsp;:
              <br />
              "Parlons-en&nbsp;: précaires, chercheurs populaires ?"
            </p>
            <p>
              La rencontre s'appuyait sur "ce que nous savons faire"&nbsp;:
              <br />
              Les capacités, les compétences développées par les groupes dans les différentes villes.
            </p>
            <p>
              Une exposition a été mise en place à partir des dessins, photos, mots, affiches élaborées tout au long des journées précédentes pour alimenter le débat.
            </p>
            <p>
              <em className="onePodcast__em">Chanson&nbsp;: Musicalement (in)correct, Indifférence.</em>
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
              <h3 className="header">Grenoble</h3>
            </header>
            <p>
              Le Parlons-en et Le Lîeu des habitant.e.s de la rue et de la ville.
            </p>
            <p>
              <em className="onePodcast__em">Organisation et animation de l'université</em>
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
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime5)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar5} onChange={() => changeRange(5)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration5 && !Number.isNaN(duration5)) && calculateTime(duration5)}</div>
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
              <h3 className="header">Mon chien ma vie</h3>
            </header>
            <p>
              Venir en aide aux précaires et à leurs animaux
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
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime6)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar6} onChange={() => changeRange(6)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration6 && !Number.isNaN(duration6)) && calculateTime(duration6)}</div>
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
              <h3 className="header">Mme RueTabaga</h3>
            </header>
            <p>
              Éducation populaire par des ateliers de rue.
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
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime7)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar7} onChange={() => changeRange(7)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration7 && !Number.isNaN(duration7)) && calculateTime(duration7)}</div>
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
              <h3 className="header">Un Ptit vélo dans la tête</h3>
            </header>
            <p>
              Pratique et promotion du réemploi et du recyclage du vélo.
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
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime8)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar8} onChange={() => changeRange(8)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration8 && !Number.isNaN(duration8)) && calculateTime(duration8)}</div>
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
              <h3 className="header">LUCSE</h3>
            </header>
            <p>
              Faire du lien inter-luttes et dénoncer l'urbanisme agressif.
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
              <h3 className="header">Le38-Centre Social Tchoukar et les Brigades de Solidarité Populaire</h3>
            </header>
            <p>
              Rassemblement de collectifs et pratique d'autodéfense populaire.
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer10} src={audio10} preload="metadata" onLoadedData={() => onLoadedMetadata(10)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(10)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(10)} className="audioPlayer__main-btn">
                  {isPlaying10 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(10)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime10)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar10} onChange={() => changeRange(10)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration10 && !Number.isNaN(duration10)) && calculateTime(duration10)}</div>
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
              <h3 className="header">Droit Au Logement&nbsp;38 et Les occupant.e.s des Volets Verts</h3>
            </header>
            <p>
              Pour l'application de la loi de réquisition.
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
              <h3 className="header">Le Chantier</h3>
            </header>
            <p>
              Espace vert ouvert.
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
              <h3 className="header">Lyon</h3>
            </header>
            <p>
              Street reporters
            </p>
            <p>
              <em className="onePodcast__em">Enquête de précaires sur le système social.</em>
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
              <h3 className="header">Drôme</h3>
            </header>
            <p>
              D-BASE
            </p>
            <p>
              <em className="onePodcast__em">Équilibre entre travailleurs sociaux et personnes concernées.</em>
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
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar14} onChange={() => changeRange(17)} />
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
              <h3 className="header">Montreuil</h3>
            </header>
            <p>
              AMELIORE
            </p>
            <p>
              <em className="onePodcast__em">Le droit à la biffe, à la solidarité et l'écologie.</em>
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
              <h3 className="header">Saint-Etienne</h3>
            </header>
            <p>
              Terrain d'entente
            </p>
            <p>
              <em className="onePodcast__em">La voix-e des femmes.</em>
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
              <h3 className="header">Marseille</h3>
            </header>
            <p>
              L'Après-M/ La part du peuple
            </p>
            <p>
              <em className="onePodcast__em">Maîtrise des bâtiments de l'ex MacDo et hamburgers sauvages.</em>
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer17} src={audio17} preload="metadata" onLoadedData={() => onLoadedMetadata(17)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(17)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(17)} className="audioPlayer__main-btn">
                  {isPlaying17 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(17)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime17)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar17} onChange={() => changeRange(17)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration17 && !Number.isNaN(duration17)) && calculateTime(duration17)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(17)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(17)} className="audioPlayer__main-btn">
                  {isPlaying17 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(17)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Poya</h3>
            </header>
            <p>
              Afghanes, alphabétisation, Courante, Digne, insertion sociale.
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer18} src={audio18} preload="metadata" onLoadedData={() => onLoadedMetadata(18)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(18)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(18)} className="audioPlayer__main-btn">
                  {isPlaying18 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(18)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime18)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar18} onChange={() => changeRange(18)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration18 && !Number.isNaN(duration18)) && calculateTime(duration18)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(18)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(18)} className="audioPlayer__main-btn">
                  {isPlaying18 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(18)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Belgique</h3>
            </header>
            <p>
              C prévu
            </p>
            <p>
              <em className="onePodcast__em">Rompre la fracture numérique.</em>
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer19} src={audio19} preload="metadata" onLoadedData={() => onLoadedMetadata(19)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(19)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(19)} className="audioPlayer__main-btn">
                  {isPlaying19 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(19)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime19)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar19} onChange={() => changeRange(19)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration19 && !Number.isNaN(duration19)) && calculateTime(duration19)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(19)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(19)} className="audioPlayer__main-btn">
                  {isPlaying19 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(19)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Agence du squat</h3>
            </header>
            <p>
              Pour des squats utiles aux propriétaires et promoteurs immobiliers.
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer20} src={audio20} preload="metadata" onLoadedData={() => onLoadedMetadata(20)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(20)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(20)} className="audioPlayer__main-btn">
                  {isPlaying20 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(20)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime20)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar20} onChange={() => changeRange(20)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration20 && !Number.isNaN(duration20)) && calculateTime(duration20)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(20)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(20)} className="audioPlayer__main-btn">
                  {isPlaying20 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(20)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Periferia</h3>
            </header>
            <p>
              Organisation et animation de l'université.
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer21} src={audio21} preload="metadata" onLoadedData={() => onLoadedMetadata(21)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(21)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(21)} className="audioPlayer__main-btn">
                  {isPlaying21 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(21)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime21)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar21} onChange={() => changeRange(21)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration21 && !Number.isNaN(duration21)) && calculateTime(duration21)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(21)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(21)} className="audioPlayer__main-btn">
                  {isPlaying21 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(21)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </Container>
  );
}

export default UnipopiaPodcats;
