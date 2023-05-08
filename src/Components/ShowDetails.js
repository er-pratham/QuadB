import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowDetails = () => {
  const [show, setShow] = useState(null);
  const [Booked, setBooked] = useState([])
       const {id}=useParams()

  useEffect(() => {
    const fetchShow = async () => {
      const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      setShow(data);
    };
    fetchShow();
  }, [id]);

  const handleBookingClick = (data) => {
   let newBooking={data:data}
   setBooked([...Booked,newBooking])
   console.log(Booked)
  };

  return (
    <div className="show-details">


  
  


      {show ? (
        <>
          <div className="top">
    <div className="columns">
      <div className="column is-full featured_wrapper p-0">
        <img src={show.image?.original} className="featured" />
        <div className="title_wrapper">
          <span className="has-text-white">Trending Today</span>
          <h1 className="title is-1 has-text-white">{show.name}</h1>
          <p>{show.summary}</p>
          <button className="button is-medium" onClick={()=>handleBookingClick(show)}>Book A Ticket</button>
        </div>
      </div>
    </div>
  </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <div className="cart-area">
    {Booked.length} Tickets Booked
  </div>
    </div>
  );
};

export default ShowDetails;