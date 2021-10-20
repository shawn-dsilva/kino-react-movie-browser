import React from 'react'
import MovieTile from './MovieTile';
import styles from './Movie.module.css';
import {useGetMostPopularMoviesQuery } from '../../services/movies';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function MovieList() {

    const { data, error, isLoading } = useGetMostPopularMoviesQuery();

    let movieList: any;


    const makeMovieList = () => {

        console.log(data);
          movieList = data?.results.map( (movie) => <MovieTile data={movie}/>);
        console.log(movieList);
        return movieList;
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 3
    };

    return (
        <div>
            <h1>Popular Movies</h1>
            <div className={styles.movieListContainer}>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <Slider {...settings}>
        {makeMovieList()}
        </Slider>

      ) : null}
        </div>
        </div>
    )
}

export default MovieList
