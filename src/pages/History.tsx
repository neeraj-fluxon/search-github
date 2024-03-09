import React from 'react';
import TableComponent from '../component/Tablecomponent';
import { useSearchStorage } from '../component/useSearchStorage';
const History: React.FC = () => {
    const {history, update, reset} = useSearchStorage();
    console.log(history);

    return (
        <div>
            <h1>Your Search History</h1>
            <h3>Search History</h3>
            {
                history.length > 0 ?
                <TableComponent data={history}></TableComponent>
                : <p>No history found</p>
            }
            <button onClick={reset}>Clear Search history</button>

        </div>
    );
};

export default History;