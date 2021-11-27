import { Container, Grid, TextField, Button } from '@material-ui/core';
import { useGlobal } from 'providers/Global';

// Styles
import useStyles from './styles';


const TaskInput: React.FC = () => {
    const { task, setTask, addToTaskList, TaskInputRef } = useGlobal();
    const classes = useStyles();

    return (
        <Container className={classes.inputContainer} maxWidth="sm">
            <Grid container spacing={2}>
                <Grid item xs={9} sm={10}>
                    <TextField
                        label="Insira sua tarefa"
                        variant="outlined"                
                        color="secondary"
                        fullWidth
                        value={task}
                        onChange={(e) => {setTask(e.target.value)}}
                        ref={TaskInputRef}
                    />
                </Grid>

                <Grid item xs={3} sm={2}>
                    <Button 
                        variant="outlined" 
                        color="secondary" 
                        fullWidth
                        onClick={() => {addToTaskList()}}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>            
        </Container>
    )
}

export default TaskInput;