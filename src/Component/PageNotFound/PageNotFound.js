import React from 'react';
//css
import './PageNotFound.scss';

import {Link} from 'react-router-dom';

const pageNotFound = () => {
  return(
    <div className='not-found'>
      <p>page not found</p>
      <p>please return to <Link to='/'>Home</Link> </p>
    </div>
  )
}

export default pageNotFound;