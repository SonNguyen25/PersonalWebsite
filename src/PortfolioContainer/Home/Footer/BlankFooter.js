import React from 'react'
import './BlankFooter.css'

export default function BlankFooter() {
    return (
        <div className="blank-footer-container">
            <div className="blank-footer-parent">
                <img src={require ('../../../assets/Home/blank-footer.png').default}  alt="Internet connection error"></img>
            </div>
        </div>
    )
}
