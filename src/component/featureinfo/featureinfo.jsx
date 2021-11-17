import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './featureinfo.css'
export default function Featureunfo() {
    return (
        <div className='featured'>
            <div className='card'>
                <span className='cardHeading'>Revanue</span>
                <div className='cardRate' >
                    <span className='cardNumber'>$2,354</span>-11.4 <ArrowDownwardIcon className='downarrow' />
                </div>
                <span>Compared to lost money</span>
            </div>

            <div className='card'>
                <span className='cardHeading'>Revanue</span>
                <div className='cardRate' >
                    <span className='cardNumber'>$2,354</span>-7.4 <ArrowDownwardIcon className='downarrow' />
                </div>
                <span>Compared to lost money</span>
            </div>

            <div className='card'>
                <span className='cardHeading'>Revanue</span>
                <div className='cardRate' >
                    <span className='cardNumber'>$2,354</span>+78.4 <ArrowUpwardIcon className='uparrow' />
                </div>
                <span className='cardTitle'>Compared to lost money</span>
            </div>

        </div>
    )
}
