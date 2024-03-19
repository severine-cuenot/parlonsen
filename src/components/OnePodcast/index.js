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
import audio17 from '../../../public/mp3/202004_115.mp3';
import audio18 from '../../../public/mp3/202101_alimentation.mp3';
import audio19 from '../../../public/mp3/202103_manger_galere.mp3';
import audio20 from '../../../public/mp3/202104_jeunes_en_galeres.mp3';
import audio21 from '../../../public/mp3/202105_travail.mp3';
import audio22 from '../../../public/mp3/202106_la_mort.mp3';
import audio23 from '../../../public/mp3/202107_vacances.mp3';
import audio24 from '../../../public/mp3/202111_atelier_mortel.mp3';
import audio25 from '../../../public/mp3/202112_argent.mp3';
import audio26 from '../../../public/mp3/202203_treve_hivernale.mp3';
import audio27 from '../../../public/mp3/202206_cemondequirendfou.mp3';
import audio28 from '../../../public/mp3/202210_precarite_femme.mp3';
import audio29 from '../../../public/mp3/202211_vivrensemble.mp3';
import audio30 from '../../../public/mp3/202211_mcmv.mp3';
import audio31 from '../../../public/mp3/202301_habitat_reve.mp3';
import audio32 from '../../../public/mp3/202211_plateforme-vip.mp3';

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

  // Player audio22
  const [isPlaying22, setIsPlaying22] = useState(false);
  const [currentTime22, setCurrentTime22] = useState(0);
  const [duration22, setDuration22] = useState(0);

  const audioPlayer22 = useRef();
  const progressBar22 = useRef();
  const animationRef22 = useRef();

  // Player audio23
  const [isPlaying23, setIsPlaying23] = useState(false);
  const [currentTime23, setCurrentTime23] = useState(0);
  const [duration23, setDuration23] = useState(0);

  const audioPlayer23 = useRef();
  const progressBar23 = useRef();
  const animationRef23 = useRef();

  // Player audio24
  const [isPlaying24, setIsPlaying24] = useState(false);
  const [currentTime24, setCurrentTime24] = useState(0);
  const [duration24, setDuration24] = useState(0);

  const audioPlayer24 = useRef();
  const progressBar24 = useRef();
  const animationRef24 = useRef();

  // Player audio25
  const [isPlaying25, setIsPlaying25] = useState(false);
  const [currentTime25, setCurrentTime25] = useState(0);
  const [duration25, setDuration25] = useState(0);

  const audioPlayer25 = useRef();
  const progressBar25 = useRef();
  const animationRef25 = useRef();

  // Player audio26
  const [isPlaying26, setIsPlaying26] = useState(false);
  const [currentTime26, setCurrentTime26] = useState(0);
  const [duration26, setDuration26] = useState(0);

  const audioPlayer26 = useRef();
  const progressBar26 = useRef();
  const animationRef26 = useRef();

  // Player audio27
  const [isPlaying27, setIsPlaying27] = useState(false);
  const [currentTime27, setCurrentTime27] = useState(0);
  const [duration27, setDuration27] = useState(0);

  const audioPlayer27 = useRef();
  const progressBar27 = useRef();
  const animationRef27 = useRef();

  // Player audio28
  const [isPlaying28, setIsPlaying28] = useState(false);
  const [currentTime28, setCurrentTime28] = useState(0);
  const [duration28, setDuration28] = useState(0);

  const audioPlayer28 = useRef();
  const progressBar28 = useRef();
  const animationRef28 = useRef();

  // Player audio29
  const [isPlaying29, setIsPlaying29] = useState(false);
  const [currentTime29, setCurrentTime29] = useState(0);
  const [duration29, setDuration29] = useState(0);

  const audioPlayer29 = useRef();
  const progressBar29 = useRef();
  const animationRef29 = useRef();

  // Player audio30
  const [isPlaying30, setIsPlaying30] = useState(false);
  const [currentTime30, setCurrentTime30] = useState(0);
  const [duration30, setDuration30] = useState(0);

  const audioPlayer30 = useRef();
  const progressBar30 = useRef();
  const animationRef30 = useRef();

  // Player audio31
  const [isPlaying31, setIsPlaying31] = useState(false);
  const [currentTime31, setCurrentTime31] = useState(0);
  const [duration31, setDuration31] = useState(0);

  const audioPlayer31 = useRef();
  const progressBar31 = useRef();
  const animationRef31 = useRef();

  // Player audio32
  const [isPlaying32, setIsPlaying32] = useState(false);
  const [currentTime32, setCurrentTime32] = useState(0);
  const [duration32, setDuration32] = useState(0);

  const audioPlayer32 = useRef();
  const progressBar32 = useRef();
  const animationRef32 = useRef();

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
    else if (index === 22) {
      setDuration22(Math.floor(audioPlayer22.current.duration));
    }
    else if (index === 23) {
      setDuration23(Math.floor(audioPlayer23.current.duration));
    }
    else if (index === 24) {
      setDuration24(Math.floor(audioPlayer24.current.duration));
    }
    else if (index === 25) {
      setDuration25(Math.floor(audioPlayer25.current.duration));
    }
    else if (index === 26) {
      setDuration26(Math.floor(audioPlayer26.current.duration));
    }
    else if (index === 27) {
      setDuration27(Math.floor(audioPlayer27.current.duration));
    }
    else if (index === 28) {
      setDuration28(Math.floor(audioPlayer28.current.duration));
    }
    else if (index === 29) {
      setDuration29(Math.floor(audioPlayer29.current.duration));
    }
    else if (index === 30) {
      setDuration30(Math.floor(audioPlayer30.current.duration));
    }
    else if (index === 31) {
      setDuration31(Math.floor(audioPlayer31.current.duration));
    }
    else if (index === 32) {
      setDuration32(Math.floor(audioPlayer32.current.duration));
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
    progressBar17.current.max = Math.floor(audioPlayer17.current.duration);
    progressBar18.current.max = Math.floor(audioPlayer18.current.duration);
    progressBar19.current.max = Math.floor(audioPlayer19.current.duration);
    progressBar20.current.max = Math.floor(audioPlayer20.current.duration);
    progressBar21.current.max = Math.floor(audioPlayer21.current.duration);
    progressBar22.current.max = Math.floor(audioPlayer22.current.duration);
    progressBar23.current.max = Math.floor(audioPlayer23.current.duration);
    progressBar24.current.max = Math.floor(audioPlayer24.current.duration);
    progressBar25.current.max = Math.floor(audioPlayer25.current.duration);
    progressBar26.current.max = Math.floor(audioPlayer26.current.duration);
    progressBar27.current.max = Math.floor(audioPlayer27.current.duration);
    progressBar28.current.max = Math.floor(audioPlayer28.current.duration);
    progressBar29.current.max = Math.floor(audioPlayer29.current.duration);
    progressBar30.current.max = Math.floor(audioPlayer30.current.duration);
    progressBar31.current.max = Math.floor(audioPlayer31.current.duration);
    progressBar32.current.max = Math.floor(audioPlayer32.current.duration);
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
    // Player audio22
    audioPlayer22?.current?.loadedmetadata,
    audioPlayer22?.current?.readyState,
    // Player audio23
    audioPlayer23?.current?.loadedmetadata,
    audioPlayer23?.current?.readyState,
    // Player audio24
    audioPlayer24?.current?.loadedmetadata,
    audioPlayer24?.current?.readyState,
    // Player audio25
    audioPlayer25?.current?.loadedmetadata,
    audioPlayer25?.current?.readyState,
    // Player audio26
    audioPlayer26?.current?.loadedmetadata,
    audioPlayer26?.current?.readyState,
    // Player audio27
    audioPlayer27?.current?.loadedmetadata,
    audioPlayer27?.current?.readyState,
    // Player audio28
    audioPlayer28?.current?.loadedmetadata,
    audioPlayer28?.current?.readyState,
    // Player audio29
    audioPlayer29?.current?.loadedmetadata,
    audioPlayer29?.current?.readyState,
    // Player audio30
    audioPlayer30?.current?.loadedmetadata,
    audioPlayer30?.current?.readyState,
    // Player audio31
    audioPlayer31?.current?.loadedmetadata,
    audioPlayer31?.current?.readyState,
    // Player audio32
    audioPlayer32?.current?.loadedmetadata,
    audioPlayer32?.current?.readyState,
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
      null, // Index 10 is skipped
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
      audioPlayer22.current,
      audioPlayer23.current,
      audioPlayer24.current,
      audioPlayer25.current,
      audioPlayer26.current,
      audioPlayer27.current,
      audioPlayer28.current,
      audioPlayer29.current,
      audioPlayer30.current,
      audioPlayer31.current,
      audioPlayer32.current,
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
      null, // Index 10 is skipped
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
      progressBar22.current,
      progressBar23.current,
      progressBar24.current,
      progressBar25.current,
      progressBar26.current,
      progressBar27.current,
      progressBar29.current,
      progressBar30.current,
      progressBar31.current,
      progressBar32.current,
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
      null, // Index 10 is skipped
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
      isPlaying22,
      isPlaying23,
      isPlaying24,
      isPlaying25,
      isPlaying26,
      isPlaying27,
      isPlaying28,
      isPlaying29,
      isPlaying30,
      isPlaying31,
      isPlaying32,
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
      null, // Index 10 is skipped
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
      setIsPlaying22,
      setIsPlaying23,
      setIsPlaying24,
      setIsPlaying25,
      setIsPlaying26,
      setIsPlaying27,
      setIsPlaying28,
      setIsPlaying29,
      setIsPlaying30,
      setIsPlaying31,
      setIsPlaying32,
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
      null, // Index 10 is skipped
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
      animationRef22,
      animationRef23,
      animationRef24,
      animationRef25,
      animationRef26,
      animationRef27,
      animationRef28,
      animationRef29,
      animationRef30,
      animationRef31,
      animationRef32,
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
      null, // Index 10 is skipped
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
      audioPlayer22.current,
      audioPlayer23.current,
      audioPlayer24.current,
      audioPlayer25.current,
      audioPlayer26.current,
      audioPlayer27.current,
      audioPlayer28.current,
      audioPlayer30.current,
      audioPlayer31.current,
      audioPlayer32.current,
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
      null, // Index 10 is skipped
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
      progressBar22.current,
      progressBar23.current,
      progressBar24.current,
      progressBar25.current,
      progressBar26.current,
      progressBar27.current,
      progressBar28.current,
      progressBar29.current,
      progressBar30.current,
      progressBar31.current,
      progressBar32.current,
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
      null, // Index 10 is skipped
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
      audioPlayer22.current,
      audioPlayer23.current,
      audioPlayer24.current,
      audioPlayer25.current,
      audioPlayer26.current,
      audioPlayer27.current,
      audioPlayer28.current,
      audioPlayer29.current,
      audioPlayer30.current,
      audioPlayer31.current,
      audioPlayer32.current,
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
      null, // Index 10 is skipped
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
      progressBar22.current,
      progressBar23.current,
      progressBar24.current,
      progressBar25.current,
      progressBar26.current,
      progressBar27.current,
      progressBar28.current,
      progressBar29.current,
      progressBar30.current,
      progressBar31.current,
      progressBar32.current,
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
      null, // Index 10 is skipped
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
      progressBar22.current,
      progressBar23.current,
      progressBar24.current,
      progressBar25.current,
      progressBar26.current,
      progressBar27.current,
      progressBar28.current,
      progressBar29.current,
      progressBar30.current,
      progressBar31.current,
      progressBar32.current,
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
        22: duration22,
        23: duration23,
        24: duration24,
        25: duration25,
        26: duration26,
        27: duration27,
        28: duration28,
        29: duration29,
        30: duration30,
        31: duration31,
        32: duration32,
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
      null, // Index 10 is skipped
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
      progressBar22.current,
      progressBar23.current,
      progressBar24.current,
      progressBar25.current,
      progressBar26.current,
      progressBar27.current,
      progressBar28.current,
      progressBar29.current,
      progressBar30.current,
      progressBar31.current,
      progressBar32.current,
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
      null, // Index 10 is skipped
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
      audioPlayer22.current,
      audioPlayer23.current,
      audioPlayer24.current,
      audioPlayer25.current,
      audioPlayer26.current,
      audioPlayer27.current,
      audioPlayer28.current,
      audioPlayer29.current,
      audioPlayer30.current,
      audioPlayer31.current,
      audioPlayer32.current,
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
        null, // Index 10 is skipped
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
        progressBar22.current,
        progressBar23.current,
        progressBar24.current,
        progressBar25.current,
        progressBar26.current,
        progressBar27.current,
        progressBar28.current,
        progressBar29.current,
        progressBar30.current,
        progressBar31.current,
        progressBar32.current,
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
        22: duration22,
        23: duration23,
        24: duration24,
        25: duration25,
        26: duration26,
        27: duration27,
        28: duration28,
        29: duration29,
        30: duration30,
        31: duration31,
        32: duration32,
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
              <h3 className="header">La Plateforme-VIP</h3>
              <p className="audioPlayer__date">Enregistré en février 2023</p>
            </header>
            <p>
              Il y a encore quelques années, la question du vieillissement des personnes en situation de précarité ne se posait pas. Si elle est aujourd'hui, de plus en plus constatée par les professionnels du terrain, elle reste cependant peu traitée.
            </p>
            <p>
              La Plateforme-VIeillissement&Précarité participe à de nombreux événements afin de la rendre plus visible et a organisé en ce sens la première Rencontre nationale des personnes en situation de précarité concernées par le vieillissement mais pas que...
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer32} src={audio32} preload="metadata" onLoadedData={() => onLoadedMetadata(32)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(32)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(32)} className="audioPlayer__main-btn">
                  {isPlaying32 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(32)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime32)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar32} onChange={() => changeRange(32)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration32 && !Number.isNaN(duration32)) && calculateTime(duration32)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(32)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(32)} className="audioPlayer__main-btn">
                  {isPlaying32 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(32)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Ton habitat rêvé&nbsp;?</h3>
              <p className="audioPlayer__date">Enregistré en janvier 2023</p>
            </header>
            <p>
              "Quand on n'a pas de toit, on accepte ce qu'il y a".
            </p>
            <p>
              Quand on est à la rue et qu'on bataille pour avoir un logement, on est censés accepter ce qu'on nous propose – quand on nous propose quelque-chose… Nous n'avons pas le droit de choisir, pas le droit de refuser, pas le droit de proposer.<br />
              Les manières d'habiter sont pourtant aussi différentes que les personnes.
            </p>
            <p>
              Quels lieux t'a-t-on imposés, as-tu habités, as-tu ouverts&nbsp;?<br />
              Comment faire entendre notre droit de refuser les hébergements proposés&nbsp;?<br />
              Notre droit de porter nos propres projets d'habitat&nbsp;?<br />
              Quelles initiatives existent&nbsp;?
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer31} src={audio31} preload="metadata" onLoadedData={() => onLoadedMetadata(31)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(31)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(31)} className="audioPlayer__main-btn">
                  {isPlaying31 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(31)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime31)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar31} onChange={() => changeRange(31)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration31 && !Number.isNaN(duration31)) && calculateTime(duration31)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(31)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(31)} className="audioPlayer__main-btn">
                  {isPlaying31 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(31)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Mon chien, Ma vie</h3>
              <p className="audioPlayer__date">Enregistré en novembre 2022</p>
            </header>
            <p>
              Fondée à la fin de l'année 2019, par Valérie et Isa, l'association Mon chien ma vie vient en aide aux personnes en grande précarité et aux personnes isolées, en prenant soin de leurs animaux.
            </p>
            <p>
              L'association a pour but d'aller a la rencontre des personnes ayant des chiens, subissant les conséquences de l'isolement afin de leurs donner de la nourriture et tout le nécessaire pour leurs animaux ainsi que des soins dispensés une fois par mois par Solivet.
            </p>
            <p>
              Mon chien, Ma vie est partenaire de l'association Parlons-en lauréate du Budget participatif de la ville de Grenoble en 2017 pour Le lîeu qui a ouvert ses portes en janvier 2020.<br />
              Situé au 17, rue Abbé Grégoire, Le Lîeu est un local ouvert à tous, et en particulier aux personnes en grande précarité.<br />
              Mon chien, Ma vie y tient sa permanence tous les lundis de 14h à 17h.
            </p>
            <p>
              <em className="onePodcast__em">Chanson&nbsp;: Dirty Old Mat "<a href="https://www.youtube.com/watch?v=_yqHfOQS5LY&list=RD_yqHfOQS5LY&start_radio=1" target="_blank" rel="noreferrer">Satané clébard</a>"</em>
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer30} src={audio30} preload="metadata" onLoadedData={() => onLoadedMetadata(30)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(30)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(30)} className="audioPlayer__main-btn">
                  {isPlaying30 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(30)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime30)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar30} onChange={() => changeRange(30)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration30 && !Number.isNaN(duration30)) && calculateTime(duration30)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(30)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(30)} className="audioPlayer__main-btn">
                  {isPlaying30 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(30)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Vivre ensemble</h3>
              <p className="audioPlayer__date">Enregistré en novembre 2022</p>
            </header>
            <p>
              Dans la rue ou dans les quartiers, habiter et vivre en semble peut être compliqué.<br />
              La différence peut faire violence, alors comment se réunir et construire ensemble.<br />
              Choisir la solitude parfois ou souvent subir l'isolement.
            </p>
            <p>
              <em className="onePodcast__em">Illustration musicale&nbsp;: Zoufris Maracas "<a href="https://www.youtube.com/watch?v=QlooZ3FQR40" target="_blank" rel="noreferrer">Chienne de vie</a>"</em>
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer29} src={audio29} preload="metadata" onLoadedData={() => onLoadedMetadata(29)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(29)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(29)} className="audioPlayer__main-btn">
                  {isPlaying29 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(29)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime29)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar29} onChange={() => changeRange(29)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration29 && !Number.isNaN(duration29)) && calculateTime(duration29)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(29)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(29)} className="audioPlayer__main-btn">
                  {isPlaying29 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(29)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Femmes et précarité</h3>
              <p className="audioPlayer__date">Enregistré en octobre 2022</p>
            </header>
            <p>
              Selon l'Institut National d'Études Ddémographiques, deux SDF sur cinq sont des femmes. En revanche, les femmes sont très rarement sans-abri (5% seulement). Le plus souvent, elles dorment dans des hôtels ou des logements payés par des associations ce qui les rend moins visibles.
            </p>
            <p>
              Le genre est-il un frein pour l'accès aux droits&nbsp;?<br />
              Les administrations sont-elles "inclusives"&nbsp;?<br />
              S'invisibiliser pour éviter le danger&nbsp;?<br />
              Y-a-t-il plus d’hommes que de femmes à la rue&nbsp;?<br />
            </p>
            <p>
              <em className="onePodcast__em">Illustration sonore&nbsp;: Fanny Polly – <a href="https://www.youtube.com/watch?v=HiUyYAMWy1E&ab_channel=FannyPolly" target="_blank" rel="noreferrer">Isolés</a></em>
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer28} src={audio28} preload="metadata" onLoadedData={() => onLoadedMetadata(28)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(28)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(28)} className="audioPlayer__main-btn">
                  {isPlaying28 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(28)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime28)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar28} onChange={() => changeRange(28)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration28 && !Number.isNaN(duration28)) && calculateTime(duration28)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(28)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(28)} className="audioPlayer__main-btn">
                  {isPlaying28 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(28)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Ce monde qui rend "fou"</h3>
              <p className="audioPlayer__date">Enregistré en octobre 2022</p>
            </header>
            <p>
              En France, en 2018, près de 96&nbsp;000 personnes ont été concernées par des soins sans consentement et plus de 42&nbsp;000 ont été suivies dans le cadre d'un programme de soins.
            </p>
            <p>
              30 à 50% des personnes sans domicile fixe sont atteintes de très graves maladies psychiques&nbsp;: schizophrénie ou troubles bipolaires sévères.<br />
              Des personnes livrées à elles-mêmes, sans soins, désocialisées et souvent atteintes d'alcoolisme et de toxicomanie.
            </p>
            <p>
              Précarité et santé mentale, hospitalisations, préjugés, accès aux soins et aux suivis, violences et limites des dispositifs, de quoi a-t-on besoin&nbsp;?<br />
            </p>
            <p>
              <em className="onePodcast__em">Musique&nbsp;: La psychiatrie en détresse.</em>
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer27} src={audio27} preload="metadata" onLoadedData={() => onLoadedMetadata(27)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(27)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(27)} className="audioPlayer__main-btn">
                  {isPlaying27 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(27)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime27)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar27} onChange={() => changeRange(27)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration27 && !Number.isNaN(duration27)) && calculateTime(duration27)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(27)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(27)} className="audioPlayer__main-btn">
                  {isPlaying27 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(27)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">La trêve hivernale</h3>
              <p className="audioPlayer__date">Enregistré en mars 2022</p>
            </header>
            <p>
              Quels dispositifs ont été mis en place à Grenoble cet hiver&nbsp;?<br />
              Comment l'ont vécu les personnes hébergées&nbsp;?<br />
              Qui (ne) fait (pas) quoi&nbsp;? Quel rôle des collectivités locales&nbsp;?<br />
              En cette période de pandémie, quels ont été les changements par rapport aux hivers précédents&nbsp;?<br />
              Maintien dans l'hébergement ou le logement&nbsp;: quels sont les droits, les possibles en cette fin de trêve&nbsp;?...
            </p>
            <p>
              <em className="onePodcast__em">Illustration sonore&nbsp;: Claudio Capéo <a href="https://www.youtube.com/watch?v=Y9GCM9DZUJo" target="_blank" rel="noreferrer">"Un homme debout"</a></em>
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer26} src={audio26} preload="metadata" onLoadedData={() => onLoadedMetadata(26)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(26)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(26)} className="audioPlayer__main-btn">
                  {isPlaying26 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(26)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime26)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar26} onChange={() => changeRange(26)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration26 && !Number.isNaN(duration26)) && calculateTime(duration26)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(26)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(26)} className="audioPlayer__main-btn">
                  {isPlaying26 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(26)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">L'accès à l'argent</h3>
              <p className="audioPlayer__date">Enregistré en décembre 2021</p>
            </header>
            <p>
              Moyens de retrait et de paiement, accès aux comptes bancaires, versement des aides...
            </p>
            <p>
              Quels sont nos droits lorsqu'on est en grande précarité financière&nbsp;?<br />
              Quelles sont nos "débrouilles", nos plans dans la galère&nbsp;?<br />
              Quelles aides, quels soutiens existent pour parvenir à (sur)vivre avec de très petits budgets&nbsp;?
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer25} src={audio25} preload="metadata" onLoadedData={() => onLoadedMetadata(25)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(25)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(25)} className="audioPlayer__main-btn">
                  {isPlaying25 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(25)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime25)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar25} onChange={() => changeRange(25)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration25 && !Number.isNaN(duration25)) && calculateTime(duration25)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(25)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(25)} className="audioPlayer__main-btn">
                  {isPlaying25 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(25)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Atelier mortel</h3>
              <p className="audioPlayer__date">Enregistré en novembre 2021</p>
            </header>
            <p>
              La discussion reprendra les questions et les envies laissées en suspens lors du "Parlons-en&nbsp;: la mort", organisé en juin dernier. Testaments, cérémonies, carré commun, coût des obsèques...
            </p>
            <p>
              Quels droits, quels possibles pour nous et nos ami.es décédé.es&nbsp;?<br />
            </p>
            <p>
              L'atelier est ouvert à toutes les personnes intéressées par ces sujets (pas besoin d'avoir participé aux premiers débats).<br />
              L'idée est aussi de réfléchir à l'intérêt, la possibilité, d'organiser des temps mensuels collectifs autour de la mort et des démarches. Des permanences individuelles qui permettraient d'y voir plus clair dans les droits et les démarches en fin de vie et au moment du décès.
            </p>
            <p>
              Avec la participation des Pompes Funèbres Intercommunales et de la Plate-Forme "Vieillissement et Précarité" de l'Oiseau Bleu.
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer24} src={audio24} preload="metadata" onLoadedData={() => onLoadedMetadata(24)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(24)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(24)} className="audioPlayer__main-btn">
                  {isPlaying24 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(24)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime24)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar24} onChange={() => changeRange(24)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration24 && !Number.isNaN(duration24)) && calculateTime(duration24)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(24)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(24)} className="audioPlayer__main-btn">
                  {isPlaying24 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(24)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">S'échapper de la ville cet été&nbsp;?</h3>
              <p className="audioPlayer__date">Enregistré en juillet 2021</p>
            </header>
            <p>
              L'été est là, et pour beaucoup, c'est l'occasion de quitter Grenoble, de s'échapper de la chaleur et du quotidien, de changer d'air.<br />
              Surtout après cette année de confinements et autres couvre-feux successifs...
            </p>
            <p>
              Mais qui en a les moyens&nbsp;?<br />
              Quel accès aux vacances et aux loisirs lorsqu'on est en précarité&nbsp;?<br />
              Où aller quand on a un chien&nbsp;?<br />
              Quels sont les plans, les lieux, les ressources auxquels on peut avoir droit&nbsp;?<br />
              Quels lieux restent ouverts à Grenoble pour celles et ceux qui y passent l'été&nbsp;?
            </p>
            <p>
              Partageons nos idées, nos plans, nos lieux, nos cabanes, nos refuges, nos adresses, nos contacts&nbsp;!...
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer23} src={audio23} preload="metadata" onLoadedData={() => onLoadedMetadata(23)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(23)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(23)} className="audioPlayer__main-btn">
                  {isPlaying23 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(23)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime23)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar23} onChange={() => changeRange(23)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration23 && !Number.isNaN(duration23)) && calculateTime(duration23)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(23)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(23)} className="audioPlayer__main-btn">
                  {isPlaying23 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(23)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">La mort</h3>
              <p className="audioPlayer__date">Enregistré en juin 2021</p>
            </header>
            <p>
              La mort, la nôtre comme celle de nos proches, est un sujet difficile face auquel nous sommes désemparés.<br />
              Et si on essayait d'en parler collectivement&nbsp;?
            </p>
            <p>
              Fin de vie, testaments, cimetières, cérémonies, démarches funéraires, carrés communs, "famille de sang" et "compagnons de galère"...
            </p>
            <p>
              Quels droits pour nous et nos amis décédés&nbsp;?<br />
              Quel respect de nos choix et volontés&nbsp;?<br />
              Que faire sans moyens financiers&nbsp;?
            </p>
            <p>
              Avec le collectif grenoblois Mort De Rue et la Plate-forme Vieillissement/Précarité.<br />
              Et le mort joyeux.
            </p>
            <div className="audioPlayer__player">
              <audio ref={audioPlayer22} src={audio22} preload="metadata" onLoadedData={() => onLoadedMetadata(22)} />

              {/* Buttons for desktop */}
              <div className="audioPlayer__player-btn displayNoneMobile">
                <button type="button" onClick={() => backThirty(22)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(22)} className="audioPlayer__main-btn">
                  {isPlaying22 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(22)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>

              <div className="audioPlayer__player-bar">
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime22)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar22} onChange={() => changeRange(22)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration22 && !Number.isNaN(duration22)) && calculateTime(duration22)}</div>
              </div>

              {/* Buttons for mobile */}
              <div className="audioPlayer__player-btn displayNoneDesktop">
                <button type="button" onClick={() => backThirty(22)} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                <button type="button" onClick={() => togglePlayPause(22)} className="audioPlayer__main-btn">
                  {isPlaying22 ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled /> }
                </button>
                <button type="button" onClick={() => forwardThirty(22)} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
              </div>
            </div>
          </article>
        </div>
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Le travail</h3>
              <p className="audioPlayer__date">Enregistré en mai 2021</p>
            </header>
            <p>
              Taf, boulot, manche, bénévolat, sacerdoce, activité, partage, "marche ou crève", précarité, esclavagisme, exploitation, solidarité...
            </p>
            <p>
              Quel travail pour quels revenus&nbsp;?<br />
              Quel travail pour les moins de 25&nbsp;ans&nbsp;?<br />
              Que sont devenus les saisonnier.e.s, les "extras"&nbsp;?<br />
              Que veut dire Zéro chômeurs alors que je ne demande qu'à travailler mais que l'on ne m'a jamais donné la possibilité de faire ce que j'aime&nbsp;?<br />
              Travailler&nbsp;: Droit ou Devoir&nbsp;? <br />
              Le travail c'est la santé... Vraiment&nbsp;?<br />
              Travailler... sans logement&nbsp;? <br />
              Travailler... sans papier&nbsp;?
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
        <div className="audioPlayers-block">
          <article className="audioPlayer">
            <header className="audioPlayer__header">
              <h3 className="header">Jeunes en galèreS</h3>
              <p className="audioPlayer__date">Enregistré en avril 2021</p>
            </header>
            <p>
              A la rue, mal logés, sans travail, sans revenu,sans papier...<br />
              Étudiants précaires, jeunes majeurs, moins de 25&nbsp;ans...
            </p>
            <p>
              Quelles galères&nbsp;? Quels droits&nbsp;? Quelles actions&nbsp;?
            </p>
            <p>
              Depuis le RMI, revenu minimum d'insertion, jusqu'au RSA, revenu de solidarité active, ouvert, sous certaines conditions, aux personnes d'au moins 25&nbsp;ans et aux jeunes actifs de 18 à 24&nbsp;ans s'ils sont parents isolés ou justifient d'une certaine durée d'activité professionnelle, rien a changé pour ceux qui n'entrent pas dans les critères.
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
              <h3 className="header">Manger, une galère&nbsp;?...</h3>
              <p className="audioPlayer__date">Enregistré en mars 2021</p>
            </header>
            <p>
              Suite de la discussion de janvier&nbsp;: en temps de crise sanitaire et d'augmentation de la précarité, où et comment bien manger à Grenoble&nbsp;?
            </p>
            <p>
              Dans l'aide alimentaire, les besoins et le droit au choix sont relayés au second plan. La précarité rend malade et mal manger accentue les problèmes de santé.
            </p>
            <p>
              Les produits de l'agro-industrie, majoritaires dans les colis alimentaires, peuvent mettre à mal les personnes déjà fragiles – en plus de mettre à mal les terres, les populations et les employés des lieux où ils sont produits.<br />
              Et, si on refuse certains aliments pour des raisons de santé, on se retrouve souvent face à des remarques moralisatrices.
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
              <h3 className="header">Accès à l'alimentation et précarité</h3>
              <p className="audioPlayer__date">Enregistré en janvier 2021</p>
            </header>
            <p>
              La crise sanitaire révèle les inégalités, voire fait basculer de nouvelles personnes dans la précarité. L'insécurité alimentaire, entre autres, touche les personnes en galère.
            </p>
            <p>
              Quelles sont les expériences vécues lors de ces confinements successifs&nbsp;? <br />
              Où et comment -bien- manger lorsqu'on est à la rue ou en grande précarité&nbsp;? <br />
              Quelles initiatives existent, tant du côté des collectifs, des personnes et des associations que des structures d'action sociale à Grenoble&nbsp;? <br />
              Que voudrait-on changer/imaginer&nbsp;?
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
              <h3 className="header">Le 115</h3>
              <p className="audioPlayer__date">Enregistré en avril 2020</p>
            </header>
            <p>
              "Le 115" est un numéro d'urgence (au même titre que le SAMU ou les pompiers) qui vient en aide aux personnes sans abri et en grande difficulté sociale.
            </p>
            <p>
              Comment fonctionne le 115 en Isère&nbsp;? Qui le gère&nbsp;? Avec quels moyens&nbsp;?<br />
              "Critères de vulnérabilité", ça veut dire quoi&nbsp;?<br />
              A quoi bon appeler s'il n'y a pas de places d'hébergement&nbsp;?<br />
              De l'autre côté du combiné, quelles sont les réalités des écoutant-e-s&nbsp;?<br />
              Y-a-t-il des possibilités d'action pour faire bouger les choses&nbsp;?
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
              <h3 className="header">Quelles nouvelles de la rue&nbsp;?</h3>
              <p className="audioPlayer__date">Enregistré en février 2020</p>
            </header>
            <p>
              SDF, précaires, pauvres, mal-logé-e-s...
            </p>
            <p>
              Que se passe-t-il dans la rue cet hiver à Grenoble&nbsp;?<br />
              Quelles sont les actualités, les colères, les alertes&nbsp;?<br />
              Avantages et inconvénients du nouvel accueil de nuit 79 rue Stalingrad à Grenoble&nbsp;?
            </p>
            <p>
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
              <p className="audioPlayer__date">Enregistré en janvier 2020</p>
            </header>
            <p>
              Le Lîeu, c'est un projet de croisements et d'échanges ouvert à tous-tes, cogéré par les habitants de la ville et de la rue, suffisamment ouvert et disponible pour que des idées et projets y trouvent leur place. Un lieu de rencontre, de bricolage&nbsp;; un lieu où se poser, trouver de l'information, s'entraider dans les démarches...
            </p>
            <p>
              Ce projet fait suite à La Piscine – Fabrique de Solutions pour l'Habitat, première expérience qui a montré l'intérêt d'un lieu d'expérimentation, de réflexions et de solutions concrètes.
            </p>
            <p>
              Situé au 17, rue Abbé Grégoire, Le Lîeu, ce sera un local permanent ouvert à tous-tes, et en particulier aux personnes en grande précarité.
            </p>
            <p>
              Le Lîeu, d'où vient-il&nbsp;? Comment fonctionne-t-il&nbsp;? Qu'aimeriez-vous y trouver&nbsp;? Qu'aimeriez-vous y proposer&nbsp;?...
            </p>
            <p>
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
              Dans les associations, les centres d'hébergement, les accueils de jour, les administrations...<br />
              On peut se faire exclure pour cause de non respect des règles.
            </p>
            <p>
              Mais qui fixe les règles&nbsp;?<br />
              Qui les fait appliquer&nbsp;?<br />
              Qui décide des exclusions, pour combien de temps&nbsp;?<br />
              Comment lutter contre l'arbitraire&nbsp;?<br />
              Comment gérer les conflits dans les lieux collectifs&nbsp;?
            </p>
            <p>
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
              Aujourd'hui, quelles sont les difficultés pour accéder à l'eau et à l'hygiène&nbsp;?
            </p>
            <p>
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
              <p className="audioPlayer__date">Enregistré en septembre 2019</p>
            </header>
            <p>
              Savoir où manger, dormir, se laver, se soigner, poser son sac, faire ses papiers, faire garder son chien, se faire entendre, rencontrer des gens, se défendre...<br />
              Connaître ses droits lorsqu'on est à la rue ou en galère...
            </p>
            <p>
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
              <p className="audioPlayer__date">Enregistré en juin 2019</p>
            </header>
            <p>
              Comment s'annonce l'été pour les personnes à la rue ou en galère&nbsp;?<br />
              Peut-on/veut-on quitter la ville&nbsp;?<br />
              Quelles alternatives pour "partir en vacances"&nbsp;?<br />
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
              <h3 className="header">Tu dors où après l'hiver&nbsp;?</h3>
              <p className="audioPlayer__date">Enregistré en mars 2019</p>
            </header>
            <p>
              Qu'a-t-on pensé du dispositif d'urgence cet hiver&nbsp;? Comment l'ont vécu les personnes hébergées&nbsp;? Quelles conditions de vie dans les centres&nbsp;? Du changement par rapport aux hivers précédents&nbsp;? Les acteurs de l'hébergement d'urgence ont-ils des solutions pour les personnes accueillies cet hiver&nbsp;?
            </p>
            <p>
              "Un chez-soi d'abord", "Un logement d'abord"&nbsp;: où en sont les politiques&nbsp;?<br />
              Quels moyens mettre en œuvre pour sensibiliser les pouvoirs publics&nbsp;?
            </p>
            <p>
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
              Personnes à la rue ou en galère/Administrations, lieux d'accueil, travailleurs sociaux, bénévoles&nbsp;: comment on se regarde, comment on se parle&nbsp;?
            </p>
            <p>
              Quand on est à la rue ou dans la précarité, on rencontre des professionnels et des bénévoles de différentes structures.
            </p>
            <p>
              Quels regards pèsent sur nous&nbsp;? Comment on nous parle&nbsp;? Quelles postures nous renforcent&nbsp;? Lesquelles nous fragilisent&nbsp;? Quel impact sur l'accès au droit&nbsp;?
            </p>
            <p>
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
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime8)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar8} onChange={() => changeRange(17)} />
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
                {/* current time */}
                <div className="audioPlayer__currentTime">{calculateTime(currentTime7)}</div>
                {/* Progress bar */}
                <div>
                  <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar7} onChange={() => changeRange(7)} />
                </div>
                {/* duration */}
                <div className="audioPlayer__duration">{(duration17 && !Number.isNaN(duration7)) && calculateTime(duration7)}</div>
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
              Nouvelles lois, trêve hivernale, accès à l'hébergement, risques d'expulsions...
            </p>
            <p>
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
              <p className="audioPlayer__date">Enregistré en mars 2018</p>
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
              Quand on n'a pas de toit, comment vit-on nos relations avec les autres&nbsp;?
            </p>
            <p>
              Aimer, s'aimer, être aimé-e...
            </p>
            <p>
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
              <p className="audioPlayer__date">Enregistré en novembre 2017</p>
            </header>
            <p>
              Le centre-ville de Grenoble est un lieu qui cristallise les tensions entre personnes en errance, habitant-e-s et commerçant-e-s.
            </p>
            <p>
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
