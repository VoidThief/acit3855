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
                <li>Receiver: {events.receiver}</li>
                <li>Storage: {events.storage}</li>
                <li>Processing: {events.processing}</li>
            </ul>
        </div>
    );
};

export default Status;
