import React, { useEffect } from 'react';
import axios from 'axios';
import "./style.css"
import YoutubeVedio from "../../components/YoutubeVedio/index"
import MovieDetails from "../../components/MovieDetails/index"
import Cast from "../../components/Cast/index"

export default function View(props) {
    const [youtubeLink, setYoutubeLink] = React.useState('');
    const [cast, setCast] = React.useState([]);
    const [viewAllCast, setViewAllCast] = React.useState(false);

    useEffect(() => {
        console.log("VIEWW:", props);
        getTrailer(props.location.state.detail.id);
        getCast(props.location.state.detail.id);
    }, [])
    const getTrailer = async (id) => {
        try {
            let URl = 'https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US';
            const response = await axios.get(URl);
            console.log("Response", response.data.results[0].key);
            setYoutubeLink(response.data.results[0].key);
        } catch (error) {
            console.log(error);
        }
    }
    const getCast = async (id) => {
        try {
            let URl = 'https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US';
            const response = await axios.get(URl);
            console.log("Cast", response.data.cast);
            setCast(response.data.cast);
        } catch (error) {
            console.log(error);
        }
    }

    const handleViewAllCast = () => {
        setViewAllCast(!viewAllCast);
    }
    return (
        <>
            <YoutubeVedio youtubeLink={youtubeLink} />
            <hr></hr>
            <MovieDetails {...props} />
            <div className="row">
                <hr></hr>
                <div className="col-md-12">
                    <div className="col-md-9 cast-container">
                        Cast
                    </div>
                    <div className="col-md-3 cast-all" onClick={handleViewAllCast}>
                        {viewAllCast ? 'Hide All Cast' : 'View All Cast'}
                    </div>
                </div>
                {viewAllCast ? cast.map(item => <Cast {...item} />) : cast.slice(0, 12).map(item => <Cast {...item} />)}

            </div>
            <hr></hr>
        </>
    );
}
