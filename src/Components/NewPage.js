import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://jsonplaceholder.typicode.com/users',
        );
  
        setData(result.data);
      };
  
      fetchData();
    }, []);
    
  return (
    <div className='container d-flex text-bg-dark p-3 h-100 mt-500'style={{
        height: 'auto',
        textAlign:'justify',
        marginTop:'66px'
      }}>
    <ol>
      {data.map(item => (
        <li key={item.id}>
          <a href={item.website}>{item.username}</a>
        </li>
      ))}
    </ol>
    </div>
  );
}

export default NewPage;