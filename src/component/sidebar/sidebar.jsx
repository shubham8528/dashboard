import React from 'react'
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ForumIcon from '@mui/icons-material/Forum';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className='sidbarMenu'>
            <h3 className='sidebarHeading'>Dashboard</h3>
            <ul className='sidbarTitle'>
                <li className='sidelist'>
                    <HomeIcon />
                    <NavLink to='/' activeClassName='linkActive' className='linkBaar'><span className='sidebartitles'>Home</span></NavLink>
                </li>
                <li className='sidelist'>
                    <TimelineIcon />
                    <span className='sidebartitles'>Analytics</span>
                </li>
                <li className='sidelist'>
                    <TrendingUpIcon />
                    <span className='sidebartitles'>Sales</span>
                </li>
            </ul>

            <h3 className='sidebarHeading'>Quick Menu</h3>
            <ul className='sidbarTitle'>
                <li className='sidelist'>
                    <PersonIcon />
                    <NavLink to='/user' activeClassName='linkActive' className='linkBaar'> <span className='sidebartitles'>User</span></NavLink>
                </li>
                <li className='sidelist'>
                    <StorefrontIcon />
                    <span className='sidebartitles'>Product</span>
                </li>
                <li className='sidelist'>
                    <AttachMoneyIcon />
                    <span className='sidebartitles'>Transaction</span>
                </li>
                <li className='sidelist'>
                    <EqualizerIcon />
                    <span className='sidebartitles'>Reports</span>
                </li>
            </ul>

            <h3 className='sidebarHeading'>Notifications</h3>
            <ul className='sidbarTitle'>
                <li className='sidelist'>
                    <AlternateEmailIcon />
                    <span className='sidebartitles'>Mail</span>
                </li>
                <li className='sidelist'>
                    <DynamicFeedIcon />
                    <span className='sidebartitles'>Feedback</span>
                </li>
                <li className='sidelist'>
                    <ForumIcon />
                    <span className='sidebartitles'>Messages</span>
                </li>
            </ul>

            <h3 className='sidebarHeading'>Staff</h3>
            <ul className='sidbarTitle'>
                <li className='sidelist'>
                    <BusinessCenterIcon />
                    <span className='sidebartitles'>Manage</span>
                </li>
                <li className='sidelist'>
                    <TimelineIcon />
                    <span className='sidebartitles'>Feedback</span>
                </li>
                <li className='sidelist'>
                    <ForumIcon />
                    <span className='sidebartitles'>Messages</span>
                </li>
            </ul>

        </div>
    )
}
export default Sidebar
