import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute(props) {
    const {Component} =props
    const navigate=useNavigate();
    useEffect(()=>{
        let token=localStorage.getItem('token');
        if(!token){
          navigate('/');
        }
    });
  return (
    <div>
        <Component/>
    </div>
  )
}

