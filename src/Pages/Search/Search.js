import React, { useEffect } from 'react';
import "./style.css"
import MovieList from "../../components/MovieList/index"
import axios from 'axios';
import LoaderObject from "../../components/Loader/index"
import Error404 from "../../components/Error404/index"

export default function Search(props) {
    const [searchList, setSerachList] = React.useState([])
    const [isLoader, setIsLoader] = React.useState(true)
    useEffect(() => {
        getMovieList(props.location.state.query)
    }, [props.location.state.query])
    const getMovieList = async (query) => {
        try {
            let URL = 'https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=' + query + '&page=1&include_adult=false';
            const response = await axios.get(URL);
            setSerachList(response.data.results);
            setIsLoader(false);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            { isLoader && <LoaderObject />}
            {searchList.length > 0 ? <MovieList list={searchList} /> : <Error404 />}
        </>
    );
}
