import React,{useState} from "react";
const MostViewed=()=>{
    const [checked,setChecked]=useState(false)
    const handleIcon =()=>{
        if(checked===false){
            setChecked(true)
        }else {
            setChecked(false)
        }
    }  
    return(
    <div className="suggestionwrapper">
            <div className="suggestionheaderwrapper">
                <div className="suggestionheader">
                    <h6>Most Viewed This Week</h6>
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
    )
}
 export default  MostViewed