import { makeStyles } from "@material-ui/styles";

export default makeStyles({
    taskBox: {
        display: 'flex',        
        alignItems: 'center',
        position: 'relative',
    },

    taskChecked: {
        textDecoration: 'line-through',
    },

    taskRemove: {
        position: 'absolute',
        right: 0,
    }
});