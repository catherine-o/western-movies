import React from 'react'
import MovieCard from './MovieCard'

const SciFiContainer = (props) => {
    const { sciFiMovies } = props

    const movieList = sciFiMovies.map(movie => {
        return <MovieCard addCurrentMovie={props.addCurrentMovie} movie={movie} />
    })

    return (
        <div className="movies-container">
            {movieList}
        </div>
    )

}

export default SciFiContainer