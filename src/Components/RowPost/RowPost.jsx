import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios, { Axios } from '../../Axios'
import { API_KEY, baseUrl, imageUrl } from '../Constants/Constants'
import { originalsUrl } from '../../Urls'
import YouTube, { YouTubeProps } from 'react-youtube'

function RowPost(props) {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        // getting original movie with api calling, with our API key
        // we used axios instance which one we created in our Axios.jsx file, axios helps us to make HTTP request
        // originalsUrl is the url of originals movie section that we stored in Urls.jsx and imported here to optimise our code

        axios.get(props.url).then(resoponse => {
            // storing the movies into the state, results contains movies in array format
            setMovie(resoponse.data.results)
        }).catch(err => {
            // showing error
            // alert(err)
        })

        // catch field helps us to find errors that faced while we are trying to make the HTTP responce.

    }, [])


    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className='row-post'>
            <h2> {props.title} </h2>
            <div className="posters">
                {movie.map((movie) => {
                    return (
                        <div>
                            {/* we have a base url for images and specific url for each single movie so we concatanate with base url and 
                            single move url, backdrop_path is the image url for current movie that stored in movie object
                             */}
                            <img className={props.isSmall ? 'is-small' : 'poster'} src={`${imageUrl + movie.backdrop_path}`} alt="posters image" />
                        </div>
                    )
                })}
            </div>
            <YouTube videoId="2g811Eo7K8U" opts={opts} />
        </div>
    )
}

export default RowPost
