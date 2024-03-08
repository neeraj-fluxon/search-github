import { SearchResult } from '../models/SearchResult';

const TableComponent: React.FC<{data :SearchResult[]}> = (props) => {
    console.log(props.data);
    return (
        <div className="Table-container">
            <table>
                <thead>
                    <tr>
                        <th>Search Item</th>
                        <th>Search Result</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(item => (
                        <tr key={item.key}>
                            <td>{item.key}</td>
                            <td>
                                {
                                    item.result.items.length > 0 ?
                                    item.result.items.slice(0, 2).map(
                                        (user) => {
                                            return (
                                                <div>
                                                    <div>{user.id} - {user.login}</div>
                                                    <img className="User-image" src={user.avatar_url} alt={user.login} />
                                                </div>
                                            )
                                        }
                                    )
                                    : <div> Search result not found</div>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
  };
  
  export default TableComponent;