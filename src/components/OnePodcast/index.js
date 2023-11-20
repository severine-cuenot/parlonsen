// React imports

// Component imports
import Container from '../Container';

// imports
import './style.scss';
// import TestAudio from '../../../public/pe_2022_03_17_treve_hivernale.mp3';

function OnePodcast() {
  return (
    <Container>
      <section className="onePodcast">
        <header className="OnePodcast__header header">
          <h2>OnePodcasts</h2>
        </header>
        <div>
          Mon player
          <audio src=""></audio>
        </div>
      </section>
    </Container>
  );
}

export default OnePodcast;
