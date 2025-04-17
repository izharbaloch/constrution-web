import React, { useContext } from "react";
import {AuthContext} from '../backend/context/Auth'
import { Link } from "react-router-dom";

const Sidebar = () => {
    const {logout} = useContext(AuthContext);
  return (
    <>
      {/* Side bar */}
      <div className="card shadow border-0 ">
        <div className="card-body p-4 sidebar">
          <h4>SideBar</h4>
          <ul>
            <li><Link to="/admin/dashboard">Dashboard</Link></li>
            <li><Link to="/admin/services">Services</Link></li>
            <li><Link to="/admin/projects">Projects</Link></li>
            <li><Link to="/admin/articles">Articles</Link></li>
            <li><Link to="/admin/testimonials">Testimonials</Link></li>
            <li><Link to="/admin/members">Members</Link></li>
            <li>
                <button onClick={logout} className="btn btn-secondary mt-3">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
