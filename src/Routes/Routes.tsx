import React, { FC } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

//Import Komponenten
import { Create } from '../Components/Create'
import { Details } from '../Components/Details'
import { Edit } from '../Components/Edit'
import { Home } from '../Components/Home'


const RoutePaths = {
    HOME: '/',
    EDIT: '/edit',
    DETAILS: '/details',
    CREATE: '/create',
}



const Routes = (
    <Switch>
        <Route path={RoutePaths.DETAILS}>
            <Details />
        </Route>
        <Route path={RoutePaths.CREATE}>
            <Create />
        </Route>
        <Route path={RoutePaths.EDIT}>
            <Edit />
        </Route>
        <Route path={RoutePaths.HOME}>
            <Home />
        </Route>
    </Switch>
)

export default Routes
