import React from 'react';

const TempMinusButton = ({celcius, setCelcius}) => {
    const minusCelcius = () => {
        if(celcius > 0){
            setCelcius(celcius - 1);
        }
    }

    return(
        <button onClick={minusCelcius}>-</button>
    )
}

export default TempMinusButton;