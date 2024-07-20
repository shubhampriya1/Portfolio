import { CarFrontIcon } from "lucide-react";
import { Card } from "../ui/card";
import "./Image2Style.css";
import { Link } from "react-router-dom";

const Image2 = () => {
  return (
    <div className="Shubham">
      <Card/>
      <div className="mask">
        <img
          className="into-img"
          src="https://img.freepik.com/free-photo/3d-render-technology-background-with-code-male-head_1048-5960.jpg?size=626&ext=jpg"
          alt="into-img"
        />
      </div>
      <div className="content">
        <p>MY WORK IS HERE!!!</p>
        <h1>Projects</h1>

        <div className="coloum1">
          <Link to="https://github.com/shubhampriya1/Medium" className="btn">
            Project 1
          </Link>

          <Link
            to="https://github.com/shubhampriya1/chat-app"
            className="btn-light"
          >
            Project 2
          </Link>
        </div>
         
        <div className="coloum2">
          <Link
            to="https://github.com/shubhampriya1/MyntraClone"
            className="btn-light"
          >
            Project 3
          </Link>
          <Link
            to="https://github.com/shubhampriya1/TodoList5678"
            className="btn"
          >
            Project 4
          </Link>
        </div>
       <card/>
      </div>
    </div>
  );
};

export default Image2;
