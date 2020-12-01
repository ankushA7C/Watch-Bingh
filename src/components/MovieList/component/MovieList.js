import React, { useEffect } from 'react';
import './style.css'
import MovieCard from '../../MovieCard/index'
import GetMovie from '../../../API/MovieAPI/GetMovie'

export default function MovieList(props) {
    const [movieCount, setMovieCount] = React.useState([]);
    const onMessage = (list) => {
        setMovieCount(list);
        console.log("Movie List:", list)
    }

    return (

        <div className="row">
            <GetMovie callback={onMessage} />
            {movieCount && movieCount.map((data, index) => <MovieCard movie={data} key={data.id} />)}

        </div>
    );
}
