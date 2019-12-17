import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Create from '../Components/Create/Create'
import Delete from '../Components/Delete/Delete'
import Details from '../Components/Details/Details'
import Edit from '../Components/Edit/Edit'
import Home from '../Components/Home/Home'

//Import Komponenten

const RoutePaths = {
    HOME: '/',
    EDIT: '/edit',
    DELETE: '/delete',
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
        <Route path={RoutePaths.DELETE}>
            <Delete />
        </Route>
    </Switch>
)

export default Routes
