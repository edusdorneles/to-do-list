import React from 'react'
import { Paper, Container, IconButton } from '@material-ui/core';
import { useAuth } from '../../providers/Auth';

import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

import useStyles from './styles';

const Header = () => {
    const { lightMode, setLightMode } = useAuth();

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