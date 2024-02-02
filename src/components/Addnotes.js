import React ,{useContext, useState} from 'react'
import noteContext from '../context/noteContext';

export const Addnotes = (props) => {
    const context=useContext(noteContext);
    const{addNote}=context;
    const[note,setNotes]=useState({title:" ",description:" ",tag:" "})
    const handleClick=(e)=>{
        e.preventDefault();
addNote(note.title,note.description,note.tag);
setNotes({title:" ",description:" ",tag:" "});
props.showAlert("Added successfully","success")
    }
    const onChange=(e)=>{
setNotes({...note,[e.target.name]:e.target.value})
    }
  return (
    <div className='container'>
    <h1>Add a note</h1>
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" name="title"  value={note.title}aria-describedby="emailHelp" onChange={onChange}/>
        
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input type="text" className="form-control" id="description" name="description" value={note.description}onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">tag</label>
        <input type="text" className="form-control" id="tag" name="tag" value={note.tag}onChange={onChange}/>
      </div>
   
      <button disabled={note.title.length<5 || note.description.length<5}type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
    </form>
    </div>
  )
}
