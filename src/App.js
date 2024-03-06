import './App.css';
import { useState } from 'react';

function App() {

const [data, setData] = useState([
        { date: "2022-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-02", views: 150, article: "Article 2" },
        { date: "2023-09-02", views: 120, article: "Article 3" },
        { date: "2020-09-03", views: 200, article: "Article 4" }
]);
  
const handleSortByDate =() => {
  const sortByDate = [...data].sort((a,b)=> {
    return new Date(b.date) - new Date(a.date);
  });
  setData(sortByDate);

}

const handleSortByView =() => {
  const sortByView = [...data].sort((a,b)=> {
    return b.views - a.views;
  });
  setData(sortByView);
}
 

  return (
    <div className="App">
      <div>
        <h1>Date and Views Table</h1>
      </div>
      <div>
        <button onClick={handleSortByDate}>Sort by Date</button>
        <button onClick={handleSortByView}>Sort by View</button>
      </div>
      <table>
        <tr>
          <th>Date</th>
          <th>View</th>
          <th>Article</th>
        </tr>
        {data.map((entry)=> (<tr>
          <td>{entry.date}</td>
          <td>{entry.views}</td>
          <td>{entry.article}</td>
        </tr>))}
        
      </table>
      
    </div>
  );
}

export default App;
