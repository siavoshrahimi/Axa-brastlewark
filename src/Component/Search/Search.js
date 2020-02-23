import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import './Search.scss';

//search-select
import SelectInput from "../selectInput/selectInput";
import {searchByProfession} from "../../Redux/search/action";


const search = () =>{
    const dispatch = useDispatch();
    /*useEffect(() =>{

    })*/


  /*  const [input, setInput] = useState('');*/

    const allProfessions = useSelector(state => state.search.allProfession);

    const onSelectOption = ({value})=>{
        dispatch(searchByProfession(value.toUpperCase()))
    }

      const options = allProfessions.map(profession =>{
        return {value:profession , label:profession}});
      return(

        <div className="search-wrapper">
           <SelectInput options={options} onSelectOption={onSelectOption}/>
        </div>
      )
    }
export default search;