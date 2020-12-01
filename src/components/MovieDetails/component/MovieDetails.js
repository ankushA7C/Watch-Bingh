import React, { useEffect } from 'react';
import './style.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

export default function MovieDetails(props) {

    return (
        <div className="row">
            <div className="col-md-4">
                <div className="movie-poster">
                    <img className="poster-img" src={'https://image.tmdb.org/t/p/w220_and_h330_face' + props.location.state.detail.poster_path}></img>
                </div>
            </div>
            <div className="col-md-8">
                <div className="movie-details-container">
                    <div className="m-d-tiltle">{props.location.state.detail.title}</div>
                    <div className="m-d-release">{props.location.state.detail.release_date}</div>
                    <div className="m-d-desc">{props.location.state.detail.overview}</div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="m-d-total-votes">{props.location.state.detail.vote_count}</div>
                        </div>
                        <div className="col-md-4">
                            <div className="m-d-popularity">{props.location.state.detail.popularity}</div>
                        </div>
                        <div className="col-md-4">
                            <div className="m-d-vote-avg">{props.location.state.detail.vote_average}</div>
                        </div>
                        <div className="col-md-4 text-align-center">
                            <ThumbsUpDownIcon style={{ fontSize: 50, color: 'white' }} />
                        </div>
                        <div className="col-md-4 text-align-center">
                            <FavoriteIcon style={{ fontSize: 50, color: 'white' }} />
                        </div>
                        <div className="col-md-4 text-align-center">
                            <ThumbUpAltIcon style={{ fontSize: 50, color: 'white' }} />
                        </div>
                        <div className="col-md-4 text-align-center">
                            <div className="m-d-total-votes-title">Total Votes</div>
                        </div>
                        <div className="col-md-4 text-align-center">
                            <div className="m-d-popularity-title">Popularity</div>
                        </div>
                        <div className="col-md-4 text-align-center">
                            <div className="m-d-vote-avg-title">Average Vote</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}
