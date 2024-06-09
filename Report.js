import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Report = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    axios.get('/api/report')
      .then(response => {
        setReport(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the report!", error);
      });
  }, []);

  return (
    <div>
      <h1>Recycling Report</h1>
      <ul>
        {report.map(item => (
          <li key={item._id}>
            {item._id}: {item.totalAmount} cans recycled, ${item.totalEarnings} earned
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Report;