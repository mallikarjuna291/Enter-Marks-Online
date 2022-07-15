import React from 'react'
import { useQuery } from '@apollo/client';
import {  useMutation } from '@apollo/client';
import { BIO_DELETE } from './Queries/Bio_delete';
import { BIO_QUERY } from './Queries/Bio_query';
const Table=()=>{
  
   
    
    const { loading, error,data} = useQuery(BIO_QUERY);

    const deleteCache = (cache, { data }) => {
      const currentData = cache.readQuery({
        query: BIO_QUERY,
      });
      const updatedData = data.delete_mytable.returning[0].id;
     
      cache.writeQuery({
        query: BIO_QUERY,
        data: {
          mytable: currentData.mytable.filter(
            (each) => each.id !== updatedData
          ),
        },
      });
    };
  const [deletedetails] = useMutation(BIO_DELETE, {
    update:deleteCache
  });
      if (loading) return <div>Loading...</div>;
      if (error) return console.log("error", error);
      
      function handleSubmit(event,index) {
        event.preventDefault();
        deletedetails({ variables:{id:index} })
      }
  
      const row=data?.mytable


return <>
  <div style={{display:'flex'}}><p style={{flex:1}}>id</p><p style={{flex:1}}>name</p><p style={{flex:1}}>marks</p><p style={{flex:1}}>remarks</p></div>
 { row.map((value,index)=>
  <div style={{display:'flex'}} ><p style={{flex:1}}>{index+1}</p><p style={{flex:1}}>{value.name}</p><p style={{flex:1}}>{value.marks}</p><p style={{flex:1}}>{value.remarks}</p><button type="submit" value={value.id} onClick={(event)=>handleSubmit(event,value.id)}>Cancel</button></div>)}
</>

     

}

export default Table;