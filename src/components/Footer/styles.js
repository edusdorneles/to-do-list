import { makeStyles } from '@material-ui/styles';

export default makeStyles({
    footer: {
        width: '100%',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        color: 'white',
        marginTop: '30px',
        position: 'sticky',
        top: '100%',

        '& div p': {
            fontSize: '12px',
        },
    }
});