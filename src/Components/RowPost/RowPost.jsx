import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios, { Axios } from '../../Axios'
import { API_KEY, baseUrl, imageUrl } from '../Constants/Constants'

function RowPost() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        // getting original movie with api calling, with our API key
        // we used axios instance which one we created in our Axios.jsx file, axios helps us to make HTTP request
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(resoponse => {
            // storing the movies into the state, results contains movies in array format
            setMovie(resoponse.data.results)
        }).catch(err => {
            // showing error
            // alert(err)
        })
        // catch field helps us to find errors that faced while we are trying to make the HTTP responce.

    }, [])

    return (
        <div className='row-post'>
            <h2>Netiflix Originals</h2>
            <div className="posters">
                {movie.map((movie) => {
                    return (
                        <div>
                            {/* we have a base url for images and specific url for each single movie so we concatanate with base url and 
                            single move url, backdrop_path is the image url for current movie that stored in movie object
                             */}
                            <img className='poster' src={`${imageUrl + movie.backdrop_path}`} alt="posters image" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RowPost
