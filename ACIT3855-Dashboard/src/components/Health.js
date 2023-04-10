import { useState } from 'react';

const Status = () => {
    const [events, setEvents] = useState({});

    const fetchStatuses = () => {
        fetch('http://54.149.238.93/check')
            .then(response => response.json())
            .then(data => {
                setEvents(data);
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="status">
            <h2>Statuses</h2>
            <button onClick={fetchStatuses}>Check Status</button>
            <ul>
                <p>Receiver: {events.receiver}</p>
                <p>Storage: {events.storage}</p>
                <p>Processing: {events.processing}</p>
            </ul>
        </div>
    );
};

export default Status;
