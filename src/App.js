import React from "react";
import { Column } from "./comps/Styled";
import { Route } from "react-router-dom";
import Header from "./comps/Header";
import Searcher from "./comps/Searcher";
import UsersList from "./comps/UsersList";
import UserCard from "./comps/UserCard";
const App = () => {
    return (
        <Column>
            <Header />
            <Route path='/' exact>
                <Searcher />
                <UsersList />
            </Route>
            <Route path='/user-info'>
                <UserCard />
            </Route>
        </Column>
    );
};

export default App;
