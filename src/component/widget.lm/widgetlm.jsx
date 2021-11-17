/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './widgetlm.css'

export default function Widgetlm() {
    return (
        <div className='widgetRight'>
            <h3 className='widgetRightHeading'>Latest Transaction</h3>
            <div className='widgetTopHeader' >
                <h4 className='widgetRightContent'>Costumer</h4>
                <h4 className='widgetRightContent'> Date</h4>
                <h4 className='widgetRightContent'>Amount</h4>
                <h4 className='widgetRightContent'> Status</h4>
            </div>

            <div className='widgetRightTitle' >
                <div className='widgeRightImage'>
                    <img className='image' src='https://www.whatsappimages.in/wp-content/uploads/2020/06/Whatsapp-DP-Images-8-300x300.jpg' alt='IMAGE not found' />
                    <h5 style={{ paddingLeft: '10px', color: 'black' }}>Shubham Bisht</h5>
                </div>
                <h5 style={{ paddingLeft: '10px', color: 'black' }}>2 Jan 2021</h5>
                <h5 style={{ paddingLeft: '10px', color: 'black' }}> $122.00</h5>
                <span className='widgetApprove'> Approved</span>
            </div>

            <div className='widgetRightTitle' >
                <div className='widgeRightImage'>
                    <img className='image' src='https://www.whatsappimages.in/wp-content/uploads/2020/06/Whatsapp-DP-Images-8-300x300.jpg' alt='IMAGE not found' />
                    <h5 style={{ paddingLeft: '10px', color: 'black' }}>Shubham Bisht</h5>
                </div>
                <h5 style={{ paddingLeft: '10px', color: 'black' }}>2 Jan 2021</h5>
                <h5 style={{ paddingLeft: '10px', color: 'black' }}> $122.00</h5>
                <span className='widgetDeclined'> Declined</span>
            </div>

            <div className='widgetRightTitle' >
                <div className='widgeRightImage'>
                    <img className='image' src='https://www.whatsappimages.in/wp-content/uploads/2020/06/Whatsapp-DP-Images-8-300x300.jpg' alt='IMAGE not found' />
                    <h5 style={{ paddingLeft: '10px', color: 'black' }}>Shubham Bisht</h5>
                </div>
                <h5 style={{ paddingLeft: '10px', color: 'black' }}>2 Jan 2021</h5>
                <h5 style={{ paddingLeft: '10px', color: 'black' }}> $122.00</h5>
                <span className='widgetPending'> Pending</span>
            </div>

            <div className='widgetRightTitle' >
                <div className='widgeRightImage'>
                    <img className='image' src='https://www.whatsappimages.in/wp-content/uploads/2020/06/Whatsapp-DP-Images-8-300x300.jpg' alt='IMAGE not found' />
                    <h5 style={{ paddingLeft: '10px', color: 'black' }}>Shubham Bisht</h5>
                </div>
                <h5 style={{ paddingLeft: '10px', color: 'black' }}>2 Jan 2021</h5>
                <h5 style={{ paddingLeft: '10px', color: 'black' }}> $122.00</h5>
                <span className='widgetApprove'> Approved</span>
            </div>





        </div>
    )
}
