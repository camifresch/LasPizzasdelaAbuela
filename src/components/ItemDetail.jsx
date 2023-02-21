import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div className="container">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-end">
                    <img src={item.imagen} alt={item.nombre} />
                </div>
                <div className="col d-flex align-items-center">
                    <div>
                        <h1>{item.nombre}</h1>
                        <h5>{item.descripcion}</h5>
                        <p><b>${item.precio}</b></p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ItemDetail