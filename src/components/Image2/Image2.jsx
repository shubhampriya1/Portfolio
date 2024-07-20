import { CarFrontIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import "./Image2Style.css";

const Image2 = () => {
  return (
    <div className="Shubham">
      <Card />
      <div className="mask">
        <img
          className="into-img"
          src="https://img.freepik.com/free-photo/3d-render-technology-background-with-code-male-head_1048-5960.jpg?size=626&ext=jpg"
          alt="into-img"
        />
      </div>
      <Card />
      <div className="content">
        {/* <p>MY WORK IS HERE!!!</p>
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
          </Link> */}

        <div className="flex">
          <Card className="h-[400px]">
            <CardHeader>
              <img
                src="https://utfs.io/f/8f09024d-8f2e-47a2-b637-16aa1c016dff-ca7koy.jpg"
                width="550"
                height="310"
                alt="Project 2"
                className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
              />
            </CardHeader>
            <CardContent className="space-y-2">
              <h3 className="text-xl font-bold">Project 2</h3>
              <p className="text-muted-foreground">
                A sleek and intuitive mobile app design for a fitness tracking
                platform.
              </p>
            </CardContent>
          </Card>

          <Card className="h-[400px]">
            <CardHeader>
              <img
                src="https://utfs.io/f/8f09024d-8f2e-47a2-b637-16aa1c016dff-ca7koy.jpg"
                width="550"
                height="310"
                alt="Project 2"
                className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
              />
            </CardHeader>
            <CardContent className="space-y-2">
              <h3 className="text-xl font-bold">Project 2</h3>
              <p className="text-muted-foreground">
                A sleek and intuitive mobile app design for a fitness tracking
                platform.
              </p>
            </CardContent>
          </Card>

          <Card className="h-[400px]">
            <CardHeader>
              <img
                src="https://utfs.io/f/8f09024d-8f2e-47a2-b637-16aa1c016dff-ca7koy.jpg"
                width="550"
                height="310"
                alt="Project 2"
                className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
              />
            </CardHeader>
            <CardContent className="space-y-2">
              <h3 className="text-xl font-bold">Project 2</h3>
              <p className="text-muted-foreground">
                A sleek and intuitive mobile app design for a fitness tracking
                platform.
              </p>
            </CardContent>
          </Card>
          <Card className="h-[400px]">
            <CardHeader>
              <img
                src="https://utfs.io/f/8f09024d-8f2e-47a2-b637-16aa1c016dff-ca7koy.jpg"
                width="550"
                height="310"
                alt="Project 2"
                className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
              />
            </CardHeader>
            <CardContent className="space-y-2">
              <h3 className="text-xl font-bold">Project 2</h3>
              <p className="text-muted-foreground">
                A sleek and intuitive mobile app design for a fitness tracking
                platform.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Image2;
