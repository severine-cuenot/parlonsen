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
import { RichText } from '@graphcms/rich-text-react-renderer';
import PropTypes from 'prop-types';

// Component imports
import Container from '../Container';

// imports
import './style.scss';
// import TestAudio from '../../../public/pe_2022_03_17_treve_hivernale.mp3';

function OnePodcast({ posts }) {
  const listOfPodcasts = posts.filter((post) => post.node.categories.some((category) => category.nom === 'Podcasts'));

  // Create state hooks for each podcast
  const playersState = listOfPodcasts.map(() => ({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    audioPlayer: useRef(),
    progressBar: useRef(),
    animationRef: useRef(),
  }));

  const [players, setPlayers] = useState(playersState);

  const onLoadedMetadata = (index) => {
    setDuration(Math.floor(audioPlayer(index).current.duration));
  };

  useEffect(() => {
    const seconds = Math.floor(audioPlayer(index).current.duration);
    setDuration(seconds);
    progressBar(index).current.max = seconds;
  }, [audioPlayer(index)?.current?.loadedmetadata, audioPlayer(index)?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = (index) => {
    const newPlayers = [...players];
    const currentPlayer = newPlayers[index];

    currentPlayer.isPlaying = !currentPlayer.isPlaying;
    setPlayers(newPlayers);

    if (currentPlayer.isPlaying) {
      currentPlayer.audioPlayer.current.play();
      currentPlayer.animationRef.current = requestAnimationFrame(() => whilePlaying(index));
    }
    else {
      currentPlayer.audioPlayer.current.pause();
      cancelAnimationFrame(currentPlayer.animationRef.current);
    }
  };

  // ... rest of your functions like whilePlaying, changeRange, etc. but use the index to reference the correct player
  const whilePlaying = (index) => {
    progressBar(index).current.value = audioPlayer(index).current.currentTime;
    changePlayerCurrentTime();
    animationRef(index).current = requestAnimationFrame(whilePlaying);
  };
  const changeRange = (index) => {
    audioPlayer(index).current.currentTime = progressBar(index).current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = (index) => {
    progressBar(index).current.style.setProperty('--seek-before-width', `${progressBar(index).current.value / duration(index) * 100}%`);
    setCurrentTime(progressBar(index).current.value);
  };

  const backThirty = (index) => {
    progressBar(index).current.value = Number(progressBar(index).current.value - 30);
    changeRange();
  };

  const forwardThirty = (index) => {
    const newTime = audioPlayer(index).current.currentTime + 30;
    // Needed this to fix the wrong number of secs added to the player
    if (newTime <= duration(index)) {
      audioPlayer(index).current.currentTime = newTime;
      progressBar(index).current.value = newTime;
      changePlayerCurrentTime();
    }
  };

  return (
    <Container>
      {listOfPodcasts.map((podcast, index) => (
        <section key={index} className="onePodcast">
          <div className="audioPlayers-block">
            <article className="audioPlayer">
              <h3 className="header">{podcast.node.titre}</h3>
              <RichText
                content={podcast.node.contenu.raw}
              />
              <div className="audioPlayer__player">
                {/* Map to display assets files */}
                {podcast.node.fichier && podcast.node.fichier.map((fichier, fileIndex) => (
                  <audio
                    key={fileIndex}
                    ref={players[index].audioPlayer}
                    src={fichier.url}
                    preload="metadata"
                    onLoadedData={() => onLoadedMetadata(index)}
                  />
                ))}
                {/* Buttons for desktop */}
                <div className="audioPlayer__player-btn displayNoneMobile">
                  <button type="button" onClick={backThirty} className="audioPlayer__btn"><TbPlayerTrackPrevFilled /> </button>
                  <button type="button" onClick={() => togglePlayPause(index)} className="audioPlayer__main-btn">
                    {players[index].isPlaying ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled />}
                  </button>
                  <button type="button" onClick={forwardThirty} className="audioPlayer__btn"><TbPlayerTrackNextFilled /> </button>
                </div>

                <div className="audioPlayer__player-bar">
                  {/* current time */}
                  <div className="audioPlayer__currentTime">{calculateTime(currentTime[index])}</div>
                  {/* Progress bar */}
                  <div>
                    <input type="range" className="audioPlayer__progressBar" defaultValue="0" ref={progressBar} onChange={changeRange} />
                  </div>
                  {/* duration */}
                  <div className="audioPlayer__duration">{(duration && !Number.isNaN(duration)) && calculateTime(duration)}</div>
                </div>

                {/* Buttons for mobile */}
                <div className="audioPlayer__player-btn displayNoneDesktop">
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
      ))}
    </Container>
  );
}

OnePodcast.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        titre: PropTypes.string.isRequired,
        extrait: PropTypes.string,
        auteur: PropTypes.shape({
          nom: PropTypes.string,
        }),
        contenu: PropTypes.shape({
          raw: PropTypes.shape({
            children: PropTypes.array.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }),
  ).isRequired,
};

export default OnePodcast;
