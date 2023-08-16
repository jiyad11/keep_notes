import React from 'react'
import {useState, useEffect} from 'react'
import { Link, json, useParams, useNavigate } from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg' 



const Notepage = () => {

  let {noteId} = useParams();

 let navigate = useNavigate();
 
 
 const [note, setNote] = useState(null);

 useEffect(() => {
  if (noteId){
    myNote();
  }
   
 },[noteId]);
 
 let myNote = async () => {
   if (noteId === 'new') return

   let response = await fetch(`/myApi/notes/${noteId}/`);
    let data = await response.json();
    setNote(data);
 };


//  let CreateNote = async () => {
//   fetch(`/api/notes/create/`,{
//     method : "POST",
//     headers : {
//       'Content-Type' : 'application/json'
//     },
//       body:JSON.stringify(note)
//   })
// }

// I COMMENTED THAT COS THATS A FUNCTION FOR  API AND THIS IS FOR RESTFUL API

let CreateNote = async () => {
  fetch(`/myApi/notes/`,{
    method : "POST",
    headers : {
      'Content-Type' : 'application/json'
    },
      body:JSON.stringify(note)
  })
}
 

//  let updateNote = async () => {
//     fetch(`/api/notes/${noteId}/update/`,{
//       method : "PUT",
//       headers : {
//         'Content-Type' : 'application/json'
//       },
//         body:JSON.stringify(note)
//     })
//  }

let updateNote = async () => {
  fetch(`/myApi/notes/${noteId}/`,{
    method : "PUT",
    headers : {
      'Content-Type' : 'application/json'
    },
      body:JSON.stringify(note)
  })
}


// let deleteNote = async () => {
//     fetch(`/api/notes/${noteId}/delete/`,{
//       method : "DELETE",
//       headers : {
//         'Content-Type' : 'application/json'
//       },
     
//     })
//     history('/')
//  }


let deleteNote = async () => {
  fetch(`/myApi/notes/${noteId}/`,{
    method : "DELETE",
    headers : {
      'Content-Type' : 'application/json'
    },
   
  })
  navigate('/')
}



 let handleSubmit = () => {
    if(noteId !== 'new' && note.body===""){
      deleteNote()
    }else if (noteId !== 'new'){
      updateNote()
    }else if (noteId==='new' && note === null){
      navigate('/')
      return
    }else if (noteId === 'new' && note.body !== null){
      CreateNote()
    }
    navigate('/')
 }

 let handleChange = (value) => {
    setNote(note => ({ ...note, 'body': value }))
    console.log('Handle Change:', note)
 }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
         
          <ArrowLeft onClick={handleSubmit} />
         
        </h3>
        {noteId !== 'new' ? (
          <button onClick={deleteNote}>delete</button>
        ): (
          <button onClick={handleSubmit} >Done</button>
        )}
        
      </div>
        <textarea onChange={(e) => { handleChange(e.target.value) }} value={note?.body}></textarea>
    </div>
  )
}

export default Notepage