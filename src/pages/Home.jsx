import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    document.title = 'ASOIAF | Home';
  }, []);

  return (
    <div className="card text-center mt-50">
      <div className="card-header">
        Welcome!
      </div>
      <div className="card-body">
        <h5 className="card-title">A Wiki of Ice and Fire</h5>
        <p className="card-text">Explore the Seven Kingdoms!</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
      <div className="card-footer text-muted">
        Features:
      </div>

      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <NavLink to="/books">
              <h5 className="card-title">Books</h5>
            </NavLink>
            <p className="card-text">View all main series books and side books.</p>
            <p className="card-text"><small className="text-muted" /></p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <NavLink to="/characters">
              <h5 className="card-title">Characters</h5>
            </NavLink>
            <p className="card-text">View all POV characters.</p>
            <p className="card-text"><small className="text-muted" /></p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <NavLink to="/houses">
              <h5 className="card-title">Houses</h5>
            </NavLink>
            <p className="card-text">Explore all the houses of the Seven Kingdoms!.</p>
            <p className="card-text"><small className="text-muted" /></p>
          </div>
        </div>
      </div>
    </div>
  );
}
