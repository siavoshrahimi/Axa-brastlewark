import React from 'react';
import {useDispatch} from 'react-redux';
/*action*/
import {NextPageAction,PrevPageAction,getCurrentPage} from "../../Redux/pageInation/action";
/*style*/
import './Pageination.scss'
/*icons*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight, faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons';


const Pagination = props => {
  const dispatch = useDispatch();
  const scrollAtTop = () =>window.scroll(0,0);

  /*got to previous page*/
  const prevHandler = () =>{
    dispatch(PrevPageAction());
    scrollAtTop();
  }
  /*go to next page*/
  const nextHandler = () => {
    dispatch(NextPageAction());
    scrollAtTop();
  }
  /*select current page*/
  const changePageHandler = (event) =>{
    const currentPage=Number(event.target.innerText);
    dispatch(getCurrentPage(currentPage));
    scrollAtTop();
  }

    const {currentPage,pages} = props;
    let pageNumber=[];
    for(let i=1;i<=pages;i++){
      pageNumber.push(i)
    }

    return (
      <div className="pagination">
        <button className="prev" disabled={currentPage === 1} onClick={prevHandler}><FontAwesomeIcon icon={faAngleDoubleLeft} /></button>
        {pageNumber.map((item,key)=>{
          return<button  onClick={changePageHandler} className={"pageNumber " + (item===currentPage ? 'active' : '')} key={key}>{item}</button>
        })}
        <button disabled={currentPage === pages} className="next" onClick={nextHandler}><FontAwesomeIcon icon={faAngleDoubleRight} /></button>
      </div>
    );

}

export default Pagination;