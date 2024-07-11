import React, {useState, useEffect} from 'react';
import TempMonitor from './components/TempMonitor';
import './style/Style.reset.css';
import './style/Style.common.scss';
import './style/Style.monitor.scss';

function App() {
  const [celcius, setCelcius] = useState(0);

  return (
    <div className="App">
      <TempMonitor 
        celcius={celcius} 
        setCelcius={setCelcius}
      />
    </div>
  );
}

export default App;