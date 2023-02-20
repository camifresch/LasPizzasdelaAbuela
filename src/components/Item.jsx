import React from 'react'

const Item = ({item}) => {
  return (
    <div className="card">
  <img src={item.img} className="card-img-top" alt={item.nombre}/>
  <div className="card-body">
    <h5 className="card-title"><strong>{item.nombre}</strong></h5>
    <p className="card-text">{item.descripcion}</p>
  </div>
</div>
  )
}

export default Item