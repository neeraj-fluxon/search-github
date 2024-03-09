// Dashboard.tsx
import React from 'react';
import { SearchResult } from '../models/SearchResult';
import '../App.css';
import { useSearchStorage } from '../component/useSearchStorage';

const Dashboard: React.FC = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [users, setUsers] = React.useState<any[]>([]);
    //const [history, setHistory] = React.useState<SearchResult[]>([]);
    const { history, update, reset} = useSearchStorage();
    const handleSearch = async () => {
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`);
            const data = await response.json();
            setUsers(data.items);
            // Save search term to local storage
            if (searchTerm) {
                const updatedHistory = history.concat({key: searchTerm, result: data});
                update(updatedHistory);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
  return (
    <div className='Search-container'>
      <h1>Search Github User</h1>
      <input type="search" onChange={(e) => setSearchTerm(e.target.value)}/>
      <button disabled={!searchTerm} onClick={handleSearch}>Search</button>
          <div>
             <div>Search Result</div>
              <div className='Serach-result'>
                  {
                    users.length > 0 ?
                    users.map((user) => (
                        <div key={user.id} className='User-card'>
                            <img className="User-image" src={user.avatar_url} alt={user.login} />
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a>
                        </div>
                    ))
                    :
                    <div>No result found</div>
                  }
              </div>
          </div>
    </div>
  );
};

export default Dashboard;