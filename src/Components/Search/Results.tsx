import { Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core'
import algoliasearch from 'algoliasearch/lite'
import React from 'react'
import { Hits, InstantSearch, RefinementList, SearchBox } from 'react-instantsearch-dom'

import { index } from '../App'
import { Search } from './Search'

const searchClient = algoliasearch('OQ8JBQL1SQ', '685ad40e0ddfa41ec3b7bf9605294351')

const Results = () => (
    <InstantSearch searchClient={searchClient} indexName="recipes">
        <SearchBox searchAsYouType={true} />
        <RefinementList />
        <Hits />
    </InstantSearch>
)

export default Results
