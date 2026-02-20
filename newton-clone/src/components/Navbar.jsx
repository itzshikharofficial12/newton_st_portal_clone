import './navbar.css'
import { BsPeople } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";
import avatar from '../assets/avatar.png'
import xpIcon from '../assets/xp-icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <div className='nav-left'>
        <button className='course'>
            <svg width="20" height="20" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.46951 0H10.3963V2.27927H2.46951V5.53538L5.12235 5.53538H6.90853C8.56579 5.53538 10.0967 6.09099 11.3342 7.0307L15.9611 2.27927H12.2988V0H17.5305H19.75V2.27927V7.65185H17.5305V3.89096L12.9036 8.6424C13.8187 9.91324 14.3597 11.4854 14.3597 13.1872L14.3597 18.9118L14.3598 22.2937C16.2787 20.8921 17.5305 18.5899 17.5305 15.9875V9.60551H19.75V15.9875C19.75 21.5172 15.3848 26 10 26C4.61522 26 0.25 21.5172 0.25 15.9875V2.27927V0H2.46951ZM2.46951 15.9875V7.81465L5.12235 7.81465H6.90853C9.79792 7.81465 12.1402 10.22 12.1402 13.1872L12.1402 18.9118L12.1402 23.4039C11.4618 23.6101 10.7435 23.7207 10 23.7207C5.84103 23.7207 2.46951 20.2584 2.46951 15.9875Z" fill="#0673F9"></path>
            </svg>
            <h1>NST'25 CS+AI RU </h1>
            <RiArrowDownSLine className='account-icon' />
        </button>
        <div className='athena'>
            <h1>Download the latest version of Athena.</h1>
            <button className='athena-download'>Download</button>
        </div>
      </div>
      <div className='nav-right'>
        <div className='xp-section'>
            <h1>Total Xp</h1>
            <div className='xp-amount'>
              <div className="yellow">
                <img src={xpIcon} alt="XP Icon" />
                <h1>8,951</h1>
              </div>
            </div>
        </div>
        <div className='account'>
            {/* <BsPeople className='account-icon' /> */}
            <GoBell className='account-icon' />
            <img src={avatar} alt="Icon"/>
            <RiArrowDownSLine className='account-icon' />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar