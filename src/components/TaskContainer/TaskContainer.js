import React from 'react'
import { Container, Paper } from '@material-ui/core';
import { useAuth } from '../../providers/Auth';
import Task from './Task/Task';

import useStyles from './styles';

const TaskContainer = () => {
    const { taskList } = useAuth();
    const classes = useStyles();

    return (      
        <Container className={classes.taskContainer} maxWidth="sm">
            <Paper className={classes.taskPaper} elevation={3}>
                { 
                    taskList.length
                    ? taskList.map((task, idx) => (<Task key={idx} task={task} />))
                    : <p align="center">Comece a inserir tarefas!</p>
                }
            </Paper>
        </Container>  
    )
}

export default TaskContainer;