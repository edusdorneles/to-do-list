import React, { useState } from 'react'
import { Box, Checkbox } from '@material-ui/core';

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
        </Box>
    )
}

export default Task;