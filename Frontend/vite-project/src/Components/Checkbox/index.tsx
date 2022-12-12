import { Checkbox, FormControlLabel } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { FgAtlasContexts } from "../../Contexts";

export default function CheckBox(infos: any) {
    const { label, style, subjectName } = infos;
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
        if(subjectChoosed != null) {
            setDisableCheckbox(true);
        }
        else {
            setDisableCheckbox(false);
        }
    }, [subjectChoosed])

    function checkCheckBox() {
        setChecked(!checked)
        if(!checked) {
            setSubjectChoosed(subjectName);
        }
        else {
            setSubjectChoosed(null);
        }
    }

    return (
        <FormControlLabel 
        sx={style} 
        label={label} 
        control={
            <Checkbox 
            sx={checkBoxStyle} 
            disabled={subjectChoosed != subjectName && disableCheckbox ? true : false}
            defaultChecked={false} 
            onClick={() =>{
                checkCheckBox()
            }}
            />} 
        />
    )

}