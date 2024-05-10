import "./index.css";

import { NavLink } from "react-router-dom";
import book from "../../assets/book.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import schedule from "../../assets/planning.svg";
import search from "../../assets/search.svg";

function Header() {
  return (
    <div className="p-10">
      <div className=" flex justify-between pb-8 flex-col sm:flex-row gap-16 sm:gap-0">
        <div className=" flex justify-center items-center gap-4">
          <img className="w-16 h-16" src={book} alt="img" />
          <h1>Biblio-Tech</h1>
        </div>
        <div className="flex justify-center items-center gap-4">
          <img className="w-8 h-8" src={youtube} alt="youtube" />
          <img className="w-8 h-8" src={instagram} alt="instagramm" />
          <img className="w-8 h-8" src={facebook} alt="facebook" />
        </div>
      </div>
      <div className="border-t-2 border-b-2 sm:p-0 border-black flex justify-between items-center sm:flex-row  flex-col gap-8 pb-4">
        <div className="flex gap-8 font-bold py-4">
          <div className="line_contianer">
            <NavLink to={"/"}>Home</NavLink>
            <div className="line w-full border border-black"></div>
          </div>
          <div className="line_contianer">
            <NavLink to={"/book"}>Books</NavLink>
            <div className="line w-full border border-black"></div>
          </div>
          <div className="line_contianer">
            <NavLink to={"/event"}>Events</NavLink>
            <div className="line w-full border border-black"></div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-8">
          <img className="w-8 h-8" src={search} alt="search" />
          <img className="w-8 h-8" src={schedule} alt="schedule" />
        </div>
      </div>
    </div>
  );
}

export default Header;
