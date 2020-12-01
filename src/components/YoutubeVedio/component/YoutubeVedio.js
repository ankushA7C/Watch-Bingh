import React from 'react';
import './style.css';

function YoutubeVedio(props) {

    return (
        <div>
            <iframe className="custom-css" src={'https://www.youtube.com/embed/' + props.youtubeLink}
                frameborder='0'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'
            />
        </div>
    );
}
export default YoutubeVedio