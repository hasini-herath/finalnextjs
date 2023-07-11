"use client";
import * as React from 'react';
import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Link from "next/link";

import Button from '@mui/material/Button';
export default function BasicTable() {

  const [allPosts, setAllPosts] = useState([]);
  
  const fetchPosts = async () => {
    const response = await fetch("/api/test");
    const data = await response.json();

    setAllPosts(data);
  };
  const columns = [
  
    { field: 'type', headerName: 'type', width: 130 },
    { field: 'name', headerName: 'name', width: 130 },
    { field: 'message', headerName: 'message', width: 130 },
    { field: 'gender', headerName: 'gender', width: 130 },
    { field: 'date', headerName: 'date', width: 130 },
    { field: 'age', headerName: 'age', width: 130 },
    { field: 'des', headerName: 'des', width: 130 },

  ];

  useEffect(() => {
    fetchPosts();
  }, []);

  return (


    <>
<div>

<Button href='/test' variant="contained" color='success' >
     + Add Room
    </Button>
</div>

    <div style={{ height: 400, width: '100%' }}>
 
      
       <DataGrid
         rows={allPosts?.map((post) => ({
          id: post._id,
          type: post.type,
          name: post.name,
          message: post.message,
          gender: post.gender,
          date: post.date,
          age: post.age,
          des: post.des,

        }))}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </>
  );
}