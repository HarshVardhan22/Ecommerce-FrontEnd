import React from 'react'
import { API } from '../Config'
const ShowImage = ({item,url}) => {
    return (
        <div>
            <img src={`${API}/${url}/photo/${item._id}`} alt={item.name} className="mb-3" style={{boxSizing:"border-box",width:"100%",height:"30%",objectFit: "cover" }}/>
        </div>
    )
}

export default ShowImage
