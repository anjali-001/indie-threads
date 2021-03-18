import React, {useContext} from 'react'
import {ExploreContext} from './context/ExploreContext'
import {Link} from 'react-router-dom'
import AuthContext from "./auth";
import {OverlayTrigger,Tooltip} from 'react-bootstrap'
import buttonIcon from './assets/Button.svg'

export default function BodyWrapper(props) {
    const  {loader} = useContext(ExploreContext)
    const { currentUser } = useContext(AuthContext);

    return (
        <div className={loader?"loader_true":""}>
            {
                props.children
            }
            {currentUser ? (
              <Link className="create" to="/post">
                <OverlayTrigger
                  key='left'
                  placement='left'
                  id="tool_tip"
                  overlay={
                    <Tooltip id='left' className="explore__tooltip" style={{color:"red"}}>
                      Are you a developer? <strong>Add your game!</strong>
                    </Tooltip>
                  }
                >
                  <img className="button-fixed" src={buttonIcon} />
                </OverlayTrigger>
                
              </Link>
            ) : (
              <Link className="create" to="/login">
                <OverlayTrigger
                  key='left'
                  placement='left'
                  id="tool_tip"
                  overlay={
                    <Tooltip id='left' className="explore__tooltip">
                       Are you a developer? <strong>Add your game!</strong>
                    </Tooltip>
                  }
                >
                  <img className="button-fixed" src={buttonIcon} />
                </OverlayTrigger>
              </Link>
            )}
        </div>
    )
}
