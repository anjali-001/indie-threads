
import React, {useContext} from 'react';

import { ExploreContext } from "../../context/ExploreContext";
import filter_icon from '../../assets/filter.png';

import './Filter.css';

const Filter = () => {

    const {filterData, setExpData} = useContext(ExploreContext);

    const examples = ["Horror", "Comedy", "Action", "Indie", "Adventure", "Thrilling"]

    const filterGenre = (val) => {
        let arr = [];
        filterData.filter((item) => {
          if(item.genre.filter(post => 
            {
              if(post.toLowerCase().includes(val.toLowerCase()))
              arr.push(item);
            }
          ));
        });
        setExpData(arr)
    }

    return(
        <div className="filter-container">
            <div className="filter-heading">
                <img className="filter-img" src={filter_icon}/>
                <h1 className="filter-title">Filters</h1>
            </div>
            <div className="all-filter">
                {examples.map((genre) => {
                    return(
                        <div className="filter-genre" onClick={() => filterGenre(genre)}>{genre}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Filter