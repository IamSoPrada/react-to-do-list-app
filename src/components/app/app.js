import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list/";
import PostAddForm from "../post-add-form";
import AppFooter from "../app-footer";
import "./app.css";
import styled from "styled-components";


const AppBlock = styled.div`

    margin: 0 auto;
    max-width: 900px;

`

export default class App extends Component {
    constructor(props){
        super(props); 
        this.state = {
                                      //наш стейт объектом data который сождержит список дел.
            data : [
                { label: "Going to learn React", important: true, id : "rtg" },
                { label: "I'd like to eat", important: false, id:"fvc" },
                { label: "Need to buy paper for printer", important: false, id:"ldk" },
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
        
    }

    deleteItem(id){ // метод удаления 1 item из объекта data 
        this.setState (({data}) => {  
        const index = data.findIndex(elem => elem.id === id); // сравниваем id кликнутого item с теми что есть в data

        const before = data.slice(0, index); // копируем объект data с начала до кликнутого id
        const after = data.slice(index +1); // копируем объект data со следущего элемента после кликнутого id
        const newArr = [...before, ...after]; //склеиваем все в один массив

        return {
            data: newArr // возвращаем  объект data c обновленными данными
        }
    });
}

    render(){

        return (
            <AppBlock>
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList 
                posts={this.state.data}  // пропс откуда берем наш список дел //пропс onDelete который вызывает одноименную ф-цию
                onDelete={this.deleteItem} />  
                <PostAddForm /> 
                <AppFooter />
            </AppBlock>
        )
    }



}


