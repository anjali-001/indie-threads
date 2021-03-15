import React, {useState, createContext, useEffect} from 'react';
import getPosts from '../constants/fire-functions/getPosts';

export const ExploreContext = createContext();

export const ExploreProvider = (props) => {
    const [data, setData] = useState([])
    const [exploreData,setExploreData] = useState([])
    const [filterData,setFilterData] = useState([])
    console.log('val>>>',getPosts())

    useEffect(() => {
        async function getData(){
            const response = await getPosts();
            setData(response)
            setExploreData(response)
        }
        getData();
    }, [])
    const setExpData=(data)=>{
        setExploreData(data)
    }
    const setFilData =(data)=>{
        setFilterData(data)
    }
    const copyExpData = exploreData; //test
    console.log('data new>>',data);
    console.log(exploreData)
    console.log(copyExpData)
    return(
        <ExploreContext.Provider value={{data:data, exploreData:exploreData,setExpData:setExpData, filterData:filterData, setFilData:setFilData}}>
        {/* <ExploreContext.Provider value={[data,setData, exploreData, setExploreData]}> */}
            {props.children}
        </ExploreContext.Provider>
    );
}