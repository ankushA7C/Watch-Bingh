import React, { useEffect } from 'react';
import axios from 'axios';

function GetTrailer(props) {
    useEffect(() => {
        getMovieList();
    }, [props.qvfName]);

    const getMovieList = async () => {
        try {
            let URl = 'https://api.themoviedb.org/3/movie/' + props.movieId + '/videos?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US';
            const response = await axios.get(URl);
            // console.log(response.data);
            props.getTrailer(response.data.results);
        } catch (error) {
            console.log(error);
        }
    };
    return <span />;
}

export default GetTrailer;
