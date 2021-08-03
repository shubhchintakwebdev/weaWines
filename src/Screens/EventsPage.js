import React from 'react'
import { useParams } from 'react-router-dom'

const EventsPage = () => {
    let {id}=useParams()
    return (
        <div>
           <h1>Events : {id} </h1>  
        </div>
    )
}
export default EventsPage
