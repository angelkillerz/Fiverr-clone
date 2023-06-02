import React from 'react'
import { Link } from 'react-router-dom'
import './GigCard.scss'
function GigCard({item}) {
  return (
    <Link to={"/gig/123"}>
        <div className='gigcard'>
            <img src={item.img} alt="" />
            <div className="info">
                <img src={item.ppimg} alt="" />
                <span>{item.sellername}</span>
            </div>
            <div className="details">
                <div className='user'>
                    <img src="" alt="" />
                    <span>{item.seller}</span>
                </div>
                <span>{item.detail}</span>
                <div className="rating">
                    <img src="/img/star.png" alt="" />
                    <span>item.rating</span>
                    <span>{item.order}</span>
                </div>
                <div className="price">
                    <span>From</span>
                    <span>{item.lowestPrice}</span>
                </div>
            </div>
        </div>
    </Link>
    
  )
}

export default GigCard