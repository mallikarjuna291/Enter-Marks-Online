import { useState } from "react";
import {  useMutation } from '@apollo/client';
import {BIO_MUTATION} from './Queries/Bio_mutation'
import { BIO_QUERY } from "./Queries/Bio_query";
const Form=()=>{
    const [name, setName] =useState('');
    const [marks, setMarks] =useState('');
    const [remarks, setRemarks] =useState('');
  
    const updateCache = (cache, { data }) => {
      const currentValue = cache.readQuery({
        query: BIO_QUERY,
      });
      const updatedData = data;
      cache.writeQuery({
        query: BIO_QUERY,
        data: { mytable: [updatedData, ...currentValue.mytable] },
      });
    };

      const [adddetails] = useMutation(BIO_MUTATION, {
        variables: {
          name: name,
          marks: marks,
          remarks:remarks
        },
        update:updateCache
      });

      function handleSubmit(event,variables) {
        event.preventDefault();
       adddetails({ variables })
       setName('')
       setMarks('')
       setRemarks('')
      }
return <form  onSubmit={handleSubmit}>
  <label>
    Name:
    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
  </label>
  <label>
    Marks:
    <input type="text" name="marks" value={marks} onChange={e => setMarks(e.target.value)}/>
  </label>
  <label>
    Remarks:
    <input type="text" name="remarks" value={remarks}  onChange={e => setRemarks(e.target.value)}/>
  </label>
  <input type="submit" value="Submit"  />
</form>}

export default Form;