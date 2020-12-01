import React, { useEffect } from 'react';
import axios from 'axios';

function GetMovie(props) {
    useEffect(() => {
        getMovieList();
    }, [props.qvfName]);

    const getMovieList = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=new&page=1&include_adult=false`);
            // console.log(response.data);
            props.callback(response.data.results);
        } catch (error) {
            console.log(error);
        }
    };
    return <span />;
}

export default GetMovie;
