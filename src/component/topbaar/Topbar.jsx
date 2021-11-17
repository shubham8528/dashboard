/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './Topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span style={{ color: 'white', fontSize: "30px", fontWeight: 'bold' }}>Facebook</span>
                </div>
                <div className="topRight">
                    <div className="topbaricons">
                        <NotificationsNoneIcon />
                        <span className="topnotifaction">2</span>
                    </div>

                    <div className="topbaricons">
                        <LanguageIcon />
                        <span className="topnotifaction">2</span>
                    </div>

                    <div className="topbaricons">
                        <SettingsIcon />
                        <span className="topnotifaction">2</span>
                    </div>
                    <div className="topbaricons">
                        <img src='https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-1/p160x160/237042100_2982105825379178_662580445816304260_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=mOAzP9A2f5sAX8jcgHO&tn=ioq7mFd9w2xq5WkT&_nc_ht=scontent-del1-1.xx&oh=dbe758210a411e909fef96cdf011b829&oe=61929FA7' className='imgprofile' alt='image not found' />
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Topbar

