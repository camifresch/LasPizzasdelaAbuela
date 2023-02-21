import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
<Link to={"/item/" + item.index} className="text-dark">
    <div className="card">
      <img src={item.img} className="card-img-top" alt={item.nombre} />
          <div className="card-body text-center">
          <h5 className="card-title"><strong>{item.nombre}</strong></h5>
          </div>
    </div>
</Link>
  )
}

export default Item