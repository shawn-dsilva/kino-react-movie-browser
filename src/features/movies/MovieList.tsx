import React from 'react'
import MovieTile from './MovieTile';
import {useGetMostPopularMoviesQuery, useGetTrendingQuery } from '../../services/movies';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  './Movie.css';


function MovieList() {

    // const { data, error, isLoading } = useGetMostPopularMoviesQuery();
    const { data, error, isLoading } = useGetTrendingQuery();


    let movieList: any;


    const makeMovieList = () => {

        console.log(data);
          movieList = data?.results.map( (movie) => <MovieTile {...movie}/>);
        console.log(movieList);
        return movieList;
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3
    };

    return (
        <div className="movieListContainer">
            <h1>🔥 Trending Movies & TV Shows</h1>
            <div >
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
