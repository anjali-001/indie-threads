import react from 'react'
import './Filter.css'

import filter_icon from '../../assets/filter.png'

const Filter = () => {
    return(
        <div className="filter-container">
            <div className="filter-heading">
                <img className="filter-img" src={filter_icon}/>
                <h1 className="filter-title">Filters</h1>
            </div>
        </div>
    )
}

export default Filter