import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from '../Axios'
import Swal from 'sweetalert2'
export default function Navbar({ scrollToClubCard, scrollToFooter }) {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate =useNavigate()
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('/login', { username, password });
        const { status, data } = response;
    
        if (status === 200 && data.success) {
          const token = data.token;
          const role = data.role;
    
          localStorage.setItem('token', token);
          localStorage.setItem('role',role);
    
          if (role === 'Clubhead') {
            navigate("/clubhead");
          } else if (role === 'Admin') {
            navigate("/admin");
          }
    
          window.location.reload();
        } else {
          // Handle other status codes
          if (status === 404) {
            Swal.fire({
              icon: "error",
              title: "User not found",
              text: "Login with correct credentials",
              confirmButtonText: "Ok",
            });
          } else if (status === 401) {
            Swal.fire({
              icon: "error",
              title: "Incorrect",
              text: "Incorrect Password",
              confirmButtonText: "Ok",
            });
          } else {
            console.error("Unexpected response:", response);
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "An error occurred. Please try again later.",
              confirmButtonText: "Ok",
            });
          }
        }
      } catch (error) {
        if (error.response) {
          const { status } = error.response;
          if (status === 404) {
            Swal.fire({
              icon: "error",
              title: "User not found",
              text: "Login with correct credentials",
              confirmButtonText: "Ok",
            });
          } else if (status === 401) {
            Swal.fire({
              icon: "error",
              title: "Incorrect",
              text: "Incorrect Password",
              confirmButtonText: "Ok",
            });
          } else {
            console.error("Error response:", error.response);
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "An error occurred. Please try again later.",
              confirmButtonText: "Ok",
            });
          }
        } else {
          console.error("Error:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred. Please try again later.",
            confirmButtonText: "Ok",
          });
        }
      }
    };
    
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <a className=" navbar-brand fs-2 mx-3  mb-1">UEMS</a>
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
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item btn">
                <a className="nav-link active fs-5" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item btn">
                <a className="nav-link active fs-5" onClick={scrollToClubCard}  aria-current="page">
                  About Us
                </a>
              </li>
              <li className="nav-item btn">
                <a className="nav-link active fs-5" onClick={scrollToFooter} aria-current="page">
                  Contact Us
                </a>
              </li>
            </ul>
            <button
              type="button"
              class="btn bg-white text-success mx-1"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
               <h5 className="modal-title display-7 font-weight-bold text-muted" id="exampleModalLabel">
                    Login with your credentials
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
            </div>
            <div class="modal-body"><form onSubmit={handleLogin} >
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1" className="form-label" style={{'fontFamily':'serif','fontSize':'20px'}}>Username</label>
                      <input
                        type="text"
                        className="form-control mb-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1" className="form-label" style={{'fontFamily':'serif','fontSize':'20px'}}>Password</label>
                      <input
                        type="password"
                        className="form-control mb-2"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                      />
                    </div>
                    
                    <button type="submit" className="btn btn-secondary mb-2 mt-2">
                      Login
                    </button>
                  </form></div>
          </div>
        </div>
      </div>
    </>
  );
}
