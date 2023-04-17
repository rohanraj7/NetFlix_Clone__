import React, { useEffect, useState } from 'react';
import {API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'
import YouTube from 'react-youtube';

function Banner(){
    const  [movie , setMovie] = useState()
    const [urlId,setUrlId] = useState('')
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            const randomIndex = Math.floor(Math.random() * response.data.results.length)
            console.log('randomindex')
            console.log(response.data.results[randomIndex])
            setMovie(response.data.results[randomIndex])
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie = (id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
                console.log("valuegotit")
                console.log(response.data.results)
            }else{
                console.log('Array Empty')
            }
        })
      }
    return(
        <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
        className="banner">
            <div className="content">
                <h1 className="title">{ movie ? movie.title ||"":""}</h1>
                <div className="banner_button">
                
                    <button onClick={()=>handleMovie(movie.id)} className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className='description'>{movie ? movie.overview:""}</h1>
            </div>
            { urlId && <YouTube opts={opts} videoId={urlId.key} /> }
            <div className="fade"></div>
        </div>
    )
}

export default Banner