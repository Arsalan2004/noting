import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Shownotes(props) {
  const deleteitem=()=>{
    props.ondelete(props.id)
  };
  return (
    <>
    <div className='notecontainer'>
            <div className='notetitle'>{props.title}</div>
            <div className='notecontent'>{props.content}</div>
            <p  className='deletebtn'>
              <IconButton aria-label="delete">
              <DeleteIcon className='addicon' onClick={deleteitem}/>
              </IconButton>
            </p>
        </div>
    </>
  );
}
