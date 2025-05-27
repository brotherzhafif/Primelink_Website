import React from 'react';

function Sidebar() {
  return (
    <aside className="app-sidebar sidebar-dark bg-dark">
      <div className="sidebar">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a href="#" className="nav-link active">Dashboard</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Analytics</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
