import React from 'react'

const MovieSpec = (props) => {
    const { movie, switchRating } = props

    const handleClick = movie => {
        switchRating(movie)
    }
    return (
        <div key={movie.id}
            className={movie.good
                ? "good"
                : "bad"}>
            <h1>{movie.title}</h1>
            <button onClick={() => handleClick(movie)}>Make {movie.good ? "Bad" : "Good"}</button>

        </div>
    )

}
export default MovieSpec