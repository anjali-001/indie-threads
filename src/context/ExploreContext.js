import React, {useState, createContext, useEffect} from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import fire from '../fire';
import getPosts from '../constants/fire-functions/getPosts';

export const ExploreContext = createContext();

export const ExploreProvider = (props) => {
    const [data, setData] = useState([])
    const [exploreData,setExploreData] = useState([])
    const [filterData,setFilterData] = useState([])

    const [loader, setLoader]  = useState(false);
    
    const postsRef = fire.firestore().collection("posts");
    const [posts] = useCollectionData(
        postsRef, 
        { idField: 'id' }
    );

    useEffect(() => {

        const postsRef = fire.firestore().collection("posts");
        
        async function getData(){
            
            const docs = await postsRef.get();
            const docsData = [];
            docs.forEach(doc => {
                const tmpData = doc.data();
                tmpData['gameId'] = doc.id;
                    docsData.push(tmpData);
            });
            const response = docsData;
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

    const copyExpData = exploreData; //test
    // console.log('Explore page data',data);
    // console.log(exploreData)
    // console.log(copyExpData)
    // console.log('Ref Posts: ', posts)
    return(
        <ExploreContext.Provider value={{data:data, exploreData:exploreData,setExpData:setExpData, filterData:filterData, setFilData:setFilData, loader:loader}}>
            {props.children}
        </ExploreContext.Provider>
    );
}