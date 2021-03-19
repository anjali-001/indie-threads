import React from 'react'
import './Footer.css'
var emoji = require("node-emoji")

function Footer() {
    return (
        <div className="FooterContainer">
            <p> Made with {emoji.get('heart')} by Anjali, Siddesh and Keshavaa</p>
        </div>
    )
}

export default Footer
