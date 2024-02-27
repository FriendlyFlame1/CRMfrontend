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
        const response = await axios.get('https://sore-puce-pronghorn-boot.cyclic.app/api/deals'); 
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { dataField: 'dealOwner', text: 'Deal Owner' },
    { dataField: 'dealName', text: 'Deal Name' },
    { dataField: 'accountName', text: 'Account Name' },
   // { dataField: 'type', text: 'Type' },
    //{ dataField: 'next step', text: 'Next Step' },
   // { dataField: 'lead source', text: 'Lead Source' },
    { dataField: 'contactName', text: 'Contact Name' },
    { dataField: 'amount', text: 'Amount' },
    { dataField: 'closingDate', text: 'Closing Date' },
    { dataField: 'stage', text: 'Stage' },
   // { dataField: 'probability%', text: 'Probability%' },
    //{ dataField: 'expected revenue', text: 'Expected Revenue' },
   // { dataField: 'campagin source', text: 'Campagin Source' },

  ];

  return (
    <div>
      <BootstrapTable
        keyField='dealName'
        data={data}
        columns={columns}
        pagination={paginationFactory()}
      />
    </div>
  );
};

export default DataTable;
