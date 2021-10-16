import React, { useState, useRef } from 'react';
import { createTheme } from '@material-ui/core';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    // Temas
    const [lightMode, setLightMode] = useState(false);
    const theme = createTheme({
        palette: {
            mode: lightMode ? 'light' : 'dark',
        },
    });        

    // Input das tarefas
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const TaskInputRef = useRef();
    const addToTaskList = () => {
        if(task.length) {
            setTaskList([...taskList, {checked: false, taskName: task}]);
            setTask('');            
        } else {
            alert('Insira alguma tarefa!');
        }
    }

    
    return(
        <AuthContext.Provider value={{theme, lightMode, setLightMode, task, setTask, addToTaskList, TaskInputRef, taskList}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext);