import React,{useState} from "react";
import IconButton from "@mui/material/IconButton";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export default function Createnote(props) {
  const[value,setvalue]=useState({
    title:'',
    content:''
  });
  const[show,setshow]=useState(false);
  const showevent=()=>{
    setshow(true);
  }
  const disableshow=()=>{
    setshow(false);
  }
  const inputEvent=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setvalue((prevvalue)=>{
      return ({
        ...prevvalue,
        [name]:value
    })
    });
  }
  return (
    <div className="mainnotediv" onDoubleClick={disableshow}>
      <div className="container">
        {show?<input type="text" name="title" id="" placeholder="Add title" onChange={inputEvent} value={value.title}/>:null}
        <textarea name="content" id="" placeholder="Add a note"onChange={inputEvent} value={value.content} onClick={showevent}></textarea>
      </div>
      <p className="btn" >
        <IconButton aria-label="delete" onClick={function submitevent(){
          props.onclick(value);
          setvalue({
            title:'',
            content:''
          })
        }}>
          <AddOutlinedIcon className="addicon" />
        </IconButton>
      </p>
    </div>
  );
}
