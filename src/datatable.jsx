import React, { useEffect, useState } from 'react';
import axios from 'axios';
 import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from MongoDB Atlas or any other data source
    const fetchData = async () => {
      try {
        const response = await axios.get('https://puce-rattlesnake-suit.cyclic.app/api/data'); 
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { dataField: 'id', text: 'ID' },
    { dataField: 'name', text: 'Name' },
    { dataField: 'age', text: 'Age' },
    { dataField: 'gender', text: 'Gender' },
    { dataField: 'city', text: 'City' },
    { dataField: 'country', text: 'Country' },
    { dataField: 'occupation', text: 'Occupation' },
  ];

  return (
    <div>
      <BootstrapTable
        keyField='id'
        data={data}
        columns={columns}
        pagination={paginationFactory()}
      />
    </div>
  );
};

export default DataTable;
