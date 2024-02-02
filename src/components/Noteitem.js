import React,{useContext} from 'react'
import { Addnotes } from './Addnotes'
import Notes from './Notes'
import NoteContext from "../context/noteContext";



export const Noteitem = (props) => {
    const context=useContext(NoteContext);
    const {deleteNote}=context;
   const { note,updateNote }=props
  return (
    <div >
   <div className='col md-3 my-3 mx-3'>
    

    <div className="custom-card" style={{ width: '18rem', position: 'relative',gap: '21px' }}>
      <div style={{ width: '100%', height: '100%', background: '#F9F3E5', border: '4px #33322E solid', boxShadow: '12px 12px 0px #33322E', borderRadius: 24, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex' }}>
      
        <div style={{ width: '100%' ,  wordWrap: 'break-word', textAlign: 'center', color: '#33322E', fontSize: 28, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 1.2, padding: '20px 0', borderBottom: '4px #33322E solid', boxSizing: 'border-box' }}>
          {note.title}
        </div>
    
        <div style={{ width: '100%',  wordWrap: 'break-word',textAlign: 'center', color: '#33322E', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1.5, padding: '20px', boxSizing: 'border-box' }}>
          {note.description} 
        </div>
        <div style={{ display: 'flex', justifyContent: 'left', gap: '10px', marginTop: '10px',marginLeft:'-203px' }}>
        <i className="fa-solid fa-trash-can" onClick={()=>{deleteNote(note._id) ;props.showAlert("Deleted successfully","success")}}></i>
        <i className="fa-solid fa-pen" onClick={()=>{updateNote(note)}}></i>
        </div>
    
          <div style={{ width: 606, height: 3, opacity: 0, background: '#F4D799' }} />
        </div>
       
      </div>
    </div>
</div>



  )
}
