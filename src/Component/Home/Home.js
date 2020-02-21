import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

//component
import Search from '../Search/Search';
import Card from '../Card/Card';
import Spinner from '../Spinner/Spinner';
import Pageination from '../Pageination/Pageination';

//action
import {fetchGenomesStartAsync} from "../../Redux/gonemosData/action";

//css
import './Home.scss';


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchGenomesStartAsync());
  },[]);


  const {loading,genomeData} = useSelector(state => state.genomesData);
  const {searchResult} = useSelector(state => state.search);
  const {page} = useSelector(state => state.pagination);

  /*shouldComponentUpdate(nextProps, nextState){
    return this.state.search === nextState.search
  }
  componentDidUpdate(){
    window.scroll(0,0);

  }*/

    let pageNumber =(searchResult.length % 21===0)? Math.floor(searchResult.length/21)
      :Math.floor(searchResult.length/21 +1);
    let card = (loading) ?
        <Spinner className="card-wrapper"/>
      :genomeData.slice(0,21).map(profile => <Card key={profile.id} profileInfo={profile} allData={genomeData}/>);
    if(!loading && searchResult.length !==0 ){
      const startingCard = (page-1)*21;
      const endingCard = page*21;
      const onePageSearch = searchResult.slice(startingCard,endingCard);
      card =
        onePageSearch.map(profile => (
          <Card profileInfo={profile} allData={genomeData} key={profile.id}/>
        ))
    }

    return(
      <div className='wrapper'>
        <div className='search'>
          <Search />
        </div>
        <div className="card-wrapper">
          {card}
        </div>
        {searchResult.length !==0 &&
        <div className="pagination-wrapper">
          <Pageination pages={pageNumber} currentPage={page}/>
        </div>}
      </div>
    )

}


export default Home;