import React, {ChangeEventHandler} from "react";


export class ContactForm extends React.Component{
    private topics: string[];

    // @ts-expect-error becouse yes
    constructor(props) {
        super(props);
        this.topics = ['name', 'xd', 'fgdfs', 'grf', '444']
        this.state = {email: '', topic: '', agreement: false, message: '', sended: false, errorMessages: []};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    validateEmail(email:string)  {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    handleInputChange(event : ChangeEventHandler) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }


    // @ts-expect-error becouse yes
    handleSubmit(e) {
        e.preventDefault()
        const message = this.state.message
        const email = this.state.email
        const agreement = this.state.agreement
        const topic = this.state.topic
        const errorMessages = this.state.errorMessages


        if (message == ''){
            errorMessages.push("Fill Message field")
        }
        if (email == ''){
            errorMessages.push("Fill email field")
        }

        if (!this.validateEmail(email)){
            errorMessages.push("email is incorrect")
        }

        if (!agreement){
            errorMessages.push("Check agreement")
        }
        if (topic == ''){
            errorMessages.push("Choose topic")
        }

        if (message.length < 20) {
            errorMessages.push("Message is too short")
        }
        this.setState({'errorMessages': errorMessages})

        // console log data
        console.log(message)
        console.log(email)
        console.log(agreement)
        console.log(topic)
        this.setState({'sended': true})
    }


    render () {
        if (this.state.sended) {
            return (
                <p>Your message has been sent</p>
            )
        }
        return (
            <form method='post' onSubmit={this.handleSubmit}>
                <ul className={"errorList"}>
                    {this.state.errorMessages.map((message, index)=>
                    (
                        <li className={"errorMessage"} key={index + "message"}>{message}</li>
                        )
                    )}
                </ul>
                <label>Email</label>
                <input  type={"email"} name='email' value={this.state.email} onChange={this.handleInputChange}/>
                <label>Topic</label>
                <select name={'topic'} value={this.state.topic} onChange={this.handleInputChange}>
                    {this.topics.map((topic, index) => (
                        <option key={index + "option"} value={topic}>{topic}</option>
                    ))}
                </select>
                <label>I ageree to process my personal data</label>
                <input type={"checkbox"}
                       name={'agreement'}
                       value={this.state.agreement}
                       onChange={this.handleInputChange}/>
                <label>Message</label>
                <textarea name={'message'} value={this.state.message} onChange={this.handleInputChange}></textarea>
                <button type={"submit"}>Send</button>
            </form>
    )}
}