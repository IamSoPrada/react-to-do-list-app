import React from "react";
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

const App = () => {

    const data = [
        { label: "Going to learn React", important: true, id : "rtg" },
        { label: "I'd like to eat", important: false, id:"fvc" },
        { label: "Need to buy paper for printer", important: false, id:"ldk" },
    ]


    return (
        <AppBlock>
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
            <AppFooter />
        </AppBlock>
    )
}


export default App;