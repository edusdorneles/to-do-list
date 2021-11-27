import { Box, IconButton } from '@material-ui/core';
import { useGlobal } from 'providers/Global';

// Styles
import useStyles from './styles';

// Icons
import CloseIcon from '@material-ui/icons/Close';

// Interfaces
interface IProps {
    key: number;
    task: any;
}


const Task: React.FC<IProps> = ({ task }) => {
    const classes = useStyles();
    const { removeTask } = useGlobal();

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