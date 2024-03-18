import React, {ChangeEventHandler} from "react";
import Container from "../../components/Container";
import Heading from "../../components/Heading";


export class Users extends React.Component{
    // @ts-expect-error becouse yes
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event : ChangeEventHandler) {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event : SubmitEvent) {
        console.log('Podano następujące dane: ')
        console.log("imie: " + this.state.name)
        console.log("email: " + this.state.email)
        console.log("topic: " + this.state.topic)
        console.log("content: " + this.state.content)
    }
    render() {

        return <>
            <Container>
                <Heading level={1} content={"Skontaktuj się z nami"} />
                <form method="post" onSubmit={this.handleSubmit}>
                        <input value={this.state.name} onChange={this.handleInputChange} type="text" name="name" placeholder="Imię"/>
                        <input value={this.state.email} onChange={this.handleInputChange} type="email" name="email" placeholder="Email"/>
                        <input value={this.state.topic} onChange={this.handleInputChange} type="text" name="topic" placeholder="Temat"/>
                        <textarea value={this.state.content} onChange={this.handleInputChange} type="text" name="content" placeholder="Treść wiadomości"></textarea>
                        <button type="submit">Wyślij wiadomość</button>
                    </form>
            </Container>
        </>
    }

}