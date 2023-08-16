import React from 'react'
import { Link } from 'react-router-dom'
import Noteslistpage from '../pages/Noteslistpage'

let getTime = (note) => {
  return new Date(note.updated).toLocaleDateString()
}

let getTitle = (note) => {
  
  let title = note.body.split('\n')[0]
  if (title.length > 45){
    return title.slice(0,45)
  }
  return title

}

let getContent = (note) => {
  let title = getTitle(note)
  let Content = note.body.replaceAll('\n',' ')
  Content = Content.replaceAll(title, '')

  if(Content.length > 45){
    return Content.slice(0, 45) + '...'
  }else{
    return Content
  }

}

const Listitem = ({note}) => {
  return (
    <Link to={`/note/${note.id}`}>
        <div className='notes-list-item'>

        <h3>{getTitle(note)}</h3>
        <p><span>{getTime(note)}</span>{getContent(note)}</p>
        </div>
        
    </Link>
  )
}

export default Listitem