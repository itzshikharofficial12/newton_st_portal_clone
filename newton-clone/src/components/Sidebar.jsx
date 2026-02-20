import React from 'react'
import './sidebar.css'
import { IoMdHome } from "react-icons/io";
import { GoShield } from "react-icons/go";
import { CiCircleQuestion } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuSpline } from "react-icons/lu";
import { MdPeopleOutline } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { LuChevronsLeftRight } from "react-icons/lu";
import { GoTrophy } from "react-icons/go";
import { BiSpreadsheet } from "react-icons/bi";

const subjects = [
    {
        id: 1,
        name: 'DSA - B',
    },
    {
        id: 2,
        name: 'DSA Lab 1 - B',
    },
    {
        id: 3,
        name: 'WAP - B',
    },
    {
        id: 4,
        name: 'WAP Lab 1 - B',
    },
    {
        id: 5,
        name: 'Maths II - B',
    },
    {
        id: 6,
        name: 'Maths II Tut 1 - B',
    }
]


const SidebarLeft = () => {
    return (
        <div className='left-sidebar'>
            <div className='top'>
                <h2>S2'25 CS+AI RU</h2>
                <h5>Enrolled</h5>
            </div>
            <div className='left-sidebar-content'>
                <div className='home'>
                    <IoMdHome className='home-icon' />
                    <h2>Home</h2>
                </div>

                <div className='subjects'>
                    <h5>Subjects</h5>
                    <div className='sub-list'>
                        {subjects.map((subject, idx) => (
                            <h3 key={idx}>{subject.name}</h3>
                        ))}
                    </div>
                </div>

                <div className='links'>
                    <div className='link'>
                        <FaArrowTrendUp className='trend-icon' />
                        <h2>Scorecard</h2>
                    </div>
                    <div className='link'>
                        <LuSpline className='trend-icon' />
                        <h2>My Timeline</h2>
                    </div>
                    <div className='link'>
                        <MdPeopleOutline className='trend-icon' />
                        <h2>Expert Sessions</h2>
                    </div>
                    <div className='link'>
                        <CiCalendar className='trend-icon' />
                        <h2>Calender</h2>
                    </div>
                    <div className='link'>
                        <LuChevronsLeftRight className='trend-icon' />
                        <h2>Arena</h2>
                    </div>
                    <div className='link'>
                        <GoTrophy className='trend-icon' />
                        <h2>LeaderBoard</h2>
                    </div>
                    <div className='link'>
                        <BiSpreadsheet className='trend-icon' />
                        <h2>Question of the Day</h2>
                    </div>
                </div>

                <div className='support-section'>
                    <div className='link help-support'>
                        <GoShield className='trend-icon' />
                        <h2>Share a Concern</h2>
                    </div>
                    <div className='link'>
                        <CiCircleQuestion className='trend-icon' />
                        <h2>Help & Support</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarLeft