import React from 'react'
import './middlesection.css'
import { IoIosTimer } from "react-icons/io";
import AssingmentData from '../data/assingment-data'
import { BiSpreadsheet } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
import { LuTrophy } from "react-icons/lu";
import { MdOutlineQuiz } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Assingment from './assignment';



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
              return <Assingment
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
              return <Assingment    
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

        <div className='section-block'>
          <div className='footer-section'>
            <div className='footer-left'>
              <div className='footer-brand'>
                <div className='footer-logo'>
                  <svg>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.17206 0H9.18393V2.01628H2.17206V4.89668L4.5187 4.89668H6.0987C7.56467 4.89668 8.91885 5.38818 10.0135 6.21947L14.1063 2.01628H10.8668V0H15.4946H17.4579V2.01628V6.76894H15.4946V3.44201L11.4018 7.6452C12.2113 8.76941 12.6899 10.1601 12.6899 11.6656L12.6899 16.7296L12.6899 19.7213C14.3873 18.4814 15.4946 16.4449 15.4946 14.1428V8.49718H17.4579V14.1428C17.4579 19.0345 13.5966 23 8.83333 23C4.0701 23 0.20874 19.0345 0.20874 14.1428V2.01628V0H2.17206ZM2.17206 14.1428V6.91296L4.5187 6.91296H6.0987C8.65458 6.91296 10.7265 9.0408 10.7265 11.6656L10.7265 16.7296L10.7265 20.7035C10.1264 20.8858 9.49102 20.9837 8.83333 20.9837C5.15442 20.9837 2.17206 17.9209 2.17206 14.1428Z" fill="#0673F9"></path>
                  </svg>
                  </div>
                <div>
                  <p className='footer-brand-name'>Newton School of Technology</p>
                </div>
              </div>
              <p className='footer-copy'>Copyright © 2026 Incanus Technologies Pvt. Ltd. All rights reserved.</p>
            </div>

            <div className='footer-right'>
              <p className='footer-link legal'><span>Legal</span></p>
              <p className='footer-link'>Support</p>
              <p className='footer-link'>Terms &amp; Conditions</p>
              <p className='footer-link'>Privacy Policy</p>
              <div className='footer-social-links'>
                <FaFacebookF className='social-icon' />
                <FaTwitter className='social-icon' />
                <FaInstagram className='social-icon' />
                <FaLinkedin className='social-icon' />
                <FaYoutube className='social-icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiddleSection