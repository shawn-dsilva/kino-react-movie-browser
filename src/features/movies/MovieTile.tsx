import React,{FC} from 'react'
import './Movie.css';


// interface IPropType {
//     data: MovieData;
// }


type MovieData = {
    poster_path?: string,
    original_title?: string,
    title?: string,
    name?: string,
    release_date?: any,
    first_air_date?: any
}

const dateFormat = (date:string) => {
    let newDate = new Date(date);
    let formattedDate = newDate.toLocaleString('en-US', {
        day: 'numeric', // numeric, 2-digit
        year: 'numeric', // numeric, 2-digit
        month: 'short', // numeric, 2-digit, long, short, narrow
    })

    return formattedDate;
    
}

const MovieTile = ({poster_path,original_title,title, name, release_date, first_air_date}: MovieData) => {
    return (
        <div className="movieTile">
          <img src={"https://www.themoviedb.org/t/p/w342/"+poster_path} alt={original_title} /> 
          <h3>{title === undefined ? name : title}</h3>
            <span>{release_date === undefined ? dateFormat(first_air_date) : dateFormat(release_date)}</span>
        </div>
    )
}

export default MovieTile
