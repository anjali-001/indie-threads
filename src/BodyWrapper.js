import React, {useContext} from 'react'
import {ExploreContext} from './context/ExploreContext'
export default function BodyWrapper(props) {
    const  {loader} = useContext(ExploreContext)
    return (
        <div className={loader?"loader_true":""}>
            {
                props.children
            }
        </div>
    )
}
