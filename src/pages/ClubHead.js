import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { useNavigate,Link } from 'react-router-dom';
import Update from './Update';
import Request from './Request';
import Status from './Status';

export default function ClubHead() {

  const navigate=useNavigate();
  const handleLogOut=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate('/');
  }

  return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <a className="navbar-brand mx-3 ">UEMS</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
              <Link className="nav-link fs-5" to="/" style={{ color: "white" }}>
                Status <span className="sr-only"></span>
              </Link>
              </li> 
              <li className="nav-item">
              <Link className="nav-link fs-5" to="/register" style={{ color: "white" }}>
                Register <span className="sr-only"></span>
              </Link>
              </li> 
              
            </ul>
            <i class="bi bi-person-circle mx-1 fs-3">{localStorage.getItem('role')}</i> 
            <button
              type="button"
              class="btn bg-white text-success mx-1"
              onClick={handleLogOut}
              >
              LogOut
            </button>
          </div>
        </div>
      </nav>
      <Status/>

    </>
  );
}
