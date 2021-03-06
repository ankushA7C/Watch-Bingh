import React from 'react';
import Slider from 'infinite-react-carousel';
import './style.css'
import styled from 'styled-components'

const PosterContainer = styled.div`
background-image: linear-gradient(to right, rgb(2 0 36 / 56%) 0%, rgb(170 4 12 / 41%) 100%), url(https://image.tmdb.org/t/p/w220_and_h330_face${props => props.imgURL});
height:100%;
background-size: 100% 100%;
`;
const PosterContainer2 = styled.div`
background-image: linear-gradient(to right, rgb(2 0 36 / 56%) 0%, rgb(170 4 12 / 41%) 100%), url(https://image.tmdb.org/t/p/w220_and_h330_face${props => props.backdrop});
height:100%;
background-size: 100% 100%;
`;
export default function SearchBox(props) {

    return (
        <div className="row">
            {props.check &&
                <Slider autoplay={true} autoplaySpeed={3000}>

                    {props.list.map((data, index) => {
                        return (<div className="col-md-12">
                            <div className="searchBox-container">
                                <div className="row h-100">
                                    <div className="col-md-4 pd-50 h-100">
                                        <div className="movie-name">{data.title}</div>
                                        <div className="release-date">{data.release_date}</div>
                                        <div className="popularity">{data.popularity}</div>
                                    </div>
                                    <div className="col-md-4 h-100">
                                        <PosterContainer imgURL={data.poster_path} />
                                    </div>
                                    <div className="col-md-4 h-100">
                                        <PosterContainer2 backdrop={data.backdrop_path} />
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })}
                </Slider>}
        </div>
    );
}
