import React from 'react'

export const Pizzabox = ({ pizzaList }) => {
  return (
    <div className='pizza-card'>
        {pizzaList.map(item => (
            
            <div className="pizza-card-box card mb-3" style={{maxWidth: '540px'}} key={item.id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={item.img} class="pizza-img img-fluid rounded-start" />
            
                <button className='add-btn btn btn-primary'>Add</button>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.dsc}</p>
                  <p className="card-text"><small class="text-muted">Price: {item.price} USD</small></p>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

