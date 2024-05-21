import React, { useEffect ,useState} from 'react';
import axios from '../Axios';
import Card from '../components/Card';
import Swal from "sweetalert2";
export default function () {
    const [events, setEvents] = useState([]); 

    const fetchedEvents = async () => {
      try {
        const response = await axios.get('/pending');
        setEvents(response.data.pendingEvents); 
        console.log(events);
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
          console.log("Error decling event", error);
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
        <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title fs-4">{event.name}</h5>
          <hr/>
          <p className="card-text fs-5">Date : {event.date}</p>
          <div className="mb-3">
          <button
              type="button"
              class="btn btn-info mtb-3"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              view Details
            </button>
          </div>
          <button className="btn btn-success" onClick={() => handleAccept(event._id)}>Accept</button>
          <button className="btn btn-danger ms-3" onClick={() => handleDecline(event._id)}>Decline</button>
        </div>
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
                    {event.name}
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
            <div class="modal-body">
            <p className="card-text"><strong>Description:</strong> {event.desc}</p>
                <p className="card-text"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                <p className="card-text"><strong>Time:</strong> {event.timeIn} - {event.timeOut}</p>
                <p className="card-text"><strong>Venue:</strong> {event.venue}</p>
                <p className="card-text"><strong>Participants:</strong> {event.nParticipants}</p>
                <p className="card-text"><strong>Refreshments:</strong> {event.refreshments ? 'Yes' : 'No'}</p>
                <p className="card-text"><strong>Status:</strong> {event.status}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      ))}
    </div>
    </>
  )
}
