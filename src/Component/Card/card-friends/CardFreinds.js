import React from 'react';
import {Link} from "react-router-dom";

import './CardFreinds.scss';

const CardFriends = ({friend}) =>{
    return(
        <Link to={{pathname:`/detail/${friend.name}`,state:{friend}}}
              title={friend.name}
              key={friend.id}>
            <img className='friends-img' src={friend.thumbnail} alt={friend.name}/>
        </Link>
    )
}

export default CardFriends;