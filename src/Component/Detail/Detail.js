import React,{Component} from 'react';
//css
import './Detail.scss';

class Detail extends Component{
  render(){
    const {thumbnail,age,professions,friends,name,hair_color,weight,height,} = this.props.location.state.profileInfo;
    console.log(this.props);
    return(
      <div className='detail-wrapper'>
        <div className='detail'>
          <div className="left-column">
            <div className='profile-photo'>
              <img src={thumbnail} alt={name}/>
            </div>
          </div>
          <div className="right-column">
            <div className='detail-name'>
              <h2>{name}</h2>
            </div>
            <div className='age-hair'>
              <span>Age:{age}</span>
              <span>Hair color:{hair_color}</span>
            </div>
            <div className='body-shape'>
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
              {friends[0]? friends.map(friend =>(
                <span className='fr' key={friend}>{friend}</span>
              )):<span>Has no friends</span>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Detail;