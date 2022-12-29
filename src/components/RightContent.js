import React from "react";
import MostViewed from "./MostViewePeople";
const RightContent = ()=>{
    return(
        <div className="rightContentWrapper">
         <div className="right-logo-wrapper">
             <div>
                <img src="/images/Screenshot3.png"/>
             </div>
             <h5>Track Time on Workwise</h5>
             <p>Pay only for hours worked</p>
             <div className="rightContentBtn">
               <button>Sign Up</button> 
               <button>Learn More</button> 
             </div>
         </div>
          <div className="jobs-wrapper">
            <div className="suggestionheaderwrapper">
                    <div className="suggestionheader">
                        <h5>Top Jobs</h5>
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
            </div>
            <div className="other-profile-wrapper">
                <div className="suggested-user-wrapper top-jobs-container">
                     <div className="top-job-description">
                       <h6>Senior Designer</h6>
                       <p>Lorem ipsum dolor sit amet</p>
                     </div>
                       <h6>$25/hr</h6>
                </div>
                <div className="suggested-user-wrapper top-jobs-container">
                     <div className="top-job-description">
                       <h6>Senior Designer</h6>
                       <p>Lorem ipsum dolor sit amet</p>
                     </div>
                       <h6>$25/hr</h6>
                </div>
                <div className="suggested-user-wrapper top-jobs-container">
                     <div className="top-job-description">
                       <h6>Senior Designer</h6>
                       <p>Lorem ipsum dolor sit amet</p>
                     </div>
                       <h6>$25/hr</h6>
                </div>
             </div>
          </div>
          <div className="jobs-wrapper">
                <div className="suggestionheaderwrapper">
                        <div className="suggestionheader">
                            <h6>Most Viewed This Week</h6>
                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                        </div>
                </div>
                <div className="other-profile-wrapper">
                    <div className="suggested-user-wrapper top-jobs-container">
                        <div className="top-job-description">
                        <h6>Senior Designer</h6>
                        <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <h6>$25/hr</h6>
                    </div>
                    <div className="suggested-user-wrapper top-jobs-container">
                        <div className="top-job-description">
                        <h6>Senior Designer</h6>
                        <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <h6>$25/hr</h6>
                    </div>
                    <div className="suggested-user-wrapper top-jobs-container">
                        <div className="top-job-description">
                        <h6>Senior Designer</h6>
                        <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <h6>$25/hr</h6>
                    </div>
                </div>
          </div>
          <MostViewed/>
        </div>
    )
}
export default RightContent 