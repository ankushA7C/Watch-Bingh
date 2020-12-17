import React, { useEffect } from 'react';
import './style.css'
import MovieCard from '../../MovieCard/index'

export default function MovieList(props) {
    return (

        <div className="row">
            {props.list && props.list.map((data, index) => <MovieCard movie={data} key={data.id} />)}
        </div>
    );
}
