import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Result1 = () => {
  const location = useLocation();
  const [content, setContent] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (location.state && location.state.type) {
      fetchData(location.state.type, searchTerm);
    }
  }, [location, searchTerm]);

  const fetchData = (type, searchTerm) => {
    const url = type === 'RD' ? 'http://localhost:8000/rd/' : 'http://localhost:8000/db/';
    // Add searchTerm as a query parameter
    const parameter = { searchTerm }; 

    axios
      .get(url, { parameter })
      .then((response) => {
        console.log(`${type} button clicked`);
        console.log('Response:', response.data);
        setContent(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching ${type} data:`, error);
      });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter content
  const filteredContent = content.filter((item) =>
    item.member.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.Date.includes(searchTerm)
  );

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Member</th>
            <th>Position</th>
            <th>Remarks</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredContent.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.member}</td>
              <td>{item.position}</td>
              <td>{item.remarks}</td>
              <td>{item.Date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result1;
