import { makeStyles } from "@material-ui/styles";

export default makeStyles({
    taskBox: {
        display: 'flex',        
        alignItems: 'center',
        position: 'relative',
        padding: '10px 0px 10px 6px'
    },

    taskRemove: {
        position: 'absolute',
        right: 0,
    }
});