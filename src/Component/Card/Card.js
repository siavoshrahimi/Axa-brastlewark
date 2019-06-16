import React from 'react';
import {Link} from 'react-router-dom';

//css
import './Card.scss';

const card = ({allData,profileInfo}) =>{
  const {thumbnail,age,professions,friends,name} = profileInfo;
  const profileFriend = [];
  allData.map(profile => {
    friends.find(friend =>{
      if( friend === profile.name){
        profileFriend.push(profile);
        return true
      }
      else{
        return false
      }
    });
    return profileFriend
  });
  return(

      <div className="card">
        <Link to={{pathname:`/detail/${name}`,state:{profileInfo}}}>
          <div className='img-wrapper'>
            <img className='img' src={thumbnail} alt={name}/>
          </div>

          <div className='card-detail'>
            <span>Name:{name}</span>
            <span>Age:{age}</span>
          </div>
        </Link>
          <div className='professions'>
            <span><strong>Professions:</strong></span>
            {professions.map(profession => (
              <span className='profession' key={profession}>{profession}</span>
            ))}
          </div>
          <div className='friends'>
            <span>friends:</span>
            <div className='friends-img-wrapper'>
              {profileFriend[0] ?
                profileFriend.map(friend =>{
                  return <Link to={{pathname:`/detail/${name}`,state:{profileInfo}}}
                               title={friend.name}
                               key={friend}>
                    <img className='friends-img' src={friend.thumbnail} alt={friend.name}/>
                  </Link>
                }): <span>Has no any friends</span>}
            </div>

          </div>
      </div>

  )
  
}

export default card;