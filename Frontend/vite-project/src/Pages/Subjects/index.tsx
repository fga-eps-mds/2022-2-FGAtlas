import style from "./style"
import SubjectInfos from "../../Components/SubjectsInfos"
import { FgAtlasContexts } from "../../Contexts"
import { useContext, useEffect } from "react";
import Loading from "../../Components/Loading";

export default function Subjects() {
    const { getSubjects, subjectsInfos } = useContext(FgAtlasContexts);

    useEffect(() => {
        getSubjects()
    },[]);

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
        </style.Container>
    )
}