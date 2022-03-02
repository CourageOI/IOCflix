import "./featured.scss";
import backgroundIm from "../image/image2.jpg";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import mImage from "../image/matrix.webp";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "TV Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={backgroundIm} alt="" />

      <div className="info">
        <img src={mImage} alt="" />
        <span className="disc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
          aliquam possimus accusantium repellendus esse officiis doloribus
          minima voluptate illo impedit dolores corporis eos nulla aspernatur
          maxime eligendi tenetur at quod
        </span>
        <div className="button">
          <button className="play">
            <PlayArrow />
            <span>play</span>
          </button>
          <button className="more-info">
            <InfoOutlined />
            <span>info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
