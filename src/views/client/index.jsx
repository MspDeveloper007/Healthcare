import React, { useEffect, useState } from 'react';
import Table from '../../components/Table/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';

function Client() {
  const [rows, setUserdata] = useState([])

  useEffect(()=>{
    applenewslist() 
  },[])

  const applenewslist = async() =>{
    await axios.get(`http://192.168.1.62:8000/api/user`).then(({data})=>{
          setUserdata(data)
        })
  }

  // const rows = [
  //   { id: 1, col1: 'Hello', col2: 'World', col3: "true", col4: "20 BPM and heart measurement", col5: "20 April,2024" },
  //   { id: 2, col1: 'DataGridPro', col2: 'is Awesome', col3: "true", col4: "20 BPM and heart measurement", col5: "20 April,2024" },
  //   { id: 3, col1: 'MUI', col2: 'is Amazing', col3: "true", col4: "20 BPM and heart measurement", col5: "20 April,2024" },
  // ];
  //const rows = userdata;

  const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'col4', headerName: 'Status', width: 150 },
    { field: 'col5', headerName: 'Last Measurement', width: 150 },
    { field: 'col6', headerName: 'Last Visit', width: 150 },
    { field: 'created_at', headerName: 'Register Date', width: 200 },
    {
      field: 'col8',
      headerName: 'Contact',
      width: 150,
      renderCell: () => {
        return <div>
          <button style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faPhone} />
          </button>
          <button style={{ marginLeft: 20, cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faMessage} />
          </button>
        </div>
      }
    },
  ];

  return (
    <div>
      <h1>Client</h1>
      <div>
        <Table
          rows={rows}
          columns={columns}
        // pageSizeOptions={[5, 10, 25]}
        />
      </div>
    </div>
  )
}

export default Client