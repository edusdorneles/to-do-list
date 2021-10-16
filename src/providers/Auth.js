import React, { useState } from 'react';
import { createTheme } from '@material-ui/core';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [lightMode, setLightMode] = useState(false);

    const theme = createTheme({
        palette: {
            type: lightMode ? 'light' : 'dark',
        },
    });

    return(
        <AuthContext.Provider value={{theme, lightMode, setLightMode}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext);