import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Axios'
import { API_KEY, imageUrl } from '../Constants/Constants'

function Banner() {
    let a = 0
    const [movie, setMovie] = useState();
    const [index, setIndex] = useState(9);

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            if (index < response.data.results.length) {
                setMovie(response.data.results[index]);
            }
            console.log(movie);
        });
    }, []); // Trigger useEffect when index changes

    return (
        <div className="banner" style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : "loading..."})` }}>
            <div className="content">
                <h1 className="title">{movie ? movie.title : 'Loading...'}</h1>
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">{movie ? movie.overview : 'Loading...'}</h1>
            </div>
            <div className="fade-bottom"></div>
        </div>
    );
}

export default Banner;