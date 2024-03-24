import React, {ChangeEventHandler} from "react";
import  './index.css'


export class ImageFormComponent extends React.Component{
    // @ts-expect-error becouse yes
    constructor(props) {
        super(props);
        this.state = {name: '', path: '', agreement: false, message: '', sended: false, errorMessages: [], result: "Nie wyslano"};
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
                    path:  this.state.path
                })
            };
            fetch('http://localhost:3000/api/images/' + this.state.id, requestOptions)
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
                    path:  this.state.path
                })
            };
            fetch('http://localhost:3000/api/images/', requestOptions)
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
                       placeholder="Name"/>
                <label>Email:</label>
                <input value={this.state.path} onChange={this.handleInputChange} type="text" name="path"
                       placeholder="path"/>
                <label>Id only for updating</label>
                <input value={this.state.id} onChange={this.handleInputChange} type="number" name="id"
                       placeholder="id"/>
                <button type="submit">Wyślij</button>
                <label>Wynik: {this.state.result}</label>
            </form>

        )
    }

}