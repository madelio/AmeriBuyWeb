import React from 'react';
import person from './person.png';

export default class Home extends React.Component {
	constructor() {
		super();
	}

	handleKeyPress(e){
	  	if(e.key == 'Enter'){
	  		this.sendMessage(e);
	  	}
	}

    chatClosed(e) {
        document.getElementsByClassName('chat-header')[0].classList.remove('hide')
        document.getElementsByClassName('chat-content')[0].classList.remove('hide')
        document.getElementsByClassName('chat-input')[0].classList.remove('hide')
        document.getElementsByClassName('chat-closed')[0].classList.add('hide')
    }

    chatHeader(e) {
        document.getElementsByClassName('chat-content')[0].classList.add('hide')
        document.getElementsByClassName('chat-header')[0].classList.add('hide')
        document.getElementsByClassName('chat-input')[0].classList.add('hide')
        document.getElementsByClassName('chat-closed')[0].classList.remove('hide')
    }

    sendMessage(e) {
        var msg = document.getElementsByClassName('message')[0].value;
        msg = msg.replace(/\n/g, '');              
        if(msg == '') return;
        document.getElementsByClassName('message')[0].value = '';
        var mycontent = document.createElement("div");
        mycontent.className = 'userMessage';
        mycontent.appendChild(document.createTextNode(msg));
        document.getElementsByClassName('chat-content')[0].appendChild(mycontent);
    }

	render() {
		return (
			<div>
				<div className="main-header">
					<p>Start buying in three simple steps!</p>
				</div>

				<div className="steps-container">
					<div className="steps">
						<h3>1 - Register an account or login to immediately start buying</h3>
					</div>

					<div className="steps">
						<h3>2 - Tell us the items you want us to buy and our agents will quote you the price</h3>
					</div>

					<div className="steps">
						<h3>3 - Checkout the items and you're all set!</h3>
					</div>
				</div>

				<div className="sub-header">
					<p>Reviews from customers</p>
				</div>


				<div className="review-container">
					<div className="review">
						<img src={person} alt="person"/>
						<p><span className="name">John Doe 1</span><br/><br/>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
					</div>

					<div className="review">
						<img src={person} alt="person"/>
							<p><span className="name">John Doe 2</span><br/><br/>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
					</div>

					<div className="review">
						<img src={person} alt="person"/>
							<p><span className="name">John Doe 2</span><br/><br/>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
					</div>
				</div>

				<div className="chat-box">
				    <div className="chat-closed" onClick={(e)=>(this.chatClosed(e))}>Chat Now </div>
				    <div className="chat-header hide" onClick={(e)=>(this.chatHeader(e))}><div className="box"></div>Online Support</div>
				    <div className="chat-content hide"></div>

				    <div className="chat-input hide">
				        <textarea className="message" placeholder="Type your message..." onKeyPress={(e)=> this.handleKeyPress(e)}></textarea>
				    </div>
				</div>
			</div>
		);
	}
}
