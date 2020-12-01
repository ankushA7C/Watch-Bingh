import React from 'react';
import './style.css';
import styled from 'styled-components'
import { withRouter } from 'react-router';

const CardContainer = styled.div`
  border-radius: 10px;
  margin: 10px;
  height: 250px;
  cursor: pointer;
  background-color: azure;
  background-size: cover;
  background-image: url(https://image.tmdb.org/t/p/w220_and_h330_face${props => props.imgURL});
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.1) ;  
  }
`;
function MovieCard(props) {
    const [info, setInfo] = React.useState(false);
    const handleMouseHover = () => {
        setInfo(!info);
    }
    const onViewClick = (movie) => {
        props.history.push({
            pathname: '/view',
            search: '?query=viewDetails',
            state: { detail: movie }
        })
        console.log("Clicked:", movie);
    }
    return (
        <div className="col-md-2 pd-5">
            <CardContainer imgURL={props.movie.poster_path}
                onMouseEnter={handleMouseHover}
                onMouseLeave={handleMouseHover}>
                {info &&
                    <div className="m-info">
                        <div className="m-title">{props.movie.title}</div>
                        <div className="m-popularity">{props.movie.popularity}</div>
                        <div className="m-add-to-wishList" onClick={() => onViewClick(props.movie)}>View</div>
                    </div>
                }
            </CardContainer>
        </div>
    );
}
export default withRouter(MovieCard)