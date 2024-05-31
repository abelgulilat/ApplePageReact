import React from 'react'
import "../Assets/CSS/Style.css"

const Top = () => {
  return (
    <div>
        <div className="iPadPro">
            <h1>iPad Pro</h1>
            <p className="p1">Unbelievably thin.Incredibly Powerful</p>

            <a className="link1" href="">Learn more</a>
            <a className="link2" href="">Buy</a>
        </div>
        
        <div className="iPhone">
                <h1>iPhone 15 Pro</h1>
                <p>Titanium.So strong.So light. So Pro.</p>
                <a className="link1 " href="">Learn more</a>
                <a className="link2 " href="">Buy</a>
        </div>

        <div className="iPhone15">
            <h1>iPhone15</h1>
            <p className="p1">New camera. New design. Newphoria</p>

            <a className="link1" href="">Learn more</a>
            <a className="link2" href="">Buy</a>
        </div>

    </div>
  )
}

export default Top