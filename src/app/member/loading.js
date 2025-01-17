import React from 'react'

const Loading = () => {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        </div>
    )
}

export default Loading