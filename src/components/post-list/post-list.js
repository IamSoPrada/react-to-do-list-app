import React from "react";
import PostListItem from "../post-list-item";
import "./post-list.css"


const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => { // posts - это пропс который хранит this.state.data данные которые берутся со страницы App, объект data, делается это для того чтобы формировать 
    //любое количество ListItems в зависимости от того что пришло с сервера (data)

    const elements = posts.map((item => { // перебираем с помощью метода map
        const { id, ...itemProps } = item; // деструктурируем item на id и itemProps


        return ( // возвращаем верстку 
            <li key={id} className="list-group-item">
                <PostListItem
                    label={itemProps.label}
                    like={itemProps.like}
                    important={itemProps.important}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)} />
            </li>
        )
    }));
    return (
        <ul className="app-list list-group">

            {elements}

        </ul>
    )
}
export default PostList;