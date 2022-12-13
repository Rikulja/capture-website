import athlete from "../images/athlete-small.png";
import racer from "../images/theracer-small.png";
import goodtimes from "../images/goodtimes-small.png";
import styled from "styled-components";

const Ourwork = () => {
  return (
    <Work>
      <Movie>
        <h1>Title</h1>
        <img src={athlete} alt="athlete"></img>
      </Movie>
      <Movie>
        <h1>Title</h1>
        <img src={racer} alt="racer"></img>
      </Movie>
      <Movie>
        <h1>Title</h1>
        <img src={goodtimes} alt="goodtimes"></img>
      </Movie>
    </Work>
  );
};

const Work = styled.div`
  min-height: 100vh;
  padding: 1rem 0rem;
`;

const Movie = styled.div`
  padding: 5rem 10rem;
  h1:after {
    display: block;
    content: "";
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  h1 {
    padding-bottom: 0.5rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export default Ourwork;
