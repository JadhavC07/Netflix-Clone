import tv from "../../assets/Images/tv.png";
import video from "../../assets/Video/video-tv-in-0819.m4v";

const Section3 = () => {
  return (
    <div className="sec-main">
      <div className="right">
        <div className="para-text">
          <h2>Enjoy on your TV</h2>
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast,</p>
          <p>Apple TV, Blu-ray players and more.</p>
        </div>
      </div>
      <div className="left">
        <div className="video">
          <img src={tv} alt="" />
          <video autoPlay muted playsInline loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Section3;
