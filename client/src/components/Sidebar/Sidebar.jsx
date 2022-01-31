import './sidebar.css';

export default function Sidebar() {
  return (
<div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">BLOG APPLICATION</span>
        <img src = "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-1591056.jpg&fm=jpg" alt="Blog"/>
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">MUSIC</li>
          <li className="sidebarListItem">SCIENCE</li>
          <li className="sidebarListItem">ASTROLOGY</li>
        </ul>
      </div>
    </div>
  );
}
