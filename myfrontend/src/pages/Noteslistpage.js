import React, {useState, useEffect} from 'react'
import Listitem from '../components/Listitem'
import AddButton from '../components/AddButton'



const Noteslistpage = () => {

    let [notes, setNotes] = useState([])

    useEffect(() => {
        myNotes()
    },[])
    
    let myNotes = async () => {
        let response = await fetch('/myApi/notes/')
        let data = await response.json()
        console.log("DATA:", data)
        setNotes(data)
    }
    
      return (
        <div className='notes'>
            <div className='notes-header'>
                <h2 className='notes-title'>&#9782; Notes</h2>
                <p className='notes-count'>{notes.length}</p>
            </div>
            <div className='notes-list'>
                {notes.map((note, index) =>  (
                    <Listitem key={index} note={note} />
                )
                )}
            </div>
            <AddButton />
        </div>
      )
    }

export default Noteslistpage