import React from 'react';

import "./cardDetail.scss"

const CardDetail = ({name,age}) => {
    return(
        <div className='card-detail'>
            <span>Name:{name}</span>
            <span>Age:{age}</span>
        </div>
    )
}

export default CardDetail;