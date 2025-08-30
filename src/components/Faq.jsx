// import React from 'react'
import { PiChatCircleLight } from "react-icons/pi";
import "../style/faq.css";
import { useState } from "react";
const Faq = () => {
    const [query,setQuery]=useState();
    const handleMessage=()=>{

    }
  return (
    <div className='faq-wrapper'>
        <div className="chat-wrapper">
            <div className="chat-header">
                <div className="heading">
                    <h3>Chat Support</h3>
                </div>
                <div className="our-intro">
                    <p>Izaan here. How can i help you</p>
                </div>
            </div>
            <div className="chats">
                <div className="display-message">
                    <div className="my-message">
                        <p>Hi</p>
                    </div>
                    <div className="user-message">
                        <p>Can you tell about refund policy</p>
                    </div>
                </div>
            </div>
            <div className="text-area-wrapper">
                <div className="text-field">
                    <input value={query} type="text" placeholder='Type Message...' name='message' onChange={handleMessage} />
                </div>
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