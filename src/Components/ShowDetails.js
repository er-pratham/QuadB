import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowDetails = ({ match }) => {
  const [show, setShow] = useState(null);
           

  useEffect(() => {
    const fetchShow = async () => {
      const { data } = await axios.get(`https://api.tvmaze.com/shows/${match.params.id}`);
      setShow(data);
    };
    fetchShow();
  }, [match.params.id]);

  const handleBookingClick = () => {
    // TODO: Implement booking functionality
  };

  return (
    <div className="show-details">
      {show ? (
        <>
          <h1>{show.name}</h1>
          <img src={show.image?.medium} alt={show.name} />
          <p>{show.summary}</p>
          <button onClick={handleBookingClick}>Book Movie Ticket</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowDetails;