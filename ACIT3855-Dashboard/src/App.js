import { useState } from 'react';
import './App.css'
import Stats from './components/Stats'

const Status = () => {
  const [events, setEvent] = useState([])
}

const fetchStatus = () => {
  fetch('http://54.149.238.93/health')
    .then(response => response.json())
    .then(data => {
      setStatuses(data);
    })
    .catch(error => console.log(error));
};

const App = () => {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <Stats />
      <div className='fetchStatus'>
        <h2>Status</h2>
        <button onClick={fetchStatus}>Check Status</button>
        <url>
          <p>Receiver: ${events.receiver}</p>
          <p>Storage: ${events.storage}</p>
          <p>Processing: ${events.processing}</p>
        </url>
      </div>
    </div>
  );
}

export default App
