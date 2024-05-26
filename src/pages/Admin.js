import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Update from './Update';

export default function Admin() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate('/');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand  fs-2 mx-3 mb-1" to="/">UEMS</Link>
          <button class="navbar-toggler" 
           type="button" 
           data-toggle="collapse" 
           data-target="#navbarSupportedContent" 
           aria-controls="navbarSupportedContent"
           aria-expanded="false" 
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fs-5 btn" aria-current="page" to="/events">Events</Link>
              </li>
            </ul>
            <i className="bi bi-person-circle mx-1 fs-3" style={{ fontWeight: 'bold', fontFamily: 'sans-serif', transform: 'none', fontStyle: 'normal', textAlign: 'left' }}>
  {localStorage.getItem("role")}
</i>

            <button
              type="button"
              className="btn bg-white text-success mx-1"
              onClick={handleLogOut}
            >
              LogOut
            </button>
          </div>
        </div>
      </nav>
      <Update />
    </>
  );
}
