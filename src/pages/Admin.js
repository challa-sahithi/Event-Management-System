import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import axios from '../Axios';
import { useNavigate } from 'react-router-dom';
import Update from './Update';

export default function Admin() { 
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
                <a className="nav-link active fs-5" aria-current="page">
                  Events
                </a>
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
      <Update/>
    </>
  );
}
