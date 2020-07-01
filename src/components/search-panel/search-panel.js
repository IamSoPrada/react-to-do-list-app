import React, { Component } from "react";
import "./search-panel.css"
export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);

    }


    onUpdateSearch(event) { // event для того чтобы следить за тем что вводят в компонет (input)
        const term = event.target.value; // получили value который ввел в input пользователь
        this.setState = ({ term }); // наш стейт не зависит от предыдущего, мы выводим на страницу то что ввел поьзователь / записываем в стейт term(деструктурируем)
        this.props.onUpdateSearch(term); // передаем в виде props одноименную функцию, чтобы стейт также менялся из App.js  
    }

    render() {
        return (
            <input
                className=" form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}
            />
        )
    }
}