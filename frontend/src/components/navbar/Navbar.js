import "./navbar.scss";
import netflix_logo from "../image/netflix-logo.png";
import profile_dp from "../image/profile_dp.jpg";
import { Search, Notifications, ArrowDropDown } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll === null;
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={netflix_logo} alt="" />

          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icons" />
          <span>KID</span>
          <Notifications className="icons" />
          <img src={profile_dp} alt="" />
          <div className="profile">
            <ArrowDropDown className="icons" />
            <div className="option">
              <span>Setting</span>
              <Link
                to={"/login"}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  padding: 10,
                }}
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
