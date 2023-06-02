import React from 'react'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/Slide/Slide'
import CatCard from '../../components/catCard/CatCard'
import './Home.scss'
import ProjectCard from '../../components/projectCard/ProjectCard'
import { Swiper, SwiperSlide } from "swiper/react";
//data
import {cards} from '../../data';
import { projects } from '../../data'


function Home() {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide perview={5} pergroup={1}>
          {cards.map((card) => {
                return (
                    <SwiperSlide>
                       <CatCard item={card} key={card.id}/>
                    </SwiperSlide>
                )
            })}    
      </Slide>

      {/* The video part */}
      <div className="features">
        <div className="container">

          
          <div className="item">
            <h2>The best part ? Everything.</h2>
            <ul>
              <li>
                <div className="title">
                <img src="./public/img/check.png" alt="" />
                <h6>Stick to your budget</h6>
                </div>
                
                <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
              </li>
              <li>
                <div className="title">
                  <img src="./public/img/check.png" alt="" />
                  <h6>Get quality work done quickly</h6>
                </div>
                
                <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
              </li>
              <li>
                <div className="title">
                  <img src="./public/img/check.png" alt="" />
                  <h6>Pay when you're happy</h6>
                </div>
                
                <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
              </li>
              <li>
                <div className="title">
                  <img src="./public/img/check.png" alt="" />
                  <h6>Count on 24/7 support</h6>
                </div>
                
                <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
              </li>
            </ul>    
          </div>
          <div className="item">
              <video controls poster preload='metadata' crossOrigin='anonymous'>
                <source src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" type="video/mp4">
                </source>
              </video>
          </div>

          

         


        </div>
      </div>

      {/* The fiverr Business */}
      <div className="features dark">
        <div className="container">

          
          <div className="item">
            <div className='business'>
              <h1><b>fiverr</b> business</h1>
              <h2>A Solution built for <i>business</i></h2>
              <p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
            </div>
            
            <ul>
              <li>
                <div className="title">
                <img src="./public/img/check.png" alt="" />
                Talent matching
                </div>
              </li>
              <li>
                <div className="title">
                <img src="./public/img/check.png" alt="" />
                Dedicated account management
                </div>
              </li>
              <li>
                <div className="title">
                <img src="./public/img/check.png" alt="" />
                Team collaboration tools
                </div>
              </li>
              <li>
                <div className="title">
                <img src="./public/img/check.png" alt="" />
                Business payment solutions
                </div>
              </li>
              
            </ul>  
            <button className='explore-btn'>Explore Fiverr Business</button>  
          </div>
          <div className="item">
              <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_585,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624769/business-desktop-585-x1.png" alt="" />
          </div>

          

         


        </div>
      </div>
      
      <Slide perview={4} pergroup={4}>
          {projects.map((project) => {
                return (
                    <SwiperSlide perview={4}>
                       <ProjectCard item={project} key={project.id}/>
                    </SwiperSlide>
                )
            })}    
      </Slide>
      
    </div>
  )
}

export default Home