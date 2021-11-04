import React from 'react'

const Customer = ({object}) => 
    {
    return (
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{object.firstName} {object.lastName}</h5>
            <p>{object.email}</p>
        </div>
    )
}

export default Customer
