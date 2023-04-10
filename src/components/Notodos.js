import React from 'react'

const Notodos = () => {
    return (
        <div className='container w-75'>
            <div className="alert alert-danger align-items-center" role="alert">
               
                <div className='text-center'>
                    <em>"There are no tasks to display at the moment. Great job! You have no pending tasks to complete."</em>
                </div>
            </div>
        </div>
    )
}

export default Notodos