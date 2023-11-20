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

function OnePodcast() {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Container>
      <section className="onePodcast">
        <header className="OnePodcast__header header">
          <h2>OnePodcast</h2>
        </header>
        <div className="audioPlayer">

          <audio src={TestAudio} preload="metadata" />
          <button type="button"><AiFillBackward /> 30 </button>
          <button type="button" onClick={togglePlayPause}>
            {isPlaying ? <IoMdPause /> : <IoPlaySharp /> }
          </button>
          <button type="button"> 30 <AiFillForward /></button>

          {/* current time */}
          <div>0:00</div>

          {/* Progress bar */}
          <div>
            <input type="range" className="audioPlayer__progressBar" />
          </div>

          {/* duration */}
          <div>2:49</div>

        </div>
      </section>
    </Container>
  );
}

export default OnePodcast;
