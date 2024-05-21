import React, { useState} from "react";
import axios from '../Axios';
const Card = ({ event }) => {
    
    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <p className="card-text"><strong>Description:</strong> {event.desc}</p>
                <p className="card-text"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                <p className="card-text"><strong>Time:</strong> {event.timeIn}</p>
                <p className="card-text"><strong>Time:</strong> {event.timeOut}</p>
                <p className="card-text"><strong>Venue:</strong> {event.venue}</p>
                <p className="card-text"><strong>Participants:</strong> {event.nParticipants}</p>
                <p className="card-text"><strong>Refreshments:</strong> {event.refreshments ? 'Yes' : 'No'}</p>
                <p className="card-text"><strong>Status:</strong> {event.status}</p>
            </div>
        </div>
    );
};

export default Card;
