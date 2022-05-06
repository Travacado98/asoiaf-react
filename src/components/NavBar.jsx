import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const navLinks = [
    { title: 'Books', to: 'books/' },
    { title: 'Characters', to: 'characters/' },
    { title: 'Houses', to: 'houses/' },
  ];

  const renderNavLinks = () => navLinks.map(({ title, to }) => (
    <li className="nav-item" key={title}>
      <NavLink className="nav-link" to={to}>{title}</NavLink>
    </li>
  ));

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src="../images/site-header.jpeg" alt="" height="50" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {renderNavLinks()}
          </ul>
        </div>
      </div>
    </nav>
  );
}
