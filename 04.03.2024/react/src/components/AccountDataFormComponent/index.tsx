import React, {ChangeEventHandler} from "react";
import  './index.css'


export class AccountDataFormComponent extends React.Component{
    // @ts-expect-error becouse yes
    constructor(props) {
        super(props);
        this.state = {address: '', bio: '', userId: 0, sended: false, errorMessages: [], result: "Nie wyslano"};
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

    handleSubmit(event ) {
        event.preventDefault()
        // console.log("imie: " + this.state.name)
        // console.log("email: " + this.state.email)
        if ( this.state.id != null){
            const requestOptions = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    address: this.state.address,
                    bio:  this.state.bio,
                    userId: parseInt(this.state.userId)
                })
            };
            fetch('http://localhost:3000/api/accountdata/' + this.state.id, requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data['success'])
                        this.setState({ result: "Zaktualizowano"})
                });
        }
        else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    address: this.state.address,
                    bio:  this.state.bio,
                    userId: parseInt(this.state.userId)
                })
            };
            fetch('http://localhost:3000/api/accountdata/', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data['success'])
                        this.setState({ result: "Utworzono"})
                });
        }
    }
    render() {
        return (
            <form method="post" onSubmit={this.handleSubmit}>
                <label>Adres:</label>
                <input value={this.state.address} onChange={this.handleInputChange} type="text" name="address"
                       placeholder="address"/>
                <label>Bio:</label>
                <input value={this.state.bio} onChange={this.handleInputChange} type="string" name="bio"
                       placeholder="bio"/>
                <label>User id:</label>
                <input value={this.state.userId} onChange={this.handleInputChange} type="number" name="userId"
                       placeholder="user id"/>
                <label>Id only for updating</label>
                <input value={this.state.id} onChange={this.handleInputChange} type="number" name="id"
                       placeholder="id"/>
                <button type="submit">Wyślij</button>
                <label>Wynik: {this.state.result}</label>
            </form>

        )
    }

}