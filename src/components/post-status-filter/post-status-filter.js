import React, {Component} from "react";
import "./post-status-filter.css"
export default class PostStatusFilter extends Component {
    constructor(props){
        super(props);

        this.buttons = [ // создаем массив наших кнопок, массив создаем для того чтобы перебирать при помощи методов массива (map, filter)
            {
                name : "all",  // имя фильтра по которому отфильтровываем ф-ция filterPost App.js
                label: "Все"
            },
            {
                name : "like",
                label: "Понравилось"
            }
        ]
        this.state ={

        }
    }
    render(){
        const buttons = this.buttons.map(({name, label})=> { // вытаскиваем(деструктуризируем) из массива buttons имя фильтра и label
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const clazz = active ? "btn-dark" : "btn-light"
            return(
                <button 
                    key={name} 
                    type="button" 
                    className={`btn ${clazz}`}
                    onClick={()=> onFilterSelect(name)}>{label}</button>
            );
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
