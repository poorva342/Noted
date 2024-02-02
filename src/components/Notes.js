import React, { useContext, useEffect,useRef,useState } from "react";
import noteContext from "../context/noteContext";
import { Noteitem } from "./Noteitem";
import { Addnotes } from "./Addnotes";
import { useNavigate } from "react-router-dom";

export const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getnotes,editNote } = context;
  let navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token')){
    getnotes();
  }
  else{
    navigate("/login")
  }
  }, []);
  const ref=useRef(null);
  const refClose=useRef(null); 
  const[note,setNotes]=useState({ id:" " , etitle:" ", edescription:" ", etag:" "});
  const updateNote = (currentnote) => {
    ref.current.click();
    setNotes({
      id: currentnote._id || " ",
      etitle: currentnote.title,
      edescription: currentnote.description,
      etag: currentnote.tag
    });
  
  };
  const handleClick=(e)=>{
    console.log("updating the note",note)
    editNote(note.id,note.etitle,note.edescription,note.etag)
    refClose.current.click();
    props.showAlert("Updated successfully","success")

}
const onChange=(e)=>{
setNotes({...note,[e.target.name]:e.target.value})
}
  return (
    <>
      <Addnotes showAlert={props.showAlert} />

      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
       edit
      </button>
      <div  className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
               Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body"><form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="etitle" name="etitle"   value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
        
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">tag</label>
        <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange}/>
      </div>
   
    </form></div>
            <div className="modal-footer">
              <button ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button  type="button" className="btn btn-primary" onClick={handleClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h1>Your notes</h1>
        <div className="container">
        {notes.length===0 &&'No notes to display'}
        </div>
        {Array.isArray(notes) ? (
  notes.map((singleNote, index) => (
    <Noteitem
      key={`${singleNote._id}-${index}`}
      updateNote={updateNote}
      note={singleNote}
      showAlert={props.showAlert}
    />
  ))
) : (
  <p>Loading or no notes to display</p>
)}
      </div>
    </>
  );
};
