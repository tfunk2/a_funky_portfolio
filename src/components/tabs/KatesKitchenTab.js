import "../../stylesheets/tabs/KatesKitchenTab.css";
import katesKitchenThumbnail from '../../images/the-real-kates-kitchen-thumbnail.png';

const KatesKitchenTab = () => {
  return (
    <section className="center-section kates-kitchen-section">
      <div className="center-body">
        <h2 className="center-title">The Real Kate's Kitchen</h2>
        <div className="faded-scroll" id="custom-fade-9"></div>
        <a
          href="https://therealkateskitchen.web.app/"
          rel="noreferrer"
          target="_blank"
          className="thumbnail-a"
        >
          <img src={katesKitchenThumbnail} className="thumbnail" alt="" />
          <div className="faded-anchor-bottom"></div>
        </a>
        <p className="center-p">
          I digitalized my Mom's recipe book so she would have all her recipes
          forever, and could share them instantly with anyone! I created and implemented a
          custom search bar component using a dynamic RegEx, check it out!
        </p>
      </div>
      <div className="faded-scroll-bottom" id="custom-fade-9-bottom"></div>
    </section>
  );
};

export default KatesKitchenTab;
