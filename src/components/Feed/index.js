// React imports

// Component imports
import Button from '../Button';
// imports
import './style.scss';

function Feed1() {
  return (
    <section className="feed">
      <header className="feed__header header">
        <h2>Nos dernières actualités</h2>
      </header>
      <div className="feed__iframe-block">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100070756573019&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=565629196919689" width="340" height="331" scrolling="no" frameBorder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" title="Notre page Facebook" className="feed__iframe" />
        <a href="https://www.facebook.com/p/Le-L%C3%AEeu-100070756573019/"><Button label="Nous suivre sur Facebook" type="button" btnstyle="feed" /></a>
      </div>

    </section>
  );
}

export default Feed1;
