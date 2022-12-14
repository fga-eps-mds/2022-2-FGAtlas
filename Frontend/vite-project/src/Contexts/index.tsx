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
    const [ subjectChoosed, setSubjectChoosed ] = useState({name: null, id: null})

    const getSubjects = () => {
        axios.get(`${URL}/api/subject/`)
        .then((answer) => {setSubjectsInfos(answer.data)})
        .catch((e) => console.log(e.response.data))
    }

    // const getSubjectLocalization = () => {
    //     axios.get(`${URL}/api/subjec`)
    // }

    return (
        <FgAtlasContexts.Provider
            value = {{
                subjectsInfos,
                getSubjects,
                setSubjectChoosed,
                subjectChoosed
            }}>
                { children }
        </FgAtlasContexts.Provider>
    )
}
