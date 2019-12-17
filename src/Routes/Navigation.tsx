import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import HomeIcon from '@material-ui/icons/Home'
import ImageSearchIcon from '@material-ui/icons/ImageSearch'
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
    <div>
        <Link to="/">
            <IconButton aria-label="create" size="medium">
                <HomeIcon fontSize="large" />
            </IconButton>
        </Link>

        <Link to="/details">
            <IconButton size="medium">
                <ImageSearchIcon fontSize="large" />
            </IconButton>
        </Link>

        <Link to="/create">
            <IconButton aria-label="create" size="medium">
                <AddIcon fontSize="large" />
            </IconButton>
        </Link>

        <Link to="/edit">
            <IconButton aria-label="edit" size="medium">
                <EditIcon fontSize="large" />
            </IconButton>
        </Link>
        <Link to="/delete">
            <IconButton aria-label="delete" size="medium">
                <DeleteIcon fontSize="large" />
            </IconButton>
        </Link>
    </div>
)

export default Navigation
