import React, {useState, createContext, useEffect} from 'react';
import getPosts from '../constants/fire-functions/getPosts';

export const ExploreContext = createContext();

export const ExploreProvider = (props) => {
    const [data, setData] = useState([])
    const [exploreData,setExploreData] = useState([])
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
    // console.log('data new>>',data);
    // console.log(exploreData)
    return(
        <ExploreContext.Provider value={{data:data, exploreData:exploreData,setExpData:setExpData}}>
        {/* <ExploreContext.Provider value={[data,setData, exploreData, setExploreData]}> */}
            {props.children}
        </ExploreContext.Provider>
    );
}