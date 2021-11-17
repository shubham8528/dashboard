/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './widgetsm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Widgetsm() {
    return (<>
        <div className='wedgetLeft'>
            <div className='wedgeTopbar'>
                <h3 className='widgetsmTitles'>New Join Members</h3>
            </div>

            <ul className='widgetsmUl'>
                <li >
                    <div className='sircialDiv'>
                        <img className=' widgetsmImage' src='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='IMAGE not founded' />
                    </div>
                </li>
                <li>
                    <span className='userName'>Anna Keller </span><br />
                    <span className='UserTitle'> Software Engineer</span>
                </li>
                <li><button className='wedgetsmButton'>
                    <VisibilityIcon />
                    Display
                </button>
                </li>
            </ul>






            <ul className='widgetsmUl'>
                <li >
                    <div className='sircialDiv'>
                        <img className=' widgetsmImage' src='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='IMAGE not founded' />
                    </div>
                </li>
                <li><span className='userName'>Anna Keller </span><br />
                    <span className='UserTitle'> Software Engineer</span>
                </li>
                <li><button className='wedgetsmButton'>
                    <VisibilityIcon />
                    Display
                </button>
                </li>
            </ul>


            <ul className='widgetsmUl'>
                <li >
                    <div className='sircialDiv'>
                        <img className=' widgetsmImage' src='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='IMAGE not founded' />
                    </div>
                </li>
                <li><span className='userName'>Anna Keller </span><br />
                    <span className='UserTitle'> Software Engineer</span>
                </li>
                <li><button className='wedgetsmButton'>
                    <VisibilityIcon />
                    Display
                </button>
                </li>
            </ul>

            <ul className='widgetsmUl'>
                <li >
                    <div className='sircialDiv'>
                        <img className=' widgetsmImage' src='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='IMAGE not founded' />
                    </div>
                </li>
                <li><span className='userName'>Anna Keller </span><br />
                    <span className='UserTitle'> Software Engineer</span>
                </li>
                <li><button className='wedgetsmButton'>
                    <VisibilityIcon />
                    Display
                </button>
                </li>
            </ul>

        </div>
    </>

    )
}
