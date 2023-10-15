import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios, { Axios } from '../../Axios'
import { API_KEY, baseUrl, imageUrl } from '../Constants/Constants'
import { originalsUrl } from '../../Urls'
import YouTube, { YouTubeProps } from 'react-youtube'

function RowPost(props) {

    const [movie, setMovie] = useState([])
    // create state for storing perticular youtube ID
    const [key, setKey] = useState('')

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
        height: '500',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const movieTrailer = (id) => {
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
            if (response.data.results.length !== 0) {
                setKey(response.data.results[0].key)
            } else {
                console.log("array is empty");
            }
        })
    }

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
                            <img onClick={() => movieTrailer(movie.id)} className={props.isSmall ? 'is-small' : 'poster'} src={`${imageUrl + movie.backdrop_path}`} alt="posters image" />
                        </div>
                    )
                })}
            </div>
            {key && <YouTube videoId={key} opts={opts} />}
        </div>
    )
}

export default RowPost
