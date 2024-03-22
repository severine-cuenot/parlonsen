/* eslint-disable react/style-prop-object */
// React imports

// Component imports
import Button from '../Button';
// imports
import './style.scss';

function Feed1() {
  return (
    <section className="feed">
      <header className="feed__header header">
        <h2>Nos dernières actualités sur Facebook</h2>
      </header>
      <div className="feed__iframe-block">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FLe-L%25C3%25AEeu-100070756573019%2F&tabs=timeline&width=500&height=2000&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" title="Feed" className="feed__iframe" />
        <a href="https://www.facebook.com/p/Le-L%C3%AEeu-100070756573019/"><Button label="Nous suivre sur Facebook" type="button" btnstyle="feed" /></a>
      </div>

    </section>
  );
}

export default Feed1;
