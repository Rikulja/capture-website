//Import icons
import clock from "../images/clock.svg";
import diaphragm from "../images/diaphragm.svg";
import money from "../images/money.svg";
import teamwork from "../images/teamwork.svg";
import home2 from "../images/home2.png";

const ServicesSection = () => {
  return (
    <div>
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock" />
              <h2>Efficient</h2>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="clock" />
              <h2>Efficient</h2>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={money} alt="clock" />
              <h2>Efficient</h2>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="clock" />
              <h2>Efficient</h2>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <img src={home2} alt="" />
    </div>
  );
};

export default ServicesSection;
