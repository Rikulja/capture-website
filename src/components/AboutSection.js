//import images
import home1 from "../images/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi non
          libero, facilis placeat a perferendis itaque commodi obcaecati quasi
          maxime quas. At quisquam soluta dolorum alias voluptas explicabo vel
          officiis!
        </p>
        <button>Contact Us</button>
        <div className="image">
          <img src={home1} alt="man with the camera" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
