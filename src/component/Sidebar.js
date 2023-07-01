import React from 'react';
import {
  FaTh,
  FaUserAlt,
  FaCommentAlt,
  FaRegChartBar,
  FaShoppingBag,
  FaSignOutAlt,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <FaTh />,
    },
    {
      path: '/about',
      name: 'About',
      icon: <FaUserAlt />,
    },
    {
      path: '/comment',
      name: 'Comment',
      icon: <FaCommentAlt />,
    },
    {
      path: '/analytics',
      name: 'Analytics',
      icon: <FaRegChartBar />,
    },
    {
      path: '/product',
      name: 'Product',
      icon: <FaShoppingBag />,
    },
    {
      path: '/logout',
      name: 'Logout',
      icon: <FaSignOutAlt />,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <div>
          {menuItem.map((item) => {
            return (
              <NavLink
                to={item.path}
                name={item.name}
                className={`${
                  item.name != 'Logout' ? 'menu' : 'menu menu-logout'
                }`}
                activeClassName="active"
              >
                <div className="menu-icons">{item.icon}</div>
                <div className="nav-menu">{item.name}</div>
              </NavLink>
            );
          })}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
