import React,{useState} from "react";
const MoreProfiles=()=>{
    const[numberOfComment,setNumberOfComment]=useState(0)
    const[pop,setPop]=useState(false)
    const[popColor,setPopColor]=useState({
        open:''
    })
    const [myclass,setMyclass]= useState({
        pos:''
    })
    const people=[{id:1,name:'eli',image:'/images/work1.jpg'},{id:2,name:'edu',image:'/images/work1.jpg'},
    {id:3,name:'connie',image:'/images/work1.jpg'},{id:4,name:'centy',image:'/images/work1.jpg'}
]
    const handlePopUp =()=>{
       if(pop===false){
        setPop(true)
        setPopColor({
            open:'popOutColor'
        })
       }else{
        setPop(false)
        setMyclass({
            open:''
        })
       }
    }
    return(
        <div>
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
                            <p><i className="fa fa-th-large" aria-hidden="true"></i> Front End Developer</p>
                            <p><i className="fa fa-location-arrow" aria-hidden="true"></i> India</p>
                        </div>
                        <div className="about-me-icon-wrapper">
                            <div><i className="fa fa-bookmark" aria-hidden="true"></i></div>
                            <div className="message"> <i className="fa fa-envelope" aria-hidden="true"></i> </div>
                            <button>Bid Now</button>
                        </div>
                </div>
                <div className="about-me-job-container">
                    <h5>simple classified site</h5>
                </div>
                <div className="about-me-job-rate">
                    <h6>$300 - $ 350</h6>
                </div>
                <div className="about-me-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...<button>Read More</button></p>
                </div>
                <div className="about-me-skills">
                    <p>HTML</p>
                    <p>PHP</p>
                    <p>CSS</p>
                    <p>Javscript</p>
                    <p>Wordpress</p>
                    <p>Photoshop</p>
                    <p>Coral Draw</p>
                </div>
                <div className="about-me-response-wrapper">
                    <div className="comment-wrapper">
                        <button className="likeBtn"><i className="fa fa-heart" aria-hidden="true"></i> Like</button>
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
             <div className="me-description-wrapper">
                    <div className="me-image-wrapper">
                        <div className="imgwrapper">
                            <img src="/images/work1.jpg"></img>
                            <div className="me-wrapper">
                                <h5>John Doe</h5>
                                <p><i className="fa fa-clock-o" aria-hidden="true"></i> 3 min ago</p>
                            </div>
                        </div>
                        <div className="popCursor" onClick={handlePopUp}><i className={`fa fa-ellipsis-v ${popColor.open}` } aria-hidden="true"></i></div>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...<button>Read More</button></p>
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
               <div className="reply-wrapper">
                  <div className="addIcon-wrapper">
                    < i className="fa fa-plus" aria-hidden="true"></i>
                  </div>
                  <div className="imgwrapper">
                            <img src="/images/work1.jpg"></img>
                            <div className="me-wrapper">
                                <h5>John Doe</h5>
                                <p className="clock-wrapper"><i className="fa fa-clock-o" aria-hidden="true"></i> 3 min ago</p>
                                <div className="reply-container">
                                    <p>Lorem ipsum dolor sit amet</p>
                                    <p><i className="fa fa-reply-all" aria-hidden="true"></i> Reply</p>
                                </div>
                            </div>
                  </div>
                  <div className="secreply-wrapper">
                            <img src="/images/work1.jpg"></img>
                            <div className="me-wrapper">
                                <h5>John Doe</h5>
                                <p className="clock-wrapper"><i className="fa fa-clock-o" aria-hidden="true"></i> 3 min ago</p>
                                <div className="reply-container">
                                    <p>Hi John</p>
                                    <p className="replyicon"><i className="fa fa-reply-all" aria-hidden="true"></i> Reply</p>
                                </div>
                            </div>
                  </div>
                  <div className="imgwrapper">
                            <img src="/images/work1.jpg"></img>
                            <div className="me-wrapper">
                                <h5>John Doe</h5>
                                <p className="clock-wrapper"><i className="fa fa-clock-o" aria-hidden="true"></i> 3 min ago</p>
                                <div className="reply-container">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
                                    <p className="thirdreplyicon"><i className="fa fa-reply-all" aria-hidden="true"></i> Reply</p>
                                </div>
                            </div>
                  </div>
                  <div className="sendPostInputWrapper">
                    <img src="/images/work1.jpg"></img>
                    <input placeholder="Post a Comment" type='text'/>
                    <button>Send</button>
                  </div>
               </div> 
             </div>
        </div>
    )
}
export default MoreProfiles