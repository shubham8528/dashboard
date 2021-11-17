
import React from 'react'
import Chart from '../../component/chart/chart'

import Featureunfo from '../../component/featureinfo/featureinfo'
import Widgetlm from '../../component/widget.lm/widgetlm'
import Widgetsm from '../../component/widget.sm/widgetsm'
import Data from '../../dummydata/dummydata'
import './Home.css'


export default function Home() {
    return (
        <>

            <div className='middle'>
                <Featureunfo />
                <Chart userdata={Data} title='User Data' data='Active User' />
                <div className='widgetsmlm'>
                    <Widgetsm />
                    <Widgetlm />

                </div>
            </div>

        </>
    )
}
