import "../../stylesheets/tabs/NalaramaTab.css";
import nalaramaThumbnail from '../../images/nalarama-thumbnail.png';

const NalaramaTab = () => {
  return (
    <section className="center-section nalarama-section">
      <div className="center-body">
        <h2 className="center-title">Nalarama</h2>
        <div className="faded-scroll" id="custom-fade-6"></div>
        <a
          href="https://nalarama.web.app/"
          rel="noreferrer"
          target="_blank"
          className="thumbnail-a"
        >
          <img src={nalaramaThumbnail} className="thumbnail" alt="" />
          <div className="faded-anchor-bottom"></div>
        </a>
        <p className="center-p">
          Check out this project/contest I created for friends and family to
          make guesses about the DNA results of my puppy, Nala! The competition
          is over, and the prize has been given out, but I am working on a
          mechanism that will allow new participants to see their guesses
          results immediately! Fill out your guesses to see if I have built it
          yet! Otherwise I'll send your results via e-mail!
        </p>
      </div>
      <div className="faded-scroll-bottom" id="custom-fade-6-bottom"></div>
    </section>
  );
};

export default NalaramaTab;
