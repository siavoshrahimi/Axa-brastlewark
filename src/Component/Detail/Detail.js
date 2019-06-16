import React,{Component} from 'react';

class Detail extends Component{
  render(){
    const {thumbnail,age,professions,friends,name,hair_color,weight,height,} = this.props.location.state.profileInfo;
    console.log(this.props);
    return(
      <div className='detail-wrapper'>
        <div className='detail'>
          <div className='profile-photo'>
            <img src={thumbnail} alt={name}/>
          </div>
          <div className='name-age'>
            <span>Name:{name}</span>
            <span>Age:{age}</span>
          </div>
          <div className='all-detail'>
            <span>Hair color:{hair_color}</span>
            <span>Weight:{weight}</span>
            <span>Height:{height}</span>
          </div>
          <div className='jobs'>
            <span>professions:</span>
            {professions.map(job =>(
              <span className='job' key={job}>{job}</span>
            ))}
          </div>
          <div className='friends-detail'>
            <span>Friends:</span>
            {friends.map(friend =>(
              <span className='fr' key={friend}>{friend}</span>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Detail;