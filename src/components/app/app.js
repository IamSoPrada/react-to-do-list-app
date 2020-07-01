import React, { Component } from "react";

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
    constructor(props) {
        super(props);
        this.state = {
            //наш стейт объектом data который сождержит список дел.
            data: [
                { label: "Going to learn React", important: false, like: false, id: 1 },
                { label: "I'd like to eat", important: false, like: false, id: 2 },
                { label: "Need to buy paper for printer", important: false, like: false, id: 3 },
            ]

        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.maxId = 4;
    }

    deleteItem(id) { // метод удаления 1 item из объекта data 
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id); // сравниваем id кликнутого item с теми что есть в data

            const before = data.slice(0, index); // копируем объект data с начала до кликнутого id
            const after = data.slice(index + 1); // копируем объект data со следущего элемента после кликнутого id
            const newArr = [...before, ...after]; //склеиваем все в один массив

            return {
                data: newArr // возвращаем  объект data c обновленными данными
            }
        });
    }
    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }


    onToggleImportant(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id); // сравниваем id кликнутого с тем что в объекте

            const old = data[index];  //сохраняем сюда данные до изменений 
            const newItem = { ...old, important: !old.important }; // получаем новый объект с измененным свойством like

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; // склеиваем все обратно в новый массив
            return {
                data: newArr // возвращаем измененный массив в стейт
            }
        });
    }

    onToggleLiked(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id); // сравниваем id кликнутого с тем что в объекте

            const old = data[index];  //сохраняем сюда данные до изменений 
            const newItem = { ...old, like: !old.like }; // получаем новый объект с измененным свойством like

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; // склеиваем все обратно в новый массив
            return {
                data: newArr // возвращаем измененный массив в стейт
            }
        });
    }


    render() {
        const { data } = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    posts={this.state.data}  // пропс откуда берем наш список дел //пропс onDelete который вызывает одноименную ф-цию
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked} />
                <PostAddForm
                    onAdd={this.addItem} />
                <AppFooter />
            </AppBlock>
        )
    }



}


