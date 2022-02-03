import axios from 'axios';
import { useEffect, useState } from 'react';
import './sidebar.css';

export default function Sidebar() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const res = await axios("./category");
      setCategory(res.data);
    };
    getCategory();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">BLOG APPLICATION</span>
        <img src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-1591056.jpg&fm=jpg" alt="Blog" />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {category.map((c) => (
            <li className="sidebarListItem">{c.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
