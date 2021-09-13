import React  from 'react'
import './slider.css'

const Icons = ({image, name, id, updateCategory}) => {

  const readName = e => {
    if (e.target.parentElement.className === 'category'){
      updateCategory(e.target.parentElement.id)
    } else {
      updateCategory(e.target.id)
    }
  }

  return (
    <div className="category" id={id} onClick={readName}>
      <img className="iconCateg" src={image} alt={name}/>
      <p className="nameCateg">{name}</p>
    </div>
  )
}

export default Icons
