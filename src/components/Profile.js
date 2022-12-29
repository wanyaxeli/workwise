import React from "react";
const Profile = ()=>{
    const profile=[{id:1,name:'John Doe',image:'/images/work1.jpg',work:'graphic designer',image:'/images/work1.jpg'},{id:2,name:'Jane Doe',work:'PHP developer',image:'/images/work1.jpg'},
    {id:3,name:'John Doe',work:'frontend developer',image:'/images/work1.jpg'}]
    return(
        <div className="profile-wrapper">
             <div className="profile-header">
                <h4>top profiles</h4>
             </div>
             <div className="profile-container">
                    {
                        profile.map(item=>{
                            return(
                        <div key={item.id} className="card-wrapper">
                            <div className="card-img-wrapper">
                                <img src={item.image}/>
                            </div>
                            <h5>{item.name}</h5>
                            <p>{item.work}</p>
                            <div className="card-btn-wrapper">
                                <button>Follow</button>
                                <button><i className="fa fa-envelope" aria-hidden="true"></i></button>
                                <button>Hire</button>
                            </div>
                            <button className="profile-btn">view profile</button>
                        </div>
                            )
                        })
                    }
             </div>
             <div>
             <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
             <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
             </div>
        </div>
    )
}
export default Profile