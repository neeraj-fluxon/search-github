import React from 'react';
import { SearchResult } from '../models/SearchResult';
import TableComponent from '../component/Tablecomponent';
const History: React.FC = () => {
    const [history, setHistory] = React.useState<SearchResult[]>([]);
    // Load search history from local storage on component mount
    React.useEffect(() => {
        const storedHistory = localStorage.getItem('searchHistory');
        if(storedHistory) 
        {
            let searchResult:SearchResult[] = [];
            let historyData = JSON.parse(storedHistory);
            historyData.forEach((element: SearchResult) => {
                searchResult.push(element);
            });
            setHistory(searchResult);
        }
    }, []);

    const clearSearch = () =>{
        localStorage.clear();
        setHistory([]);
    }

    return (
        <div>
            <h1>Your Search History</h1>
            <h3>Search History</h3>
            {
                history.length > 0 ?
                <TableComponent data={history}></TableComponent>
                : <p>No history found</p>
            }
            <button onClick={clearSearch}>Clear Search history</button>

        </div>
    );
};

export default History;