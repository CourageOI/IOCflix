import "./listItems.scss";
import abatoir from "../image/abejoye.jfif";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import abejoye from "../video/abejoye4.mkv";
import { Link } from "react-router-dom";

const ListItems = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={abatoir} alt="" />

      {isHovered && (
        <>
          <video src={abejoye} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <Link
                to={"/watch"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <PlayArrow className="icon" />
              </Link>
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 15 mins</span>
              <span className="ageLimit">+13</span>
              <span>2020</span>
            </div>
            <div className="descr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              perferendis animi, sit nemo provident nisi sequi.
            </div>

            <div className="genre">Genre</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItems;
