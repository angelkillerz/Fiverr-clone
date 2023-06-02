import React, { useEffect } from 'react';
import { useState } from 'react';
import './Navbar.scss';
import {Link, useLocation} from 'react-router-dom';

function Navbar() {
    const [active, setActive] = useState(false);
    const [open,setOpen] = useState(false)

    //keep the pathname using useLocation
    const {pathname} = useLocation()

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

   const currentUser = {
        id:1,
        username: "Amelia Swift",
        isSeller: true,  //check if this user is seller or not
   }
  return (
    //if path name !== home which is "/" navbar will be active 
    <div className={active || pathname !== "/" ? "navbar active" : "navbar" }>
        <div className="container">
            <div className="logo">
                <Link to={"/"} className='link'>
                    <span className='text'>fiverr</span>
                </Link>
                <span className='dot'>.</span>
            </div>
            <div className='links'>
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
                {/* if currentUser exist and the value of isSeller is true then show the span */}
                {/* This is the mini-menu */}
                { !currentUser?.isSeller && <span>Become a Seller</span>}
                
                {currentUser && <button>Join</button>}
                {currentUser && (
                    //sub-menu for user
                    //can be clickable
                    
                    <div className="user" onClick={() => setOpen(!open)}>
                        <img src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" />
                        <span>{currentUser.username}</span>
                        { open && (
                        <div className="options">
                            {/* if current user is true */}
                            
                                {
                                    currentUser?.isSeller && (
                                        <>
                                        <Link className='link' to={"/mygigs"}>Gigs</Link>
                                        <Link className='link' to={"/add"}>Add New Gig</Link>
                                        </>
                                    )
                                }
                                <Link className='link' to={"/orders"}>Order</Link>
                                <Link className='link' to={"/messages"}>Messages</Link>
                                <Link className='link' to={"/"}>Logout</Link>
                           
                            
                        </div>
                         )
                        }
                    </div>
                   
                )}
            </div>
            
        </div>
        { (active || pathname !== "/") && 
            <>
            <hr />
            {/* sub-menu when scroll */}
            <div className="menu">
                <Link className='link menulink' to={"/"}>
                    Graphic & Design
                </Link>
                <Link className='link' to={"/"}>
                    Digital Marketing
                </Link>
                <Link className='link' to={"/"}>
                    Writing & Translation
                </Link>
                <Link className='link' to={"/"}>
                    Video & Animation
                </Link>
                <Link className='link' to={"/"}>
                    Music & Audio
                </Link>
                <Link className='link' to={"/"}>
                    Programming & Tech
                </Link>
                <Link className='link' to={"/"}>
                    Photography
                </Link>
                <Link className='link' to={"/"}>
                    Business
                </Link>
                <Link className='link' to={"/"}>
                    Ai Services
                </Link>
                
            </div>
            </>
         }
    </div>
  );
}

export default Navbar