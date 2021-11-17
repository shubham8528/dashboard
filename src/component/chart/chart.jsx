import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './chart.css';

export default function chart({ userdata, title, data }) {
    return (
        <div className='chart'>
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width='100%' aspect={4 / 1}>
                <LineChart data={userdata} >
                    <XAxis dataKey='name' stroke='#5550bd' />

                    <Line type='monotone' dataKey={data} stroke='#5550bd' />
                    <Tooltip />
                    <CartesianGrid />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}