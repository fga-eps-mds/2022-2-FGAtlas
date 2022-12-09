import style from "./style"
import SubjectInfos from "../../Components/SubjectsInfos"


export default function Subjects() {

    return(
        <style.Container>
            <style.Center>
                <p>Selecione a turma para ver no mapa:</p>
                <SubjectInfos />
            </style.Center>
        </style.Container>
    )
}