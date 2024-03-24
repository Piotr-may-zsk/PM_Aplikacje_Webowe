import React, {ChangeEventHandler} from "react";
import  './index.css'


export class PostFormComponent extends React.Component{
    // @ts-expect-error becouse yes
    constructor(props) {
        super(props);
        this.state = {title: '', content: '', ownerId: 0, imageId: 0, sended: false, errorMessages: [], result: "Nie wyslano"};
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
                    title: this.state.title,
                    content:  this.state.content,
                    ownerId: parseInt(this.state.ownerId),
                    imageId: parseInt(this.state.imageId)
                })
            };
            fetch('http://localhost:3000/api/posts/' + this.state.id, requestOptions)
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
                    title: this.state.title,
                    content:  this.state.content,
                    ownerId: parseInt(this.state.ownerId),
                    imageId: parseInt(this.state.imageId)
                })
            };
            fetch('http://localhost:3000/api/posts/', requestOptions)
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
                <label>Title:</label>
                <input value={this.state.title} onChange={this.handleInputChange} type="text" name="title"
                       placeholder="title"/>
                <label>Content:</label>
                <input value={this.state.content} onChange={this.handleInputChange} type="text" name="content"
                       placeholder="content"/>
                <label>Owner id:</label>
                <input value={this.state.ownerId} onChange={this.handleInputChange} type="number" name="ownerId"
                       placeholder="ownerId"/>
                <label>Image id:</label>
                <input value={this.state.imageId} onChange={this.handleInputChange} type="number" name="imageId"
                       placeholder="imageId"/>
                <label>Id only for updating</label>
                <input value={this.state.id} onChange={this.handleInputChange} type="number" name="id"
                       placeholder="id"/>
                <button type="submit">Wyślij</button>
                <label>Wynik: {this.state.result}</label>
            </form>

        )
    }

}