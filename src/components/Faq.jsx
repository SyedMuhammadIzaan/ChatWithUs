// import React from 'react'
import { useState } from "react";
import { nanoid } from "nanoid";
import { RiRobot3Line } from "react-icons/ri";
import { PiChatCircleLight } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import "../style/faq.css";
const Faq = () => {
	const uniqueId = nanoid();
	const [message, setMessage] = useState([
		{ id: uniqueId, reply: "Hi", role: "bot" },
	]);
	const [query, setQuery] = useState("");

	const handleChange = (e) => {
		// console.log("Value",e.target.value);
		setQuery(e.target.value);
	};
	const handleSend = async () => {
		try {
			if (!query.trim()) return null;
			const userMsg = { id: uniqueId, reply: query, role: "user" };
			// console.log("User Msg",userMsg);
			setMessage((prev) => [...prev, userMsg]);

			if (query) {
				const res = await fetch("/api/chat", {
					method: "post",
					body: JSON.stringify({ message: query }),
				});
				const data = await res.json();
				console.log("Data", data);
			}
		} catch (error) {
			console.log("error", error);
		}
		setQuery("");
	};
	return (
		<div className="faq-wrapper">
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
						{message.map((msg) => (
							<div
								className={`message ${msg.role === "user" ? "user" : "bot"}`}
								key={msg.id}
							>
								{msg.role === "bot" && <RiRobot3Line />}
								<div
									className={
										msg.role === "user" ? "user-message" : "my-message"
									}
								>
									{msg.reply}
								</div>
								{msg.role === "user" && <RxAvatar />}
							</div>
						))}
					</div>
				</div>
				<div className="text-area-wrapper">
					<div className="text-field">
						<input
							value={query}
							onChange={handleChange}
							type="text"
							placeholder="Type Message..."
							name="message"
						/>
					</div>
					<div className="msg-btn">
						<button onClick={handleSend}>Send</button>
					</div>
				</div>
			</div>
			<div className="chat-icon">
				<PiChatCircleLight size={58} />
			</div>
		</div>
	);
};

export default Faq;

// <div className="my-message">
// 	<p>Hi</p>
// </div>
// <div className="user-message">
// 	<p>{message.reply}</p>
// 	{/* <p>Can you tell about refund policy</p> */}
// </div>
