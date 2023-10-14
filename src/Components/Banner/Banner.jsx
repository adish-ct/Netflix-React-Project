import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Axios'
import { API_KEY } from '../Constants/Constants'

function Banner() {
    const [movie, setMovie] = useState();

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            setMovie(response.data.results[1]);
        });
    }, []);

    return (
        <div className="banner">
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
