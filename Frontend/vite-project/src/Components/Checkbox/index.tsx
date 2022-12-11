import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";

export default function CheckBox(infos: any) {
    const { label, style } = infos;
    const [ checked, setChecked ] = useState(false);

    const checkBoxStyle = {
        color: '#E9932E',
        '&.Mui-checked': {
          color: '#E9932E',
        },
    }

    return (
        <FormControlLabel sx={style} control={<Checkbox sx={checkBoxStyle} defaultChecked={checked} />} label={label} />
    )
}