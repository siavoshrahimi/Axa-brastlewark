import React from 'react';
import {Link} from 'react-router-dom';

//css
import './Card.scss';

import CardDetail from "./card-detail/CardDetail";
import CardFriends from "./card-friends/CardFriends";
import CardProfession from "./card-profession/cardProfesion";

const card = ({allData,profileInfo}) =>{
  const {thumbnail,age,professions,friends,name} = profileInfo;
  const profileFriend = [];

  allData.map(profile => {
    friends.find(friend =>{
      if( friend === profile.name){
        profileFriend.push(profile);
        return profileFriend
      }
      return false
    });
    return true
  });
  return(

      <div className="card">
        <Link to={{pathname:`/detail/${name}`,state:{profileInfo}}}>
          <div className='img-wrapper'>
            <img className='img' src={thumbnail} alt={name}/>
          </div>
          <CardDetail name={name} age={age} />
        </Link>
          <div className='professions'>
            <span><strong>Professions:</strong></span>
            {professions.map(profession => <CardProfession key={profession}>{profession}</CardProfession>)}
          </div>
          <div className='friends'>
            <span>friends:</span>
            <div className='friends-img-wrapper'>
              {profileFriend[0] ?
                profileFriend.map(friend =><CardFriends friend={friend} key={friend.id}/>): <span>Has no friends</span>}
            </div>
          </div>
      </div>

  )
  
}

export default card;