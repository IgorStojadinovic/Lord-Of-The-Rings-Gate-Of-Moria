import Navbar from "../components/navigation/Navbar";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import video from "../components/assets/videos/video1.mp4";

const FirstMovie = () => {
  const plyrProps = {
    source: video,
  };
  return (
    <>
      <Navbar />
      <div className="h-[90vh] flex justify-center items-center">
        <div className="flex flex-col">
          <Plyr
            {...plyrProps}
            src={video}
            style={{ maxHeight: "800px", maxWidth: "100%" }}
            autoPlay={true}
          />
        </div>
      </div>
    </>
  );
};
export default FirstMovie;
