import React from "react";

import ChartBar from './chartBar'
import  './chart.css'

const chart = (props) =>{

    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointsValues)

    console.log('props.dataPoints'+JSON.stringify(props.dataPoints))

    return (<div className="chart">
         

        {
            props.dataPoints.map((dataPoint)=>(
                // console.log(dataPoint)
                <ChartBar 
                key = {dataPoint.label}
                value = {dataPoint.value}
                maxValue = {totalMaximum}
                label = {dataPoint.label}
                />
                
            ))
        }
    </div>
    
    )
}

export default chart;