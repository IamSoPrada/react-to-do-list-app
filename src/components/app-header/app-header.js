import React from "react";
import "./app-header.css";
import styled from "styled-components";

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    cursor: pointer;
    h1{
        font-size: 26px;
        color: whitesmoke;
        :hover{
            color: black
        }
    }
    h2{
        font-size: 1.2rem;
        color: rgb(207, 207, 207);
    }

`

const AppHeader = () => {
    return (
        <Header as ="a">
            <h1> Rustem Tarasevich</h1>
            <h2> 5 записей, из них понравилось 0</h2>

        </Header>
    )
}

export default AppHeader;