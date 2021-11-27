import { Paper } from '@material-ui/core';

// Styles
import useStyles from './styles';

const Footer: React.FC = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Paper elevation={3}>
                <p>© 2021 - Eduardo Dorneles</p>
            </Paper>
        </footer>
    )
}

export default Footer;