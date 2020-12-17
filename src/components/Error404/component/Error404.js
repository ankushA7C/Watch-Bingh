import React from 'react';
import "./style.css"
import error from "../../../assets/images/error.png"


function Error404(props) {
    return (
        <div className="row">
            <div className="col-md-12 error-img">
                <img src={error} height="350px" />
                <div className="error-container">
                    <div>404</div>
                </div>
            </div>

        </div>
    );
}
export default Error404;