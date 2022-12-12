import { Checkbox, FormControlLabel } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { FgAtlasContexts } from "../../Contexts";

export default function CheckBox(infos: any) {
    const { label, style, subjectId, subjectName } = infos;
    const [ checked, setChecked ] = useState(false);
    const [ disableCheckbox, setDisableCheckbox ] = useState(false);
    const { setSubjectChoosed, subjectChoosed } = useContext(FgAtlasContexts);

    const checkBoxStyle = {
        color: '#E9932E',
        '&.Mui-checked': {
          color: '#E9932E',
        },
        '&.Mui-disabled': {
            color: 'grey'
        }
    }

    useEffect(() => {
        if(subjectChoosed.name != null) {
            console.log('oe')
            setDisableCheckbox(true);
        }
        else {
            setDisableCheckbox(false);
        }
    }, [subjectChoosed])

    function checkCheckBox() {
        setChecked(!checked)
        if(!checked) {
            setSubjectChoosed({name: subjectName, id: subjectId});
            console.log(subjectChoosed)
        }
        else {
            setSubjectChoosed({name: null, id: null});
        }
    }

    return (
        <FormControlLabel 
        sx={style} 
        label={label} 
        control={
            <Checkbox 
            sx={checkBoxStyle} 
            disabled={subjectChoosed.id != subjectId && disableCheckbox ? true : false}
            defaultChecked={false} 
            onClick={() =>{
                checkCheckBox()
            }}
            />} 
        />
    )

}