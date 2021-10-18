import React from 'react'
import { Box, IconButton } from '@material-ui/core';
import { useAuth } from '../../../providers/Auth';

import CloseIcon from '@material-ui/icons/Close';

import useStyles from './styles';

const Task = ({ task }) => {    
    const classes = useStyles();
    const { removeTask } = useAuth();

    return (
        <Box className={classes.taskBox}>
            { <p>{task.taskName}</p> }

            <IconButton onClick={() => {removeTask(task)}} size="small" className={classes.taskRemove}>
                <CloseIcon fontSize="medium" />
            </IconButton>
        </Box>
    )
}

export default Task;