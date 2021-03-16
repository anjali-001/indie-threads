
import React, {useContext} from 'react'

import './Filter.css'
import { ExploreContext } from "../../context/ExploreContext";


import filter_icon from '../../assets/filter.png'

const Filter = () => {

    const {filterData, exploreData, data,setExpData} = useContext(ExploreContext);

    const examples = ["Horror", "Comedy", "Action", "Indie", "Adventure", "Thrilling"]

    const filterGenre = (val) => {
        //data-> search ->explore -> explorecopy  -> thrilling -> exloredata
        //explore=explorecopy;
        //FILTER THRILLING
        //explore=explorecopy;
        //filter adventure
        console.log(val);
        console.log(data);
        let arr = [];
        filterData.filter((item) => {
          if(item.genre.filter(post => 
            {
              if(post.toLowerCase().includes(val.toLowerCase()))
              arr.push(item);
            }
          ));
        });
        console.log(arr)
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