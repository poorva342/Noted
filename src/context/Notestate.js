import React, { useState } from "react";
import NoteContext from "./noteContext";

const Notestate = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  //adding note
  //get all notes
  const getnotes = async () => {
    //// backend side code
    try{
      const token= localStorage.getItem('token')
      console.log(token);
      console.log('Token:', token);

      if (!token) {
          console.error('Token is missing. Please authenticate first.');
          // Handle the case where the token is missing, maybe redirect to login or show an error message.
          return;
      }
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      // body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }
  catch(error){
    console.error("Error fetching notes:", error.message);
  }
    // console.log(localStorage.getItem('token'));
  };
  const addNote = async (title, description, tag) => {
    //to do api call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
      },

      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
      const note= await response.json();
    setNotes(notes.concat(note));

    
  };
  //deleting note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },

      body: JSON.stringify(), // body data type must match "Content-Type" header
    });
    console.log("deleting the note with id " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
      },

      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);
    //   const json= response.json();
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
      }
      break;
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getnotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default Notestate;
