import { Paper, Container, IconButton } from '@material-ui/core';
import { useGlobal } from 'providers/Global';

// Styles
import useStyles from './styles';

// Icons
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';


const Header: React.FC = () => {
    const { lightMode, setLightMode } = useGlobal();
    const classes = useStyles();

    return (
        <header>
            <Paper square elevation={3}>
                <Container className={classes.headerContainer} maxWidth="sm">
                    <h2>Lista de Afazeres</h2>
                    
                    <IconButton onClick={() => {setLightMode(!lightMode)}} size="small">
                        { lightMode ? <NightsStayIcon fontSize="medium" /> : <WbSunnyIcon fontSize="medium" /> }
                    </IconButton>
                </Container>
            </Paper>
        </header>
    )
}

export default Header;