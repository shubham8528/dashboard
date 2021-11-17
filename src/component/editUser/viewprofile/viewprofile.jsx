import React from 'react'
import Avatar from '@mui/material/Avatar';
import './viewprofile.css'

export default function Viewuser() {
    return (<>
        <div className='Viewuser'>

            <div>
                <Avatar
                    alt="Shubham"
                    src="https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk="
                    sx={{ width: 100, height: 100 }} />
            </div>

            <div className='user
            Name'><h3>Shubham Bisht </h3><span> Software Engineer </span></div>


        </div></>
    )
}