import { makeStyles } from "@material-ui/styles";

export default makeStyles({
    headerContainer: {
        position: 'relative',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',        

        '& button': {
            position: 'absolute',
            top: '15px',
            right: '15px',
        },
    },
});