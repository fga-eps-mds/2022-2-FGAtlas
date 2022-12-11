import style from "./style"
import Box from '@mui/material/Box';
import { Collapse, formLabelClasses } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import { useContext, useEffect, useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import { TfiAngleDown, TfiAngleRight } from "react-icons/tfi";
import FormGroup from '@mui/material/FormGroup';


export default function SubjectInfos(props: any) {
    const [ checked, setChecked ] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    console.log(props)
    const controlLabelStyle = {
        width: '100%', 
        boxSizing: 'border-box', 
        margin: '0px',
        color: 'white',
        backgroundColor: '#545454',
        padding: '10px',
        borderRadius: `${checked ? '5px 5px 0px 0px' : '5px'}`,
    }

    const checkBoxStyle = {
        color: '#E9932E',
        '&.Mui-checked': {
          color: '#E9932E',
        },
    }

    const formGroupSyle = {
        width: '30%',
        color: 'white',
        backgroundColor: '#2D2D2D',
        margin: '0px',
    }

    return (
        <style.Card>
            <Box sx={{ width: '100%', height: 'auto', h1: {paddingLeft: '10px', fontSize: '16px'}}} >
                <FormControlLabel
                    control={checked ? <TfiAngleDown /> : <TfiAngleRight />}
                    label={<h1>Matematica discreta</h1>}
                    sx = {controlLabelStyle}
                    onClick={handleChange}
                />
                <Box sx={{width:'100%', display: 'flex'}}>
                    <Collapse in={checked} sx={{ width: '100%'}}>
                        <style.Infos>
                            <div className="general_information">
                                <p>Professor: <b>Bernardini</b></p>
                                <p>Horário: <b>32D32</b></p>
                                <p>Turma: <b>01</b></p>
                            </div>
                            <div className='week_days'>
                                <FormGroup sx={{width: '100%', display: 'flex', flexDirection: 'row' }}>
                                    <FormControlLabel sx={formGroupSyle} control={<Checkbox sx={checkBoxStyle} defaultChecked={false} />} label="Segunda" />
                                    <FormControlLabel sx={formGroupSyle} control={<Checkbox sx={checkBoxStyle} defaultChecked/>} label="Terça" />
                                </FormGroup>
                            </div>
                        </style.Infos>
                    </Collapse>
                </Box>
            </Box>
        </style.Card>
    )
}