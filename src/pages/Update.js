import React, { useEffect, useState } from 'react';
import axios from '../Axios';
import Swal from "sweetalert2";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const fetchedEvents = async () => {
    try {
      const response = await axios.get('/pending');
      setEvents(response.data.pendingEvents);
    } catch (error) {
      console.log('Error in fetching events', error);
    }
  };

  const handleAccept = async (eventId) => {
    try {
      await axios.put(`/events/${eventId}`, { status: "accepted" });
      Swal.fire({
        icon: "success",
        title: "ACCEPTED",
        text: "Event Registered Successfully !!",
        confirmButtonText: "Ok",
      });
      fetchedEvents();
    } catch (error) {
      console.log("Error accepting event", error);
    }
  };

  const handleDecline = async (eventId) => {
    try {
      await axios.put(`/events/${eventId}`, { status: "declined" });
      Swal.fire({
        icon: "error",
        title: "DECLINED",
        text: "Event Declined !",
        confirmButtonText: "Ok",
      });
      fetchedEvents();
    } catch (error) {
      console.log("Error declining event", error);
    }
  };

  useEffect(() => {
    fetchedEvents();
  }, []);

  return (
    <>
      <div className="fs-3 m-3 text-center">Pending Events</div>
      <hr />
      <div className="container mt-5">
        {events.map((event, index) => (
          <div className="card mb-3" key={index}>
            <div className="card-body">
              <h5 className="card-title fs-4">{event.name}</h5>
              <hr />
              <p className="card-text fs-5">Date: {event.date}</p>
              <div className="mb-3">
                <button
                  type="button"
                  className="btn btn-info mtb-3"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  onClick={() => setSelectedEvent(event)}
                >
                  View Details
                </button>
              </div>
              <button className="btn btn-success" onClick={() => handleAccept(event._id)}>Accept</button>
              <button className="btn btn-danger ms-3" onClick={() => handleDecline(event._id)}>Decline</button>
            </div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div
          className="modal fade show"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
          style={{ display: 'block', paddingRight: '17px' }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title display-7 font-weight-bold text-muted" id="exampleModalLabel">
                  {selectedEvent.name}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setSelectedEvent(null)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p className="card-text"><strong>Description:</strong> {selectedEvent.desc}</p>
                <p className="card-text"><strong>Date:</strong> {new Date(selectedEvent.date).toLocaleDateString()}</p>
                <p className="card-text"><strong>Time:</strong> {selectedEvent.timeIn} - {selectedEvent.timeOut}</p>
                <p className="card-text"><strong>Venue:</strong> {selectedEvent.venue}</p>
                <p className="card-text"><strong>Participants:</strong> {selectedEvent.nParticipants}</p>
                <p className="card-text"><strong>Refreshments:</strong> {selectedEvent.refreshments ? 'Yes' : 'No'}</p>
                <p className="card-text"><strong>Status:</strong> {selectedEvent.status}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
