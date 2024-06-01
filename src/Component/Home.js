import React from 'react'
import "../Assets/CSS/Home.css"

let isok = true;


const Home = () => {

  return (
    <div>
        
        <form action="">
            <div className='signin'>
                <input type="text"  placeholder="User_Name"/>
                <br/>
                <input type="password"  placeholder="Password"/>
                <br/>
            </div>
            <div className='signup' >
                <input type="text"  placeholder="First_Name"/>
                <br/>
                <input type="text" placeholder="Last_Name"/>
                <br/>
            </div>
                <br/>

            <input type="submit"  value={isok?"Sign Up":"Sign In"}/>


        </form>



        
    </div>
  )
}

export default Home