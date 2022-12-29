import React,{useEffect, useState} from "react";
import MoreProfiles from "./MoreProfiles";
import Profile from "./Profile";
const MainContent=()=>{
    const[numberOfComment,setNumberOfComment]=useState(0)
    const [myclass,setMyclass]= useState({
        pos:''
    })
    const people=[{id:1,name:'eli',image:'/images/work1.jpg'},{id:2,name:'edu',image:'/images/work1.jpg'},
    {id:3,name:'connie',image:'/images/work1.jpg'},{id:4,name:'centy',image:'/images/work1.jpg'}
]
    return(
        <div>
             <div className="me-wrapper">
                <span></span>
                <div className="me-container">
                    <img src="/images/work1.jpg"></img>
                    <div>
                        <button>Post a Project</button>
                        <button>Post a Job</button>
                    </div>
                </div>
             </div>
             <div className="me-description-wrapper">
                    <div className="me-image-wrapper">
                        <div className="imgwrapper">
                            <img src="/images/work1.jpg"></img>
                            <div className="me-wrapper">
                                <h5>John Doe</h5>
                                <p><i className="fa fa-clock-o" aria-hidden="true"></i> 3 min ago</p>
                            </div>
                        </div>
                        <div><i className="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                    </div>
                <div className="about-me-wrapper">
                        <div className="about-me-container">
                            <p><i className="fa fa-th-large" aria-hidden="true"></i> Epic coder</p>
                            <p><i className="fa fa-location-arrow" aria-hidden="true"></i> India</p>
                        </div>
                        <div className="about-me-icon-wrapper">
                            <div><i className="fa fa-bookmark" aria-hidden="true"></i></div>
                            <div> <i className="fa fa-envelope" aria-hidden="true"></i> </div>
                        </div>
                </div>
                <div className="about-me-job-container">
                    <h5>senior wordpress developer</h5>
                </div>
                <div className="about-me-job-rate">
                    <div><p>Full time</p></div>
                    <h5>$30/hr</h5>
                </div>
                <div className="about-me-text">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </div>
                <div className="about-me-skills">
                    <p>HTML</p>
                    <p>PHP</p>
                    <p>CSS</p>
                    <p>Javscript</p>
                    <p>Wordpress</p>
                </div>
                <div className="about-me-response-wrapper">
                    <div className="comment-wrapper">
                        <button><i className="fa fa-heart" aria-hidden="true"></i> Like</button>
                        <div className={`commentOnPosts ${myclass.pos}`}>
                            {people.map((person,index)=>{
                                return(
                                    <div key={person.id}>
                                        <img src={person.image} alt={person.name}/>
                                    </div>
                                )
                            })}
                        </div>
                        <button className="comment-btn"><i className="fa fa-comment" aria-hidden="true"></i> Comments 15</button>
                    </div>
                    <div><p><i className="fa fa-eye" aria-hidden="true"></i> Views 50</p></div>
                </div>
             </div>
             <Profile/>
             <MoreProfiles/>
        </div>
    )
}
export default MainContent