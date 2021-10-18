import React, { useState } from 'react'
import { Box, Checkbox, IconButton } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

import useStyles from './styles';

const Task = ({ task }) => {    
    const classes = useStyles();
    const [isChecked, setIsChecked] = useState(task.checked);    

    return (
        <Box className={classes.taskBox}>
            <Checkbox 
                checked={isChecked}
                onChange={(e) => {setIsChecked(e.target.checked)}}                
            />

            { <p className={(isChecked ? classes.taskChecked : 'none')}>{task.taskName}</p> }

            <IconButton size="small" className={classes.taskRemove}>
                <CloseIcon fontSize="medium" />
            </IconButton>
        </Box>
    )
}

export default Task;