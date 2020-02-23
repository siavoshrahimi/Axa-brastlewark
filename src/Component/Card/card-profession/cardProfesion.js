import React from 'react';

import './cardProfession.scss';


const CardProfession = ({children}) => {
    return(
        <span className='profession' >{children}</span>
    )
}

export default CardProfession;