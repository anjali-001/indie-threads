import React, {useState, createContext, useEffect} from 'react';
import getPosts from '../constants/fire-functions/getPosts';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import fire from '../fire';
import firebase from 'firebase';

export const ExploreContext = createContext();

export const ExploreProvider = (props) => {
    const [data, setData] = useState([])
    const [exploreData,setExploreData] = useState([])
    const [filterData,setFilterData] = useState([])
    // console.log('val>>>',getPosts())
    const postsRef = fire.firestore().collection("posts");
    const [posts] = useCollectionData(
        postsRef, 
        { idField: 'id' }
    );


    useEffect(() => {
        
        // console.log('Posts: ',posts)
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
    // console.log('Explore page data',data);
    // console.log(exploreData)
    // console.log(copyExpData)
    // console.log('Ref Posts: ', posts)
    return(
        <ExploreContext.Provider value={{data:data, exploreData:exploreData,setExpData:setExpData, filterData:filterData, setFilData:setFilData}}>
        {/* <ExploreContext.Provider value={[data,setData, exploreData, setExploreData]}> */}
            {props.children}
        </ExploreContext.Provider>
    );
}