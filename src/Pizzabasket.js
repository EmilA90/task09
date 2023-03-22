import React from 'react'

export const Pizzabasket = ({ selectedPizzas, counter, sum, handleRemovePizza }) => {
  return (
    <div className="list-group aside-basket">
      <div>

        <p><b>Total Amount:</b> {counter} unit</p>
        <p><b>Total Price:</b> {sum} USD</p>
        <hr />
      </div>
      {selectedPizzas.map(pizza => {
        return (
          <>
            <div key={pizza.id}>
              <a href="#" className="list-group-item list-group-item-action active" aria-current="true" />
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{pizza.name}</h5>
                <small>{pizza.price} USD</small>
                <button type="button" className="btn btn-danger" onClick={() => handleRemovePizza(pizza.id)}>remove</button>
              </div>

            </div>


          </>

        )
      })}
    </div>
  )
}
