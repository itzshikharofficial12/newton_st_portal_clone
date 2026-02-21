import './middlesection.css'
import { IoIosTimer } from "react-icons/io";
import AssingmentData from '../data/assingment-data'
import { BiSpreadsheet } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
import { LuTrophy } from "react-icons/lu";
import { MdOutlineQuiz } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";
import Assignment from './Assignment.jsx';
// import AssingmentData from '../data/assingment-data';


const MiddleSection = () => {
  return (
    <div className='main'>
      <div className='main-content'>
        <div className='section-block'>
          <div className='latest-card-top'>
            <div className='latest-icon'>
              <IoIosTimer className='timer-icon' />
            </div>
            <div className='latest-text'>
              <h2>Latest Released</h2>
              <p>All your tasks released recently</p>
            </div>
          </div>
          <div className='latest-assingment-list'>
            {AssingmentData.map((item, index) => {
              return <Assignment
                key={index}
                classType={item.classType}
                subject={item.subject}
                title={item.title}
                deadline={item.deadline}
                xp={item.xp}
                solved={item.solved}
                is_pending={item.is_pending}
              />
            })}
          </div>
        </div>

        <div className='section-block'>
          <div className='deadline-card-top'>
            <div className='latest-icon'>
              <IoIosTimer className='timer-icon' />
            </div>
            <div className='latest-text'>
              <h2>Upcoming Deadlines</h2>
              <p>Tasks that are due</p>
            </div>
          </div>
          <div className='latest-assingment-list deadline-assingment'>
            {AssingmentData.filter((item) => item.is_pending).map((item, index) => {
              return <Assignment    
                key={index}
                classType={item.classType}
                subject={item.subject}
                title={item.title}
                deadline={item.deadline}
                xp={item.xp}
                solved={item.solved}
                is_pending={item.is_pending}
                deadline_list={true}
              />
            })}
          </div>
        </div>

        <div className='section-block'>
          <div className='performance-section'>
            <h2 className='performance-title'>Your performance</h2>
            <div className='performance-banner'>
              <div className='performance-banner-left'>
                <div className='performance-banner-icon'><BiSpreadsheet className='spreadsheet-icon' /></div>
                <p><span>68 pending assignment questions</span>, solve them to boost your placement score.</p>
              </div>
              <button className='performance-banner-btn'>MY ASSIGNMENTS</button>
            </div>

            <div className='performance-grid'>
              <div className='performance-card'>
                <div className='performance-card-left'>
                  <div className='performance-card-icon'><MdLiveTv className='live-tv-icon' /></div>
                  <div className='performance-card-text'>
                    <p className='performance-card-title'>Lecture</p>
                    <p className='performance-card-score'>74% <span>(59/79)</span></p>
                  </div>
                </div>
                <div className='performance-card-arrow'>›</div>
              </div>

              <div className='performance-card'>
                <div className='performance-card-left'>
                  <div className='performance-card-icon'><BiSpreadsheet className='spreadsheet-icon' /></div>
                  <div className='performance-card-text'>
                    <p className='performance-card-title'>My Assignments</p>
                    <p className='performance-card-score'>72% <span>(181/249)</span></p>
                  </div>
                </div>
                <div className='performance-card-arrow'>›</div>
              </div>

              <div className='performance-card'>
                <div className='performance-card-left'>
                  <div className='performance-card-icon'><LuTrophy className='trophy-icon' /></div>
                  <div className='performance-card-text'>
                    <p className='performance-card-title'>Contests</p>
                    <p className='performance-card-score'>91% <span>(32/35)</span></p>
                  </div>
                </div>
                <div className='performance-card-arrow'>›</div>
              </div>

              <div className='performance-card'>
                <div className='performance-card-left'>
                  <div className='performance-card-icon'><MdOutlineQuiz className='quiz-icon' /></div>
                  <div className='performance-card-text'>
                    <p className='performance-card-title'>Quizzes</p>
                    <p className='performance-card-score'>100% <span>(17/17)</span></p>
                  </div>
                </div>
                <div className='performance-card-arrow'>›</div>
              </div>
            </div>
          </div>
        </div>

        <div className='section-block'>
          <div className='session-section'>
            <h2 className='session-title'>Your Sessions</h2>
            <div className='session-card'>
              <div className='session-card-left'>
                <div className='session-icon'><MdOutlinePeopleAlt className='people-icon' /></div>
                <div className='session-text'>
                  <p className='session-name'>Group Sessions</p>
                  <p className='session-count'>0</p>
                </div>
              </div>
              <div className='session-arrow'>›</div>
            </div>
          </div>
        </div>

        <div className='section-block'>
          <div className='notes-section'>
            <div className='notes-card'>
              <div className='notes-left'>
                <div className='notes-icon'><IoReorderThreeOutline className='reorder-icon' size={25} /></div>
                <div className='notes-text'>
                  <h3>Notes</h3>
                  <p>Reading the notes will help you to learn the topics covered in the class</p>
                </div>
              </div>
              <button className='notes-btn'>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiddleSection