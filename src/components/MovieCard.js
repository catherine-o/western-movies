import React from 'react'

const MovieCard = (props) => {

    const { movie } = props

    const handleClick = movie => {
        props.addCurrentMovie(movie)
    }

    return (
        <div key={movie.id}
            className={movie.good
                ? "good"
                : "bad"}

            onClick={() => { handleClick(movie) }}>
            <h1>{movie.title}</h1>

        </div>

    )
}

export default MovieCard

//color of card 
//good movie = sage
//bad movie= mauve