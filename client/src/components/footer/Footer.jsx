import React from 'react'
import "./Footer.scss"

function Footer() {

  const footerElement = [
    {
      title : "Categories",
      desc : ["Graphics & Design",
      "Digital Marketing",
      "Writing & Translation",
      "Video & Animation",
      "Music & Audio",
      "Programming & Tech",
      "Data", "Business",
      "Lifestyle"]
    },

     {
        title : "About",
        desc : [
          "Careers",
          "Press & News",
          "Partnerships",
          "Privacy Policy",
          "Terms of Service",
          "Intellectual Property Claims",
          "Investor Relations"
        ]
      },

      {
        title : "Support",
        desc : [
          "Help & Support",
          "Trust & Safety",
          "Selling on Fiverr",
          "Buying on Fiverr",
          "Fiverr Guides"
        ]
      },

      {
        title : "Community",
        desc : [
          "Customer Success Stories",
          "Community Hub",
          "Forum",
          "Events",
          "Blog",
          "Influencers",
          "Affiliates",
          "Podcast",
          "Invite a Friend",
          "Become a Seller",
          "Community Standards",
        ]
      },
      {
        title : "More From Fiverr",
        desc : [
          "Fiverr Enterprise",
          "Fiverr Business",
          "Fiverr Pro",
          "Fiverr Logo Maker",
          "Get Inspired",
          "Fiverr Select",
          "ClearVoice",
          "Fiverr Workspace",
          "Learn",
          "Working Not Working",
          
        ]
      }

    
  ]

  
  return (
    <div className='footer'>
      <div className="container">
        <div className='top'>
          {footerElement.map((item) => {
            return (
              <div className={`cat ${item.title.toLowerCase()}`}>
                <h6>{item.title}</h6>
                <ul>
                  {item.desc.map((descItem) => {
                    return (
                      <li>
                        <span>
                          {descItem}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <span className='logo'>fiverr</span>
            <span>Fiverr International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>$ USD</span>
            </div>
            <div className="accessibility">
              <img src="/img/accessibility.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer