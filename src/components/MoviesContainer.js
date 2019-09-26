import React from 'react'
import MovieCard from './MovieCard'

const MoviesContainer = (props) => {
    const { westernMovies } = props

    const movieList = westernMovies.map(movie => {
        return <MovieCard addCurrentMovie={props.addCurrentMovie} movie={movie} />
    })

    return (
        <div className="movies-container">
            {movieList}
        </div>
    )

}

export default MoviesContainer