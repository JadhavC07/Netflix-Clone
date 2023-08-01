import video2 from "../../assets/Images/video-devices-in.m4v";
import devicimg from "../../assets/Images/device-pile-in.png";

const Section5 = () => {
  return (
    <div className="section-5-parts">
      <div className="right">
        <h1>Watch everywhere</h1>
        <p>
          Stream unlimited movies and TV shows on your <br /> phone, tablet,
          laptop, and TV.
        </p>
      </div>
      <div className="left">
        <img src={devicimg} alt="dcd" />
        <video autoPlay muted playsInline loop>
          <source src={video2} />
        </video>
      </div>
    </div>
  );
};

export default Section5;
