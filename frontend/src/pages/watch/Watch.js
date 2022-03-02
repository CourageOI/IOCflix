import "./watch.scss";
import { ArrowBackOutlined } from "@mui/icons-material";
import abejoye from "../../components/video/abejoye4.mkv";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video src={abejoye} className="video" autoPlay progress controls />
    </div>
  );
};

export default Watch;
