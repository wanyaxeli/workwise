
import './App.css';
import LeftContent from './components/LeftContent';
import MainContent from './components/MainContent';
import RightContent from './components/RightContent';

function App() {
  return (
    <div className="App">
      <header>
        <div className='header-wrapper'>
           <div className='logoWrapper'>
              <div className='logo'>
                <img src='/images/logo.png'></img>
              </div>
              <input type='search' placeholder='Search...'/>
              <button><i className="fa fa-search" aria-hidden="true"></i></button>
           </div>
            <nav>
              <ul>
                <li>
                  <div>
                  <i className="fa fa-home" aria-hidden="true"></i>
                  <h6>Home</h6>
                  </div>
                </li>
                <li>
                  <div>
                  <i className="fa fa-table" aria-hidden="true"></i>
                  <h6>Companies</h6>
                  </div>
                </li>
                <li>
                  <div>
                  <i className="fa fa-home" aria-hidden="true"></i>
                  <h6>Projects</h6>
                  </div>
                </li>
                <li>
                  <div>
                  <i className="fa fa-home" aria-hidden="true"></i>
                  <h6>Profile</h6>
                  </div>
                </li>
                <li>
                  <div>
                  <i className="fa fa-briefcase" aria-hidden="true"></i>
                  <h6>Jobs</h6>
                  </div>
                </li>
                <li>
                  <div>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <h6>Messages</h6>
                  </div>
                </li>
                <li>
                  <div>
                  <i className="fa fa-bolt" aria-hidden="true"></i>
                  <h6>Notifications</h6>
                  </div>
                </li>
              </ul>
              <div className='userWrapper'>
                <img src='/images/work1.jpg'></img>
                <p>John</p>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </div>
            </nav>
        </div>
      </header>
      <section>
        <div  className='contentWrapper'>
          <div className='left-content-wrapper'>
            <LeftContent/>
          </div>
          <div className='mid-content-wrapper'>
            <MainContent/>
          </div>
          <div className='right-content-wrapper'>
            <RightContent/>
          </div>
        </div>
        <div className='elipsiconwrapper'><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div>
      </section>
    </div>
  );
}

export default App;
