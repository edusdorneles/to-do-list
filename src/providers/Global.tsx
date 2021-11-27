import React, { useState, useEffect, useRef } from 'react';
import { createTheme } from '@material-ui/core';

// Interfaces
interface IGlobalContext {
    lightMode: string | boolean;
    setLightMode: React.Dispatch<any>;

    theme: any;

    task: string;
    setTask: React.Dispatch<any>;

    taskList: any;
    setTaskList: React.Dispatch<any>;

    taskId: number;
    setTaskId: React.Dispatch<any>;

    addToTaskList(): void;

    TaskInputRef: any;

    removeTask: any;
}

// Valores default
const DEFAULT_VAUE = {
    lightMode: false,
    setLightMode: () => {},

    theme: '',

    task: '',
    setTask: () => {},

    taskList: [],
    setTaskList: () => {},

    taskId: 0,
    setTaskId: () => {},

    addToTaskList: () => {},

    TaskInputRef: '',

    removeTask: () => {}
}


export const GlobalContext = React.createContext<IGlobalContext>(DEFAULT_VAUE);

export const GlobalProvider: React.FC = ({ children }) => {
    const [lightMode, setLightMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: lightMode ? 'light' : 'dark',
        },
    });        

    // Input das tarefas
    const [task, setTask] = useState('');

    // Lista de tarefas com localStorage
    const [taskList, setTaskList] = useState(
        localStorage.getItem('taskList') 
        ? JSON.parse(localStorage.getItem('taskList') || "{}") 
        : []
    );

    const [taskId, setTaskId] = useState(0);
    const TaskInputRef = useRef();
    const addToTaskList = () => {
        if(task.length) {            
            setTaskList([...taskList, {taskName: task}]);
            setTask('');
            setTaskId(taskId + 1);
        } else {
            alert('Insira alguma tarefa!');
        }
    }    

    // Remover tarefa
    const removeTask = (task: any) => {
        const index = taskList.indexOf(task);
        
        if(index >= 0) {
            taskList.splice(index, 1);
            setTaskList([...taskList]);
        } else {
            alert('Erro!');
        }
    }

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList]);

    
    return(
        <GlobalContext.Provider 
            value={{
                theme, 
                lightMode, 
                setLightMode, 
                task, setTask, 
                addToTaskList, 
                TaskInputRef, 
                taskList, 
                removeTask,
                setTaskId,
                taskId,
                setTaskList
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => React.useContext(GlobalContext);