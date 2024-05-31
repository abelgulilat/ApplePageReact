import React from 'react'
import "../Assets/CSS/Style.css"
import Imgone from "../Assets/Img/ww.png"

const Middle = () => {
  return (
    <div>
        <div className='middle_first'>
            <div className='middle_first1'>
                
                    <div className='middle_first1inner'>
                        
                        <div className='textcontent'>
                            <p>Apple Worldwide Developer Conference.</p>
                            <p>Join us online June 10-14.</p>
                            <a className="link1" href="">Learn more</a>
                    
                        </div>
                    </div>
                
                </div>
            <div className='middle_first2'>
                <div className='textcontent'>
                    <h2>College Students</h2>
                    <p>Mac and iPad. Go further.</p>
                    <a className="link1" href="">Learn more</a>
                
                </div>
            </div>
        </div>
{/* ---------------------------------Middle Secound---------------------------- */}
        
        <div className='middle_secound'>
            <div className='middle_secound1'>
                <div className='middle_secound1inner'>
                    
                    <div className='textcontent'>
                        <p>Welcome to the era of spatial computing.</p>
                        <a className="link1" href="">Learn more</a>
                        <a className="link2" href="">Buy</a>
                
                    </div>
                </div>
            </div>
            <div className='middle_secound2'>
                <div className='middle_secound2inner'>
                    
                    <div className='textcontent1'>
                        <p>Brighten your summer with fresh workouts.</p>
                        <a className="link1" href="">Try it free</a>
                        <a className="link2" href="">Learn more</a>
                
                    </div>
                </div>
            </div>
            
        </div>

        {/* -----------------Middle Third ---------------------------------------- */}
        <div className='middle_third'>
            <div className='middle_third1'>
                <div className='middle_third1inner'>
                    
                    <div className='textcontent1'>
                        <p>For a limited time, get $200–$650 in credit toward a new iPhone when you trade in iPhone 11 or higher.</p>
                        <p> Now through 6.3</p>
                        <br/>
                        <div className='ancore1'>
                            <a className="link1" href="">Get extra credit</a>
                        </div>                
                    </div>
                </div>
            </div>
            <div className='middle_third2'>
                <div className='middle_third2inner'>
                    
                    <div className='textcontent1'>
                        <p>Get up to 3% Daily Cash back with every purchase.</p>
                        <a className="link1" href="">Learn more</a>
                        <a className="link2" href=""> Apple now</a>
                
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Middle