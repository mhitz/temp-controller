import React from 'react';

const TempAddButton = ({celcius, setCelcius}) => {
    const addCelcius = () => {
        if(celcius < 100){
            setCelcius(celcius + 1);
        }
    }

    return(
        <button onClick={addCelcius}>+</button>
    )
}

export default TempAddButton;