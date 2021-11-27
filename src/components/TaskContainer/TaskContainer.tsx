import { Container, Paper } from '@material-ui/core';
import { useGlobal } from 'providers/Global';
import Task from './Task/Task';

// Styles
import useStyles from './styles';


const TaskContainer: React.FC = () => {
    const { taskList } = useGlobal();
    const classes = useStyles();

    return (      
        <Container className={classes.taskContainer} maxWidth="sm">
            <Paper className={classes.taskPaper} elevation={3}>
                { 
                    taskList.length
                    ? taskList.map((task: any, idx: number) => (<Task key={idx} task={task} />))
                    : <p className={classes.taskEmpty}>Comece a inserir tarefas!</p>
                }
            </Paper>
        </Container>
    )
}

export default TaskContainer;