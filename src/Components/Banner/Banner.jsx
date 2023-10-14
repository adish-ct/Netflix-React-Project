import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Axios'
import { API_KEY } from '../Constants/Constants'

function Banner() {

    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((responce) => {
            setMovie(responce.data.results[0])
        })
    }, [])


    return (
        <div className='banner'>
            <div className="content">
                <h1 className="title"> {movie.title} </h1>
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description"> {movie} </h1>
            </div>
            <div className="fade-bottom"></div>
        </div>
    )
}

export default Banner
