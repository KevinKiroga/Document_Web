import React from 'react'
import { PacmanLoader } from 'react-spinners'


const Loading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <PacmanLoader color='white' size={50} />
        </div>

    )
}

export default Loading
