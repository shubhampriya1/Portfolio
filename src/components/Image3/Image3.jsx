import "./Image3Style.css";
import { Link } from "react-router-dom";

const Image2 = () => {
  return (
    <div className="Shubham">
      <div className="mask">
        <img
          alt="into-img"
          className="into-img"
          src="https://images.unsplash.com/photo-1475257026007-0753d5429e10?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="content">
        <h1>Who Am i?</h1>
        <h4> Hello,I am Shubham priya ,</h4>
        <h4> B-Tech 3rd year Student</h4>
        <p className="md:">
          Coming up with your statement So, how do you write these magical words
          that will intrigue people enough to stay on your website a little
          longer? There’s no easy answer to this question I’m afraid. But I’ll
          do my best to guide you on how to put together a killer intro
          statement! Let’s start with what information this statement needs to
          convey. There are three things you need to let your visitors know in
          and how you say it.{" "}
        </p>
        <div className="pt-6  ">
          <Link
            to="https://drive.google.com/file/d/1hcIzqg6iuBzKYoVjMD4qM_iN1wcUJyRc/view?usp=drive_link"
            className="btn"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Image2;
