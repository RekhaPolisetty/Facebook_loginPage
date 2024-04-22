import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const DashBoard = () => {
    const {state} = useLocation();
    return (
        <div>
            <center>
                <h1>{`Welcome ${state.firstName+' ' +state.surName},`}</h1>
            </center>
        </div>
    )
}

export default DashBoard