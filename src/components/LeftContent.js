import React,{useState} from "react";
import Footer from "./Footer";
const LeftContent=()=>{
    const [checked,setChecked]=useState(false)
    const handleIcon =()=>{
        if(checked===false){
            setChecked(true)
        }else {
            setChecked(false)
        }
    }
    return(
        <div className="leftcontent-wrapper">
           <div className="user-profile-wrapper">
                <div className="left-image-wrapper"></div>
                <div className="left-profile-wrapper">
                    <img src="/images/work1.jpg"></img>
                    <h5>John Doe</h5>
                    <p>Graphic Designer at Self Employed</p>
                </div>
                <div className="following-wrapper">
                    <h5>Following </h5>
                    <p>55</p>
                </div>
                <div className="followers-wrapper">
                    <h5>Followers </h5>
                    <p>155</p>
                </div>
                <div className="left-btn-wrapper">
                    <button>View Profile</button>
                </div>
           </div>
           <div className="suggestionwrapper">
             <div className="suggestionheaderwrapper">
                <div className="suggestionheader">
                    <h5>Suggestions</h5>
                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
             </div>
             <div className="other-profile-wrapper">
                <div className="suggested-user-wrapper">
                 <div className="suggested-user-image-wrapper">
                    <img src="/images/work1.jpg"></img>
                     <div className="suggested-user-description">
                       <h6>John Doe</h6>
                       <p>PHP developer</p>
                     </div>
                 </div>
                 {checked === false?<button className="notCheckedBtn" onClick={handleIcon}><i className="fa fa-plus" aria-hidden="true"></i></button> :<button className="checkedBtn" onClick={handleIcon}><i className="fa fa-check" aria-hidden="true"></i></button> } 
                </div> 
                <div className="suggested-user-wrapper">
                 <div className="suggested-user-image-wrapper">
                    <img src="/images/work1.jpg"></img>
                     <div className="suggested-user-description">
                       <h6>John Doe</h6>
                       <p>PHP developer</p>
                     </div>
                 </div>
                 {checked === false?<button className="notCheckedBtn" onClick={handleIcon}><i className="fa fa-plus" aria-hidden="true"></i></button> :<button className="checkedBtn" onClick={handleIcon}><i className="fa fa-check" aria-hidden="true"></i></button> } 
                </div> 
                <div className="suggested-user-wrapper">
                 <div className="suggested-user-image-wrapper">
                    <img src="/images/work1.jpg"></img>
                     <div className="suggested-user-description">
                       <h6>John Doe</h6>
                       <p>PHP developer</p>
                     </div>
                 </div>
                 {checked === false?<button className="notCheckedBtn" onClick={handleIcon}><i className="fa fa-plus" aria-hidden="true"></i></button> :<button className="checkedBtn" onClick={handleIcon}><i className="fa fa-check" aria-hidden="true"></i></button> } 
                </div> 
             </div>
             <div className="suggestedBtn">
                <button>View More</button>
             </div>
           </div>
           <Footer/>
        </div>
    )
}
export default LeftContent