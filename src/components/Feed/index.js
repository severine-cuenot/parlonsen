// Component imports
import Button from '../Button';
// imports
import './style.scss';

function Feed() {
  return (
    <section className="feed">
      <header className="feed__header header">
        <h2>Nos dernières actualités</h2>
      </header>
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FLe-Lîeu-100070756573019%2F&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=565629196919689" className="feed__iframe" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" title="facebook feed" />
      <Button label="Rejoignez-nous sur Facebook" type="button" btnstyle="feed" />
    </section>
  );
}

export default Feed;
