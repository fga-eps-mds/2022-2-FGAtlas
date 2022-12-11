import React, { createContext, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const URL = "http://localhost:8080"

export const FgAtlasContexts = React.createContext<any | null>(null);;

type ButtonProps = {
    children: React.ReactNode;
  };

export const FgAtlasProvider: React.FunctionComponent<ButtonProps> = ({ children }) => {

    const [ subjectsInfos, setSubjectsInfos ] = useState({});

    const getSubjects = () => {
        axios.get(`${URL}/api/subject/`)
        .then((answer) => {setSubjectsInfos(answer.data); console.log(answer.data)})
        .catch((e) => console.log(e.response.data))
    }

    return (
        <FgAtlasContexts.Provider
            value = {{
                subjectsInfos,
                getSubjects
            }}>
                { children }
        </FgAtlasContexts.Provider>
    )
}
