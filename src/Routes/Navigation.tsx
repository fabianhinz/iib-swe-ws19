import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { AppBar, Button, Toolbar } from '@material-ui/core'
import TopBar from '../Components/TopBar'
import { IconButton } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import EditIcon from '@material-ui/icons/Edit'
import AddIcon from '@material-ui/icons/Add'
import ImageSearchIcon from '@material-ui/icons/ImageSearch'


const Navigation = () => 
    <div>
            <Link to='/'>
            <IconButton aria-label="create"  size="medium">
              <HomeIcon fontSize="large" />
            </IconButton>
            </Link>
            
            <Link to='/details'>
            <IconButton size="medium" >
                <ImageSearchIcon fontSize="large" />
            </IconButton>
            </Link>

            <Link to='/create'>
            <IconButton aria-label="create"  size="medium">
                <AddIcon fontSize="large" />
            </IconButton>
            </Link>

            <Link to='/edit'>
            <IconButton aria-label="edit"  size="medium">
                <EditIcon fontSize="large" />
            </IconButton>
            </Link>
    </div>      

export default Navigation