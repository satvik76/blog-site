import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats,setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  },[]);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <br></br>
        <img 
          src="data:image/jpeg;base64,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" alt="nahi ayi" 
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, temporibus? Aliquid laudantium culpa facere cum.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link className="link" to={`/?cat=${c.name}`}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}