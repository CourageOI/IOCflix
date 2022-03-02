import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import ListItems from "../listItems/ListItems";
import "./list.scss";

const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();

  const handleScroll = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    console.log(distance);
  };

  <intro>
    {{
      name: "Osakpolor Courage Ihensekhien",
      role: "web developer (full stack)",
      School: "University of Benin",
      Course: "Mechanical Engineering",
    }}
  </intro>;
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleScroll("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItems index={0} />
          <ListItems index={1} />
          <ListItems index={2} />
          <ListItems index={3} />
          <ListItems index={4} />
          <ListItems index={5} />
          <ListItems index={6} />
          <ListItems index={7} />
          <ListItems index={8} />
          <ListItems index={9} />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleScroll("right")}
        />
      </div>
    </div>
  );
};

export default List;
