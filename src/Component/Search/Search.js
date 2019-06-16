import React from 'react';
import './Search.scss';

//search-select
import Select from 'react-select';


const search = (props) =>{
  const {professionChanged,professions} = props;
  const options = professions.map(profession =>{
    return {value:profession , label:profession}
  });
  return(

    <div className="search-wrapper">
      <Select
        options={options}
        value={options.value}
        name="profession"
        placeholder="Choose a profession"
        onChange={professionChanged}
      />
    </div>
  )
}

export default search;