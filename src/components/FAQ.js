//import styles
import styled from "styled-components";
import { About } from "../styles";

const FAQ = () => {
  return (
    <Faq>
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start?</h4>
      </div>
      <div className="answer">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aliquid in
          eligendi eum praesentium dolore asperiores voluptate, beatae minus
          aperiam porro numquam omnis molestias consequuntur tenetur ipsum quae
          iusto fugit!
        </p>
      </div>
      <div className="question">
        <h4>Daily Schedule.</h4>
      </div>
      <div className="answer">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aliquid in
          eligendi eum praesentium dolore asperiores voluptate, beatae minus
          aperiam porro numquam omnis molestias consequuntur tenetur ipsum quae
          iusto fugit!
        </p>
      </div>
      <div className="question">
        <h4>Different Payments Methods.</h4>
      </div>
      <div className="answer">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aliquid in
          eligendi eum praesentium dolore asperiores voluptate, beatae minus
          aperiam porro numquam omnis molestias consequuntur tenetur ipsum quae
          iusto fugit!
        </p>
      </div>
      <div className="question">
        <h4>What Products Do You Offer?</h4>
      </div>
      <div className="answer">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aliquid in
          eligendi eum praesentium dolore asperiores voluptate, beatae minus
          aperiam porro numquam omnis molestias consequuntur tenetur ipsum quae
          iusto fugit!
        </p>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .answer {
    padding: 2rem 0rem;
    :after {
      display: block;
      content: "";
      background: #cccccc;
      height: 0.2rem;
      margin: 2rem 0;
      width: 100%;
    }
    p {
      padding: 1rem 0rem;
    }
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
`;

export default FAQ;
