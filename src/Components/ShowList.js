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

  console.log(shows)

  const handleShowClick = (id) => {
    history.push(`/shows/${id}`);
    console.log(id)
  };

  return (
    <div className="show-list">
<div className="container">
    <div className="row">
        {
            shows.map(({show,score})=>{
                return <div className="col-md-4 my-2">
                <div class="card">
            <div class="card-top">
            <img src={show.image?.medium} alt={show.name} className="card-img" />
                <p class="card__title">{show.name}</p>
                <div class="rating">
                   
                   
                </div>
                {(score*10).toFixed(2)}
            </div>
            <div class="card__info">
                <p class="episode__num">46Ep</p>
                <p class="episode__type">Fantasy</p>
            </div>
            <div class="card__btns">
                <button class="add-btn" onClick={() => handleShowClick(show.id)}>+</button>
                <button class="watch-btn" onClick={() => handleShowClick(show.id)}>watch</button>
            </div>
        </div>
                </div>
            })
        }
        
    </div>
</div>



   
    </div>
  );
};

export default ShowList;