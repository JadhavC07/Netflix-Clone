import StrengeIMG from "../../assets/Images/mobile-0819.jpg";
import liStre from "../../assets/Images/boxshot.png";
import loadimg from "../../assets/Images/download-icon.gif";

const Section4 = () => {
  return (
    <div className="section-parts">
      <div className="right">
        <div className="img-div">
          <img src={StrengeIMG} alt="" />
        </div>
        <div className="icon-loading">
          <div className="imgSte">
            <img src={liStre} alt="" />
          </div>
          <div className="text-stre">
            <h3>Stranger Things</h3>
            <h3 className="down">Downloading...</h3>
          </div>
          <div className="icon">
            <img src={loadimg} alt="" />
          </div>
        </div>
      </div>
      <div className="left">
        <h2>Download your shows to watch offline</h2>
        <p>Save your favourites easily and always have something to watch.</p>
      </div>
    </div>
  );
};


export default Section4;