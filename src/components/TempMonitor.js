import React from 'react';
import TempAddButton from './TempAddButton';
import TempMinusButton from './TempMinusButton';

const TempMonitor = ({celcius, setCelcius}) => {
    return(
        <div className='temperature'>
            <div className="temperature-monitor">
                <span className="temperature-color light"></span>
                <span style={{opacity: (celcius/30) }} className="temperature-color blue"></span>
                <span style={{opacity: ((celcius-30)/45) }} className="temperature-color orange"></span>
                <span style={{opacity: ((celcius-75)/25) }} className="temperature-color red"></span>
                <span className="celcius">{celcius}</span> °C
            </div>
            <div className="temperature-button">
                <TempMinusButton 
                    celcius={celcius} 
                    setCelcius={setCelcius}
                />
                <TempAddButton 
                    celcius={celcius} 
                    setCelcius={setCelcius}
                />
            </div>
        </div>
    )
}

export default TempMonitor;