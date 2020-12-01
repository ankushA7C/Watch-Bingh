import React from 'react';
import './style.css';
import styled from 'styled-components'

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
function Cast(props) {
    const [info, setInfo] = React.useState(false);
    const handleMouseHover = () => {
        setInfo(!info);
    }

    return (
        <div className="col-md-2 pd-a-5">
            <CardContainer imgURL={props.profile_path}
                onMouseEnter={handleMouseHover}
                onMouseLeave={handleMouseHover}>
                {info &&
                    <div className="m-actor-info">
                        <div className="m-actor-name">{props.original_name}</div>
                        <div className="m-actor-role">{props.character}</div>
                    </div>
                }
            </CardContainer>
        </div>
    );
}
export default Cast;