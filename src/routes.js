import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Home from "./pages/Home"
import UserForm from "./pages/UserForm"


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/home" component = {Home}></Route>
                <Route path = "/user" component = {UserForm}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes