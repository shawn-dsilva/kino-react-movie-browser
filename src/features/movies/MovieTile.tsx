import React,{FC} from 'react'
import './Movie.module.css';
import styles from './Movie.module.css';


interface IPropType {
    data: MovieData;
}

type MovieData = {
    poster_path?: string,
    original_title?: string,
    title?: string,
    release_date?: any,
}

const MovieTile: FC<IPropType> = ({data}) => {
    return (
        <div className={styles.movieTile}>
          <img src={"https://www.themoviedb.org/t/p/w342/"+data?.poster_path} alt={data?.original_title} /> 
          <h3>{data?.title}</h3>
            <span>{data?.release_date}</span>
        </div>
    )
}

export default MovieTile
