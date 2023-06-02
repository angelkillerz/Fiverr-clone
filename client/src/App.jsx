import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/Navbar'
import Gigs from './pages/gigs/Gigs'
import Gig from './pages/gig/Gig'
import MyGigs from './pages/myGigs/MyGigs'
import Order from './pages/orders/Order'
import Add from './pages/add/Add'
import Messages from './pages/messages/Messages'
import Message from './pages/message/Message'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import { Outlet } from 'react-router-dom'
import app from './App.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
      
    );
  };

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path : "/",
          element : <Home/>
        },
        {
          path : "/gigs",
          element : <Gigs/>
        },
        {
          path : "/gig",
          element : <Gig/>
        },
        {
          path : "/orders",
          element : <Order/>
        },
        {
          path : "/mygigs",
          element : <MyGigs/>
        },
        {
          path : "/add",
          element : <Add/>
        },
        {
          path : "/messages",
          element : <Messages/>
        },{
          path : "/message",
          element : <Message/>
        },
      ]
    }
  ])
  

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;

