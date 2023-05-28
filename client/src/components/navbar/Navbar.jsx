import React, { useEffect } from 'react';
import { useState } from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';

function Navbar() {
    const [active, setActive] = useState(false);
    console.log(active)
    const isActive = () => {
        if (window.scrollY > 0) {
            setActive(true)
        } else  {
            setActive(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', isActive);
        return () => {
            window.removeEventListener('scroll', isActive)
        }
    },[])
  return (
    <div className={active ? "navbar active" : "navbar" }>
        <div className="container">
            <div className="logo">
                {/* <Link to={"/"}> */}
                    <span className='text'>fiverr</span>
                {/* </Link> */}
                <span className='dot'>.</span>
            </div>
            <div className='links'>
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Become a Seller</span>
                <span>Sign in</span>
                <button>Join</button>
            </div>
            
        </div>
        { active && 
            <>
            <hr />
            <div className="menu">
                <span>Test</span>
                <span>Test2</span>
            </div>
            </>
         }
    </div>
  );
}

export default Navbar