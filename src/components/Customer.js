import React from 'react'

const Customer = ({item}) => {
    return (
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{item.firstName} {item.lastName}</h5>
            <p>{item.email}</p>
        </div>
    )
}

export default Customer
