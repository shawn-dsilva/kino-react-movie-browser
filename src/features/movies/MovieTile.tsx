import React,{FC} from 'react'
import './Movie.css';


// interface IPropType {
//     data: MovieData;
// }

type MovieData = {
    poster_path?: string,
    original_title?: string,
    title?: string,
    release_date?: any,
}

const MovieTile = ({poster_path,original_title,title,release_date}: MovieData) => {
    return (
        <div className="movieTile">
          <img src={"https://www.themoviedb.org/t/p/w342/"+poster_path} alt={original_title} /> 
          <h3>{title}</h3>
            <span>{release_date}</span>
        </div>
    )
}

export default MovieTile
