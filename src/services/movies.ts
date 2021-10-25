// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = "e5e7cbac57dbc491ff662e86aa8d087a";
//API KEY e5e7cbac57dbc491ff662e86aa8d087a

interface IResult {
  page: number;
  results: object[];
  total_pages:number;
  total_results:number;
}
// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3'}), tagTypes: [],
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (id) => `/movie/${id}?api_key=${API_KEY}`,
    }),
    getMostPopularMovies: builder.query<IResult,void>({
      query: () => `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&language=en-US`,
    }),
    getTrending: builder.query<IResult,void>({
      query: () => `/trending/all/week?api_key=${API_KEY}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetMostPopularMoviesQuery, useGetTrendingQuery } = pokemonApi