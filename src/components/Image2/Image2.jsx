import { Card, CardContent, CardHeader } from "../ui/card";
import "./Image2Style.css";

const Image2 = () => {
  return (
    <div
      className="bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/3d-render-technology-background-with-code-male-head_1048-5960.jpg?size=626&ext=jpg)",
      }}
    >
      <div className="w-full max-w-6xl mx-auto py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-black bg-opacity-50">
        <div className="grid gap-24 md:gap-16">
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10">
            <Card>
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
                <p className="text-muted-foreground ">
                  A sleek and intuitive mobile app design for a fitness tracking
                  platform.
                </p>
              </CardContent>
            </Card>

            <Card>
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

            <Card>
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

            <Card>
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
    </div>
  );
};

export default Image2;
