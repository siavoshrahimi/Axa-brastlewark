import React,{useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './Search.scss';

//search-select
import {searchByProfession} from "../../Redux/search/action";
import Select from "react-select";


const Search = () =>{
    const dispatch = useDispatch();

    const [input, setInput] = useState('');

    React.useEffect(() => {
        input !== "" && dispatch(searchByProfession(input))
    }, [input]);

    const allProfessions = useSelector(state => state.search.allProfession);

      const options = allProfessions.map(profession =>{
        return {value:profession , label:profession}
      });
      const onSelectChange = ({value}) =>{
          setInput(value.toUpperCase())
      }

  return(
    <div className="search-wrapper">
        <Select
            options={options}
            value={options.value}
            name="profession"
            placeholder="Choose a profession"
            onChange={onSelectChange}
        />
    </div>
  )
    }
export default Search;