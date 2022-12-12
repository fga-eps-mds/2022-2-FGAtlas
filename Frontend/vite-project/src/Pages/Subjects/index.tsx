import style from "./style"
import SubjectInfos from "../../Components/SubjectsInfos"
import { FgAtlasContexts } from "../../Contexts"
import { useContext, useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import { TfiAngleRight } from "react-icons/tfi";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import buttonTheme from "../../GlobalStyles/ButtonStyle/themes";
import { ThemeProvider } from "@mui/material";

export default function Subjects() {
    const { getSubjects, subjectsInfos, subjectChoosed } = useContext(FgAtlasContexts);
    const [ buttonDisabled, setButtonDisabled ] = useState(true)
    

    useEffect(() => {
        getSubjects()
    },[]);

    useEffect(() => {
        if(subjectChoosed.name != null){
            setButtonDisabled(false)
        }
        if(subjectChoosed.name == null) {
            setButtonDisabled(true);
        }
    },[subjectChoosed])

    const ButtonStyleMui = {
        width: '60px',
        height: '60px',
        position: 'relative',
        color: 'white',
        borderRadius: '50%',
        marginBotton: '50px',
        fontSize: '23px',

        '&.Mui-disabled': {
            color: '#E9932E'
        }
    }

    return(
        <style.Container>
            <style.Center>
            <p>Selecione a turma para ver no mapa:</p>
                {subjectsInfos.length != undefined ?
                    (
                        subjectsInfos.map((info: any) => {
                            return (
                                <SubjectInfos props={info}/>
                            )
                        })
                    )
                : 
                    (
                        
                        <div className="load_component">
                            <Loading />
                        </div>
                    )
                }
            </style.Center>
            <style.GoMap>
                <ThemeProvider theme={buttonTheme}>
                    <Stack direction="row" spacing={2}>
                        <Button disabled={buttonDisabled} variant="contained" sx={ButtonStyleMui}><TfiAngleRight /></Button>
                    </Stack>
                </ThemeProvider>   
            </style.GoMap>
        </style.Container>
    )
}