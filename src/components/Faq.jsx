import React from 'react'
import { PiChatCircleLight } from "react-icons/pi";
import "../style/faq.css";
const Faq = () => {
  return (
    <div className='faq-wrapper'>
        <div className="chat-wrapper">
            <div className="chat-header">
                <div className="heading">
                    Chat Support
                </div>
                <div className="our-intro">
                    <p>Izaan here. How can i help you</p>
                </div>
            </div>
            <div className="chats">
                <div className="display-message">

                </div>
            </div>
            <div className="text-area-wrapper">
                <div className="text-field"></div>
                <div className="msg-btn">
                    <button>Send</button>
                </div>
             
            </div>
        </div>
        <div className='chat-icon'>
            <PiChatCircleLight size={58} />
        </div>
    </div>
  )
}

export default Faq