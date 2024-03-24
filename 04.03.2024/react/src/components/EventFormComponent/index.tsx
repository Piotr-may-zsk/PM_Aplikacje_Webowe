import React, {ChangeEventHandler} from "react";
import  './index.css'


export class EventFormComponent extends React.Component{
    // @ts-expect-error becouse yes
    constructor(props) {
        super(props);
        this.state = {date: '', name: '', location: '', sended: false, errorMessages: [], result: "Nie wyslano"};
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
                    name: this.state.name,
                    date:  this.state.date,
                    location:  this.state.location
                })
            };
            fetch('http://localhost:3000/api/events/' + this.state.id, requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data['success'])
                        this.setState({ result: "Wyslano"})
                });
        }
        else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: this.state.name,
                    date:  this.state.date,
                    location:  this.state.location
                })
            };
            fetch('http://localhost:3000/api/events/', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data['success'])
                        this.setState({ result: "Wyslano"})
                });
        }
    }
    render() {
        return (
            <form method="post" onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input value={this.state.name} onChange={this.handleInputChange} type="text" name="name"
                       placeholder="name"/>
                <label>location:</label>
                <input value={this.state.location} onChange={this.handleInputChange} type="text" name="location"
                       placeholder="location"/>
                <label>Date:</label>
                <input value={this.state.date} onChange={this.handleInputChange} type="date" name="date"
                       placeholder="data"/>
                <label>Id only for updating</label>
                <input value={this.state.id} onChange={this.handleInputChange} type="number" name="id"
                       placeholder="id"/>
                <button type="submit">Wyślij</button>
                <label>Wynik: {this.state.result}</label>
            </form>

        )
    }

}