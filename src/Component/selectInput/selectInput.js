import React from 'react';

import Select from "react-select";

const SelectInput = ({options , onSelectOption}) => {
    return(
        <Select
            options={options}
            value={options.value}
            name="profession"
            placeholder="Choose a profession"
            onChange={onSelectOption}
        />
    )

}

export default SelectInput;