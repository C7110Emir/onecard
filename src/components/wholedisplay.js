import React from 'react'
import "./card.css"
import {useState} from 'react'
import image from "./lorem-ipsum-filler-text.png"

function Wholedisplay() {
    const [transition,setTransition] = useState(false)

    const handlemouseover = () =>{
        setTransition(true)
    }
    const handlemouseres = () =>{
        setTransition(false)
    }
    return (
        <div className = {transition ? "trans" : "outerDiv"} onMouseOver={handlemouseover} onMouseOut={handlemouseres} >
            <div className="imageDiv">
                <img src={image} className="image"></img>
            </div>
        <div className={transition ? "texttrans" : "text"}>
            <h2>Lorem Ipsum</h2>
            <h4>Laborum minim sunt exercitation exercitation aliquip tempor occaecat labore aliqua elit irure aute pariatur ipsum.Consectetur consequat do mollit non ullamco non amet in. Minim do irure officia exercitation.</h4>
            <button>VIEW MORE</button>
            </div>

        </div>
    )
}

export default Wholedisplay;