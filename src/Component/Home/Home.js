import React,{Component} from 'react';
import {connect} from 'react-redux';
import {loaderAction, searchAction,ProfessionArrayAction} from '../../Redux/Action/DataAction';
//component
import Search from '../Search/Search';
import Card from '../Card/Card';
import Spinner from '../Spinner/Spinner';
import Pageination from '../Pageination/Pageination';

//axios
import axios from 'axios';
//css
import './Home.scss';

class Home extends Component{
  state ={
    data:[],
  }

  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
      .then(res =>{
        this.setState({data:res.data.Brastlewark});
        this.props.ProfessionArrayAction(this.state.data);
      })
      .catch(err => {
        console.log(err)
      })

  }
  shouldComponentUpdate(nextProps, nextState){
    return this.state.search === nextState.search
  }
  componentDidUpdate(){
    window.scroll(0,0);

  }

  //take input value
  optionSelected = (event)=>{
    const value = event.value;
    const profession = value.toUpperCase();
    this.props.loaderAction();
    this.props.searchAction(this.state.data,profession);

  }

  render(){
    const {searchResult,loading,page,allProfession} = this.props.data;
    let pageNumber =(searchResult.length % 21===0)? Math.floor(searchResult.length/21)
      :Math.floor(searchResult.length/21 +1);
    let card = (loading) ? <Spinner className="card-wrapper"/>
      :this.state.data.slice(0,21).map(profile => <Card key={profile.id} profileInfo={profile} allData={this.state.data}/>);
    if((!loading) && searchResult.length !==0 ){
      const startingCard = (page-1)*21;
      const endingCard = page*21;
      const onePageSearch = searchResult.slice(startingCard,endingCard);
      card =
        onePageSearch.map(profile => (
          <Card profileInfo={profile} allData={this.state.data} key={profile.id}/>
        ))
    }

    return(
      <div className='wrapper'>
        <div className='search'>
          <Search professionChanged={this.optionSelected} professions={allProfession}/>
        </div>
        <div className="card-wrapper">
          {card}
        </div>
        {searchResult.length !==0 && <div className="pagination-wrapper">
          <Pageination pages={pageNumber} currentPage={page}/>
        </div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    data:state.profileData
  }
}

const mapDispatchToProps = dispatch => ({
  searchAction:(data,textInput) => dispatch(searchAction(data,textInput)),
  loaderAction:() => dispatch(loaderAction()),
  ProfessionArrayAction:(data) => dispatch(ProfessionArrayAction(data)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);