import React from "react";
const Footer=()=>{
    return(
        <div className="footer-wrapper">
            <ul>
                <li className="stroke">Help Center</li>
                <li className="addpad">About</li>
                <li>Privacy Policy</li>
                <li>Communty Guideline</li>
                <li className="stroke">cookies policy</li>
                <li className="addpad">career</li>
                <li className="stroke">Language</li>
                <li className="addpad">copyright policy</li>
            </ul>
            <div className="copyrightwrapper">
             <img src="/images/Screenshot4.png"/>
             <p><i className="fa fa-copyright" aria-hidden="true"></i> Copyright 2017</p>
            </div>
        </div>
    )
}
export default Footer