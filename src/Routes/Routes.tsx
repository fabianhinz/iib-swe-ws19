import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Create from '../Components/Create/Create'
import Details from '../Components/Details/Details'
import Edit from '../Components/Edit/Edit'
import Home from '../Components/Home/Home'
import Results from '../Components/Search/Results'

//Import Komponenten

const RoutePaths = {
    HOME: '/',
    EDIT: '/edit',
    DETAILS: '/details',
    CREATE: '/create',
    RESULTS: '/results',
}

const Routes = ({ searchQuery }: { searchQuery: String }) => (
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
        <Route
            path={RoutePaths.RESULTS}
            render={() => <Results searchQuery={searchQuery} />}></Route>
        <Route path={RoutePaths.HOME}>
            <Home />
        </Route>
    </Switch>
)

export default Routes
