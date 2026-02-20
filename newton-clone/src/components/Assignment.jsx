import React from 'react'
import './assignment.css'
import { CiFileOn } from "react-icons/ci";
import { MdOutlineDescription } from "react-icons/md";
import xpIcon from '../assets/xp-icon.svg'

const Assignment = (props) => {
  return (
    <div className='assignment-card' style={{
      backgroundColor: props.is_pending == false ? "#dfffee" : props.deadline_list ? '#ffe2e2' : "#edeff3",
    }}>

      <div className='card-box'>
        <div className='card-header'>
          <div className='icon-box'>
            {
            (props.classType === "In Class") ? <CiFileOn size={20}/> : <MdOutlineDescription size={20}/>
            }
          </div>
          <span className='class-type'>{props.classType}</span>
          <span className='subject'>{props.subject}</span>
        </div>
        <h2 className='assignment-title'>
          {props.title}
        </h2>
        <p className='deadline'>
          {props.deadline}
        </p>
        <div className='xp-row'>
          <span className='xp-multiplier'>2x</span>

          <div className='xp-score'>
            <img src={xpIcon} alt="" />
            <span>{props.xp}</span>
          </div>
        </div>

      </div>
      <div className='card-footer'>
        <p className='solved' style={{
      color: props.is_pending ? "#5b6271" : "#16a34a",
    }}>{props.solved}</p>
        <button className='solve-btn'>Solve</button>
      </div>

    </div>
  )
}

export default Assignment