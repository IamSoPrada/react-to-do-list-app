import React, { Component } from "react";

import "./post-add-form.css"
export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "" 
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            text: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        if(this.state.text === ""){
            alert("Вы пытаетесь отправить пустую строку, пожалуйста, введите название задачи.")
        } else{
            this.props.onAdd(this.state.text)
            this.setState({
                text: ""
            })
        }

    }
    render() {
        return (
            <form
                className="bottom-panel d-flex mt-5"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value = {this.state.text} // теперь это контролируемые элемент
                />
                <button
                    type="submit"
                    className="btn btn-light">
                    Добавить
                    </button>
            </form>
        )
    }

}


