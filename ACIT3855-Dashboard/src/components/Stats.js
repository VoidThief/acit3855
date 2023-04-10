import { useEffect, useState, useRef } from 'react'

const Stats = () => {
    const [event, setEvent] = useState([])

    useEffect(() => {
        fetch('http://54.149.238.93/processing/stats')
            .then(res => res.json())
            .then(res => {
                setEvent(res)
            })
    }, [])

    return (
        <div className="stats">
            <h2>Latest Statistics</h2>
            <div>
                <p>Max Buy Price: ${event.max_buy_price}</p>
                <p>Number of Buys: ${event.num_buys}</p>
                <p>Max Sell Price: ${event.max_sell_price}</p>
                <p>Num of Sells: ${event.num_sells}</p>
                <p>Last Updated: ${event.last_updated}</p>
            </div>
        </div>
    )
}

export default Stats