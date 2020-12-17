import React from 'react';
import './style.css'
import Loader from 'react-loader-spinner'


export default function LoaderObject(props) {

    return (
        <div className='loaderContainer'>
            <div className='loader'>
                <Loader
                    type="Grid"
                    color="#00BFFF"
                    height={100}
                    width={100}
                // timeout={3000} //3 secs

                />
            </div>
        </div>

    );
}
