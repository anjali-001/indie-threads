import React, {useState, createContext, useEffect} from 'react';
import getPosts from '../constants/fire-functions/getPosts';

export const ExploreContext = createContext();

export const ExploreProvider = (props) => {
    const [data, setData] = useState([])
    const [exploreData,setExploreData] = useState([])
    const [filterData,setFilterData] = useState([])
    const [loader,setLoader] = useState(true)

    useEffect(() => {

        async function getData(){
            const response = await getPosts();
            setData(response)
            setExploreData(response)
            setFilData(response)
            setLoader(false)
        }
        getData();
    }, [])
    const setExpData=(data)=>{
        setExploreData(data)
    }
    const setFilData =(data)=>{
        setFilterData(data)
    }

    return(
        <ExploreContext.Provider value={{data:data, exploreData:exploreData,setExpData:setExpData, filterData:filterData, setFilData:setFilData, loader:loader}}>
            {props.children}
        </ExploreContext.Provider>
    );
}