import Swal from "sweetalert2";
import axios from "../Axios";
import React, { useState } from "react";

export default function Status() {
  const [events, setEvents] = useState(null);
  const [eventname, setName] = useState("");
  const [searched, setSearched] = useState(false); // Track if a search has been made

  const findstatus = async (eventname) => {
    try {
      const response = await axios.get(`/status/${eventname}`);
      if (response.status === 200) {
        setEvents(response.data.event);
      } else if (response.status === 404 || !response.data.events) {
        setEvents(null);
        Swal.fire("Error", "No data Found", "ok");
      } else {
        Swal.fire("Error", "No data Found", "ok");
      }
      {
        setName("");
      }
    } catch (error) {
      Swal.fire("Error", "Error Occurred", "ok");
    } finally {
      setSearched(true);
    }
  };

  return (
    <>
      <div className="container mt-3">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-funnel-fill"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Event Name"
            value={eventname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button
            type="button"
            className="btn btn-info fs-5"
            onClick={() => findstatus(eventname)}
          >
            <i class="bi bi-search"></i>
            check Status
          </button>
        </div>
        <div className="mt-3">
          {searched &&
            (events ? (
              <div class="card">
                <div class="card-header fs-3">{events.name}</div>
                <div class="card-body">
                  <p class="card-text fs-5">{events.desc}</p>
                  {events.status === "accepted" ? (
                    <a href="#" className="btn btn-success fs-5">
                      Accepted
                    </a>
                  ) : events.status === "declined" ? (
                    <a href="#" className="btn btn-danger fs-5">
                      Declined
                    </a>
                  ) : (
                    <a href="#" className="btn btn-warning fs-5">
                      Pending
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <p>No data found</p>
            ))}
        </div>
      </div>
    </>
  );
}
