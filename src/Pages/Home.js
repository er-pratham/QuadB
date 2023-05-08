import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowList = ({ history }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const { data } = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      setShows(data);
    };
    fetchShows();
  }, []);

  const handleShowClick = (id) => {
    history.push(`/shows/${id}`);
  };

  return (
    <div className="show-list">
      <h1>TV Shows</h1>
      {shows.map(({ show }) => (
        <div key={show.id} className="show-item">
          <img src={show.image?.medium} alt={show.name} />
          <h2>{show.name}</h2>
          <button onClick={() => handleShowClick(show.id)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default ShowList;